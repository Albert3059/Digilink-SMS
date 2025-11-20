import resend from "./resend";

type SendEmailOptions = {
  from?: string;
  to: string;
  subject: string;
  html?: string;
  maxRetries?: number;
};

async function sleep(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

export async function sendEmail(options: SendEmailOptions) {
  const from = options.from || process.env.EMAIL_FROM || "Digilink IT Subscription Management System <info@digilinkict.co.za>";
  const maxRetries = options.maxRetries ?? 3;

  let attempt = 0;
  let lastError: any = null;

  while (attempt <= maxRetries) {
    try {
      const result = await resend.emails.send({
        from,
        to: options.to,
        subject: options.subject,
        html: options.html,
      });

      // Resend returns an object with possible `error`
      if ((result as any).error) {
        lastError = (result as any).error;
        throw lastError;
      }

      return { success: true, data: result };
    } catch (err: any) {
      lastError = err;
      attempt += 1;

      // Exponential backoff: 500ms * 2^(attempt-1)
      const delay = 500 * Math.pow(2, attempt - 1);
      console.warn(`[email] send attempt ${attempt} failed. Retrying in ${delay}ms.`, err?.message || err);

      if (attempt > maxRetries) {
        console.error(`[email] all ${maxRetries} retries failed.`, lastError?.message || lastError);
        return { success: false, error: lastError };
      }

      // wait before retry
      // eslint-disable-next-line no-await-in-loop
      await sleep(delay);
    }
  }

  return { success: false, error: lastError };
}

export default sendEmail;
