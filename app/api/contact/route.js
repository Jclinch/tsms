import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, message, captchaToken } = await req.json();

    // === Verify reCAPTCHA ===
    const captchaRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`
    });
    const captchaData = await captchaRes.json();

    if (!captchaData.success) {
      return new Response(JSON.stringify({ error: 'reCAPTCHA failed' }), { status: 400 });
    }

    // === Send Email ===
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.sendMail({
      from: `"TotalScope Website" <${process.env.SMTP_USER}>`,
      to: 'info@totalscopemarketing.org',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h3>New message from ${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}
