// src/app/api/test/route.js

export async function GET(req) {
  try {
    // Simulate some data to return
    const data = {
      message: "Test API is working!",
      timestamp: new Date(),
    };

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error in test route:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
