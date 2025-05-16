export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const backendUrl = process.env.NEXT_PUBLIC_BASE_URL + '/v1/users/loginUser';
            const response = await fetch(backendUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(req.body),
            });

            const data = await response.json();
            res.status(response.status).json(data);
        } catch (error) {
            console.error('Error proxying login request:', error);
            res.status(500).json({ error: 'Failed to login' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}