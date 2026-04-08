import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import crypto from "crypto";

export async function POST(request) {
  try {
    const payload = await getPayloadHMR({ config: configPromise });
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return Response.json(
        { success: false, message: "Email is required." },
        { status: 400 }
      );
    }

    // Find user by email
    const users = await payload.find({
      collection: "users",
      where: {
        email: { equals: email.toLowerCase() },
      },
    });

    // Always return success to prevent email enumeration
    if (!users.docs || users.docs.length === 0) {
      return Response.json({
        success: true,
        message: "If an account exists with this email, a password reset link has been sent.",
      });
    }

    const user = users.docs[0];

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour from now

    // Update user with reset token
    await payload.update({
      collection: "users",
      id: user.id,
      data: {
        resetPasswordToken: resetToken,
        resetPasswordExpiration: resetTokenExpiry.toISOString(),
      },
    });

    // Create reset URL
    const resetUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/reset-password?token=${resetToken}`;

    // TODO: Send email with reset link
    // For now, we'll log it (you'll need to implement email sending)
    console.log('Password Reset Link:', resetUrl);
    console.log('User:', user.email);

    // In production, you would send an email here using your email service
    // Example with nodemailer:
    /*
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: user.email,
      subject: 'Password Reset Request',
      html: `
        <p>You requested a password reset.</p>
        <p>Click this link to reset your password:</p>
        <a href="${resetUrl}">${resetUrl}</a>
        <p>This link will expire in 1 hour.</p>
        <p>If you didn't request this, please ignore this email.</p>
      `,
    });
    */

    return Response.json({
      success: true,
      message: "If an account exists with this email, a password reset link has been sent.",
      // Remove this in production - only for testing
      ...(process.env.NODE_ENV === 'development' && { resetUrl }),
    });
  } catch (error) {
    console.error("Error in forgot password:", error);
    return Response.json(
      { success: false, message: "Failed to process request. Please try again." },
      { status: 500 }
    );
  }
}
