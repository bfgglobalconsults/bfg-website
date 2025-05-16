// pages/api/users.js (Next.js)
export default async function handler(req, res) {
    try {
      const response = await fetch(`process.env.NEXT_PUBLIC_BASE_URL/`, { // Proxy to your Express.js server
        method: req.method,
        headers: req.headers, // Forward necessary headers
        body: req.method !== 'GET' ? req.body : undefined,
      });
      const data = await response.json();
      res.status(response.status).json(data);
    } catch (error) {
      console.error('Error proxying request:', error);
      res.status(500).json({ error: 'Failed to fetch data from backend' });
    }
  }