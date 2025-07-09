const client = require("@mailchimp/mailchimp_marketing");
const crypto = require("crypto");

const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
const SERVER = process.env.MAILCHIMP_API_SERVER;
const API_KEY = process.env.MAILCHIMP_API_KEY;

client.setConfig({
  apiKey: API_KEY,
  server: SERVER,
});

export async function POST(req) {
  try {
    const { email_address, firstName, lastName, phone, organization, location, product } = await req.json();

    // Create subscriber hash from the lowercase email address
    const subscriberHash = crypto.createHash("md5").update(email_address.toLowerCase()).digest("hex");

    const merge_fields = {
      FNAME: firstName,
      LNAME: lastName,
        PHONE: phone,
        COMPANY: organization,
        LOCATION: location,
        PRODUCT: product,
    };
  

    const response = await client.lists.setListMember(
      AUDIENCE_ID,
      subscriberHash,
      {
        email_address,
        status_if_new: "subscribed",
        merge_fields,
        tags: ["Product Waitlist"],
      }
    );

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error("Error in SUBSCRIBE route:", err.response?.body || err.message);
    return new Response(
      JSON.stringify({ error: err.response?.body || err.message }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}