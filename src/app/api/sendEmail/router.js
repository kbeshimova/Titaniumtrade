import nodemailer from "nodemailer";

export async function POST(req) {
  const { email } = await req.json();

  if (!email) {
    return new Response(
      JSON.stringify({ message: "Email is required" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.titaniumtradelimited.com",
      port: 465,
      secure: true,
      auth: {
        user: "info@titaniumtradelimited.com",
        pass: "kdjtZqZGnHs7RRTnJV4p",
      },
    });

    const mailOptions = {
      from: "info@titaniumtradelimited.com",
      to: "info@titaniumtradelimited.com",
      subject: "Новый подписчик на почту",
      text: `Новый пользователь оставил свой email: ${email}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ message: "Error sending email" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}