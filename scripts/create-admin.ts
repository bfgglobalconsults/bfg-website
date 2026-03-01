import "dotenv/config";
import { getPayload } from "payload";
import config from "../src/payload.config";

async function createAdmin() {
  const payload = await getPayload({ config });

  try {
    // Create a new super admin user
    const user = await payload.create({
      collection: "users",
      data: {
        email: "admin@bfgconsults.com",
        password: "Admin@123456",
        role: "super-admin",
      },
    });

    console.log("✅ Admin user created successfully!");
    console.log("Email:", user.email);
    console.log("Password: Admin@123456");
    console.log("\n⚠️  Please change this password after logging in!");

    process.exit(0);
  } catch (error) {
    if (error.message.includes("duplicate")) {
      console.log("❌ User with this email already exists.");
      console.log("\nTrying to update password instead...");

      try {
        // Find the user
        const users = await payload.find({
          collection: "users",
          where: {
            email: {
              equals: "admin@bfgconsults.com",
            },
          },
        });

        if (users.docs.length > 0) {
          // Update the password
          await payload.update({
            collection: "users",
            id: users.docs[0].id,
            data: {
              password: "Admin@123456",
            },
          });

          console.log("✅ Password reset successfully!");
          console.log("Email: admin@bfgconsults.com");
          console.log("Password: Admin@123456");
          console.log("\n⚠️  Please change this password after logging in!");
        }
      } catch (updateError) {
        console.error("❌ Error updating password:", updateError);
      }
    } else {
      console.error("❌ Error creating admin:", error);
    }

    process.exit(1);
  }
}

createAdmin();
