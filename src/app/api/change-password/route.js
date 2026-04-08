import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import { cookies } from "next/headers";

export async function POST(request) {
  try {
    const payload = await getPayloadHMR({ config: configPromise });
    const cookieStore = await cookies();
    const token = cookieStore.get("payload-token");

    if (!token) {
      return Response.json(
        { success: false, message: "Unauthorized. Please login." },
        { status: 401 }
      );
    }

    // Verify the token and get the current user
    const { user } = await payload.auth({ headers: request.headers });

    if (!user) {
      return Response.json(
        { success: false, message: "Unauthorized. Please login." },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { currentPassword, newPassword } = body;

    if (!currentPassword || !newPassword) {
      return Response.json(
        {
          success: false,
          message: "Current password and new password are required.",
        },
        { status: 400 }
      );
    }

    if (newPassword.length < 8) {
      return Response.json(
        {
          success: false,
          message: "New password must be at least 8 characters long.",
        },
        { status: 400 }
      );
    }

    // Verify current password by attempting to login
    try {
      await payload.login({
        collection: "users",
        data: {
          email: user.email,
          password: currentPassword,
        },
      });
    } catch (error) {
      return Response.json(
        { success: false, message: "Current password is incorrect." },
        { status: 400 }
      );
    }

    // Update the password
    await payload.update({
      collection: "users",
      id: user.id,
      data: {
        password: newPassword,
      },
    });

    return Response.json({
      success: true,
      message: "Password changed successfully.",
    });
  } catch (error) {
    console.error("Error changing password:", error);
    return Response.json(
      {
        success: false,
        message: "Failed to change password. Please try again.",
      },
      { status: 500 }
    );
  }
}
