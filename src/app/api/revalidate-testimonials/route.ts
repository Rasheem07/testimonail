import type { NextApiRequest, NextApiResponse } from 'next'

export async function POST(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const space_name = req.query?.space_name || 'rasheem'; // Access space_name from the query parameters

  // Check for secret to confirm this is a valid request
  if (req.query?.secret !== 'rasheem123') {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    // This should be the actual path, for example "/testimonials/[space_name]"
    await res.revalidate(`/testimonials/${space_name}`); // Use the dynamic space_name in the revalidation path
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue to show the last successfully generated page
    return res.status(500).send('Error revalidating');
  }
}
