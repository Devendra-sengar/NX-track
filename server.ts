import express from 'express';
import { createServer as createViteServer } from 'vite';
import nodemailer, { type Transporter, type TestAccount } from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json());

// Transporter cache
let cachedTransporter: Transporter | null = null;
let etherealAccount: TestAccount | null = null;

async function getTransporter() {
  if (cachedTransporter) {
    return { transporter: cachedTransporter, isTest: !process.env.SMTP_HOST };
  }

  // Check if custom SMTP is configured
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    cachedTransporter = transporter;
    return { transporter, isTest: false };
  }

  // Fallback to Nodemailer Ethereal sandbox for instant testing without manual SMTP configuration
  try {
    if (!etherealAccount) {
      etherealAccount = await nodemailer.createTestAccount();
      console.log('Created Ethereal test mail account:', etherealAccount.user);
    }
    const transporter = nodemailer.createTransport({
      host: etherealAccount.smtp.host,
      port: etherealAccount.smtp.port,
      secure: etherealAccount.smtp.secure,
      auth: {
        user: etherealAccount.user,
        pass: etherealAccount.pass,
      },
    });
    cachedTransporter = transporter;
    return { transporter, isTest: true };
  } catch (err) {
    console.warn('Could not generate Ethereal account, falling back to JSON stream transporter:', err);
    const transporter = nodemailer.createTransport({
      jsonTransport: true,
    });
    cachedTransporter = transporter;
    return { transporter, isTest: true };
  }
}

// Mailer endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const {
      name,
      company,
      email,
      phone,
      fleetSize,
      requirements,
      source = 'Website CTA Request',
    } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: Name and Business Email are required.',
      });
    }

    const recipient = process.env.RECIPIENT_EMAIL || 'pratham89jo@gmail.com';
    const { transporter, isTest } = await getTransporter();

    const formattedTime = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'long',
    });

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6fa; margin: 0; padding: 24px; color: #131b2e; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border: 1px solid #eaedff; }
    .header { background: linear-gradient(135deg, #006194 0%, #003ea8 100%); color: #ffffff; padding: 28px; text-align: left; }
    .badge { display: inline-block; padding: 4px 10px; background: rgba(255,255,255,0.2); border-radius: 20px; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px; }
    .title { font-size: 22px; font-weight: 700; margin: 0 0 6px 0; color: #ffffff; }
    .subtitle { font-size: 13px; opacity: 0.9; margin: 0; color: #e2e7ff; }
    .content { padding: 28px; }
    .section-title { font-size: 12px; font-weight: 700; text-transform: uppercase; color: #006194; letter-spacing: 0.06em; margin-bottom: 14px; border-bottom: 1px solid #eaedff; padding-bottom: 6px; }
    .table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .table td { padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #f2f3ff; }
    .table td.label { width: 35%; font-weight: 600; color: #3f4850; background: #faf8ff; }
    .table td.value { color: #131b2e; font-weight: 500; }
    .req-box { background: #f2f3ff; border-left: 4px solid #006194; padding: 14px; border-radius: 0 6px 6px 0; font-size: 14px; color: #283044; line-height: 1.5; margin-bottom: 24px; }
    .btn-row { text-align: center; margin-top: 24px; }
    .btn { display: inline-block; padding: 12px 24px; background: #006194; color: #ffffff !important; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; }
    .footer { background: #faf8ff; padding: 18px 28px; font-size: 12px; color: #707881; text-align: center; border-top: 1px solid #eaedff; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="badge">NX Track • Lead Notification</div>
      <h1 class="title">New Demo & Fleet Pilot Request</h1>
      <p class="subtitle">A client submitted the enquiry form on NX Track Portal (${source})</p>
    </div>
    <div class="content">
      <div class="section-title">Lead Information</div>
      <table class="table">
        <tr>
          <td class="label">Full Name</td>
          <td class="value"><strong>${name}</strong></td>
        </tr>
        <tr>
          <td class="label">Company / Org</td>
          <td class="value">${company || 'Not Specified'}</td>
        </tr>
        <tr>
          <td class="label">Business Email</td>
          <td class="value"><a href="mailto:${email}" style="color: #006194; text-decoration: none; font-weight: 600;">${email}</a></td>
        </tr>
        <tr>
          <td class="label">Phone Number</td>
          <td class="value">${phone ? `<a href="tel:${phone}" style="color: #006194; text-decoration: none;">${phone}</a>` : 'Not provided'}</td>
        </tr>
        <tr>
          <td class="label">Fleet Size</td>
          <td class="value"><span style="background: #cce5ff; color: #004b73; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: 600;">${fleetSize || 'General Fleet'}</span></td>
        </tr>
        <tr>
          <td class="label">Submitted At</td>
          <td class="value">${formattedTime}</td>
        </tr>
      </table>

      <div class="section-title">Operational Requirements</div>
      <div class="req-box">
        ${requirements ? requirements.replace(/\n/g, '<br/>') : '<em>No additional requirements specified. The client requested standard onboarding demo.</em>'}
      </div>

      <div class="btn-row">
        <a href="mailto:${email}?subject=RE: NX Track Telematics Demo Request - ${encodeURIComponent(company || name)}" class="btn">Reply to ${name} (${email})</a>
      </div>
    </div>
    <div class="footer">
      This notification was automatically dispatched by <strong>NX Track NodeMailer Dispatcher</strong> for <strong>NexisparkX Group</strong>.<br/>
      Destination: <strong>${recipient}</strong>
    </div>
  </div>
</body>
</html>
    `;

    const fromAddress = process.env.SMTP_FROM || '"NX Track Telematics" <dispatch@nxtrack.io>';

    const info = await transporter.sendMail({
      from: fromAddress,
      to: recipient,
      replyTo: email,
      subject: `🚨 [NX Track Lead] ${company ? company + ' - ' : ''}${name} (${fleetSize || 'Demo Request'})`,
      text: `New NX Track Lead Submission:\n\nName: ${name}\nCompany: ${company || 'N/A'}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nFleet Size: ${fleetSize || 'N/A'}\nRequirements: ${requirements || 'N/A'}\nSubmitted: ${formattedTime}\nSource: ${source}`,
      html: htmlContent,
    });

    console.log('✅ Mail dispatched successfully to:', recipient, 'MessageID:', info.messageId);

    // If Ethereal test account was used, provide preview URL
    let previewUrl: string | false = false;
    if (isTest) {
      previewUrl = nodemailer.getTestMessageUrl(info);
      if (previewUrl) {
        console.log('📬 Ethereal Mail Preview URL:', previewUrl);
      }
    }

    return res.json({
      success: true,
      message: `Enquiry successfully sent to ${recipient}!`,
      recipient,
      messageId: info.messageId,
      previewUrl: previewUrl || null,
      isTestMode: isTest,
      data: {
        name,
        company,
        email,
        phone,
        fleetSize,
        submittedAt: formattedTime,
      },
    });
  } catch (error: any) {
    console.error('❌ Error sending mail via Nodemailer:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to dispatch email. Please check server logs.',
    });
  }
});

// Status check endpoint
app.get('/api/mail-status', async (_req, res) => {
  const isCustomSmtp = Boolean(process.env.SMTP_HOST && process.env.SMTP_USER);
  const recipient = process.env.RECIPIENT_EMAIL || 'pratham89jo@gmail.com';
  res.json({
    status: 'online',
    recipientEmail: recipient,
    isCustomSmtp,
    transport: isCustomSmtp ? 'Production Custom SMTP' : 'Sandbox (Ethereal / Stream)',
  });
});

async function startServer() {
  if (!isProduction) {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        host: '0.0.0.0',
        port: PORT,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 NX Track Server running on http://0.0.0.0:${PORT}`);
    console.log(`📧 Nodemailer destination: ${process.env.RECIPIENT_EMAIL || 'pratham89jo@gmail.com'}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
