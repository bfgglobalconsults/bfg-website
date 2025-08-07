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
    const { email, firstName, lastName, phone, title, company, message } =
      await req.json();

    // Create subscriber hash from the lowercase email address
    const subscriberHash = crypto
      .createHash("md5")
      .update(email.toLowerCase())
      .digest("hex");

    const merge_fields = {
      FNAME: firstName,
      LNAME: lastName,
      EMAIL: email,
      TITLE: title,
      PHONE: phone,
      COMPANY: company,
      MESSAGE: message,
    };

    const response = await client.lists.setListMember(
      AUDIENCE_ID,
      subscriberHash,
      {
        email,
        status_if_new: "subscribed",
        merge_fields,
        tags: ["Program Waitlist"],
      }
    );

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error(
      "Error in SUBSCRIBE route:",
      err.response?.body || err.message
    );
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
