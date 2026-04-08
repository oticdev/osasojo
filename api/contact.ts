import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message } = req.body as {
    name?: string
    email?: string
    message?: string
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' })
  }

  const token = process.env.PUSHOVER_TOKEN
  const user = process.env.PUSHOVER_USER

  if (!token || !user) {
    return res.status(500).json({ error: 'Server misconfiguration.' })
  }

  const pushoverMessage = `New portfolio enquiry from ${name} (${email}):\n\n${message}`

  const response = await fetch('https://api.pushover.net/1/messages.json', {
    method: 'POST',
    body: new URLSearchParams({
      token,
      user,
      title: `Portfolio: Message from ${name}`,
      message: pushoverMessage,
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    console.error('Pushover error:', error)
    return res.status(500).json({ error: 'Failed to send message. Please try emailing directly.' })
  }

  return res.status(200).json({ success: true })
}
