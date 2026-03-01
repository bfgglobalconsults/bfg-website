import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  auth: {
    tokenExpiration: 7200, // 2 hours
    verify: false, // Set to true if you want email verification
    maxLoginAttempts: 5,
    lockTime: 600 * 1000, // 10 minutes
    forgotPassword: {
      generateEmailHTML: ({ token, user }) => {
        const resetURL = `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/admin/reset-password?token=${token}`;
        return `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .button { 
                  display: inline-block; 
                  padding: 12px 24px; 
                  background-color: #E26015; 
                  color: white; 
                  text-decoration: none; 
                  border-radius: 5px; 
                  margin: 20px 0;
                }
                .footer { margin-top: 30px; font-size: 12px; color: #666; }
              </style>
            </head>
            <body>
              <div class="container">
                <h2>Password Reset Request</h2>
                <p>Hi ${user.name || user.email},</p>
                <p>You recently requested to reset your password for your BFG Consults account.</p>
                <p>Click the button below to reset your password:</p>
                <a href="${resetURL}" class="button">Reset Password</a>
                <p>Or copy and paste this link into your browser:</p>
                <p style="word-break: break-all;">${resetURL}</p>
                <p>This link will expire in 1 hour.</p>
                <p>If you didn't request a password reset, please ignore this email or contact support if you have concerns.</p>
                <div class="footer">
                  <p>Best regards,<br>BFG Consults Team</p>
                </div>
              </div>
            </body>
          </html>
        `;
      },
      generateEmailSubject: () => "Reset Your Password - BFG Consults",
    },
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: "user",
      options: [
        { label: "Super Admin", value: "super-admin" },
        { label: "Admin", value: "admin" },
        { label: "HR Admin", value: "hr-admin" },
        { label: "Blogger", value: "blogger" },
        { label: "User", value: "user" },
      ],
      access: {
        update: ({ req: { user } }) => (user as any)?.role === "super-admin",
      },
    },
  ],
  access: {
    create: ({ req: { user } }) =>
      (user as any)?.role === "super-admin" || (user as any)?.role === "admin",
    read: () => true,
    update: ({ req: { user } }) =>
      (user as any)?.role === "super-admin" || (user as any)?.role === "admin",
    delete: ({ req: { user } }) => (user as any)?.role === "super-admin",
  },
};


