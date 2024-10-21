const client = require("@mailchimp/mailchimp_marketing");

const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
const SERVER = process.env.MAILCHIMP_API_SERVER;
const API_KEY = process.env.MAILCHIMP_API_KEY;

client.setConfig({
  apiKey: API_KEY,
  server: SERVER,
});

export async function POST(req) {
  try {
    const { email_address, firstName, lastName, phone, location, reason } = await req.json(); 

    const response = await client.lists.addListMember(AUDIENCE_ID, {
      email_address,
      status: "subscribed",
      merge_fields: {
      FNAME: firstName,
      LNAME: lastName,
      PHONE: phone,
     
    },
    });

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
