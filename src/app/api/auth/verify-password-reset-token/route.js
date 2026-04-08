import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";

export async function POST(request) {
  try {
    const payload = await getPayloadHMR({ config: configPromise });
    const body = await request.json();
    const { token } = body;

    if (!token) {
      return Response.json(
        { success: false, message: "Token is required." },
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

    return Response.json({
      success: true,
      message: "Token is valid.",
      email: user.email,
    });
  } catch (error) {
    console.error("Error verifying reset token:", error);
    return Response.json(
      { success: false, message: "Failed to verify token. Please try again." },
      { status: 500 }
    );
  }
}
