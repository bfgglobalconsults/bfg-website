import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";

export async function POST(request, { params }) {
  try {
    const payload = await getPayloadHMR({ config: configPromise });
    const { token } = params;
    const body = await request.json();
    const { new_password } = body;

    if (!token) {
      return Response.json(
        { success: false, message: "Token is required." },
        { status: 400 }
      );
    }

    if (!new_password) {
      return Response.json(
        { success: false, message: "New password is required." },
        { status: 400 }
      );
    }

    if (new_password.length < 8) {
      return Response.json(
        { success: false, message: "Password must be at least 8 characters long." },
        { status: 400 }
      );
    }

    // Find user with this reset token
    const users = await payload.find({
      collection: "users",
      where: {
        resetPasswordToken: { equals: token },
      },
    });

    if (!users.docs || users.docs.length === 0) {
      return Response.json(
        { success: false, message: "Invalid or expired reset token." },
        { status: 400 }
      );
    }

    const user = users.docs[0];

    // Check if token has expired
    if (!user.resetPasswordExpiration || new Date(user.resetPasswordExpiration) < new Date()) {
      return Response.json(
        { success: false, message: "Reset token has expired. Please request a new one." },
        { status: 400 }
      );
    }

    // Update password and clear reset token
    await payload.update({
      collection: "users",
      id: user.id,
      data: {
        password: new_password,
        resetPasswordToken: null,
        resetPasswordExpiration: null,
      },
    });

    return Response.json({
      success: true,
      message: "Password has been reset successfully. You can now login with your new password.",
    });
  } catch (error) {
    console.error("Error resetting password:", error);
    return Response.json(
      { success: false, message: "Failed to reset password. Please try again." },
      { status: 500 }
    );
  }
}
