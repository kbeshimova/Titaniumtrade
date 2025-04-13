import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    try {
      // Настройка транспортера с использованием почты info@titaniumtradelimited.com
      const transporter = nodemailer.createTransport({
        host: "smtp.titaniumtradelimited.com", // замените на SMTP-хост вашего провайдера
        port: 465, // либо 465 для SSL или 587 для STARTTLS
        secure: true, // true для 465 или false для 587
        auth: {
          user: "info@titaniumtradelimited.com",
          pass: "kdjtZqZGnHs7RRTnJV4p", // укажите пароль или пароль приложения
        },
      });

      // Настройка письма
      const mailOptions = {
        from: "info@titaniumtradelimited.com", // отправитель
        to: "info@titaniumtradelimited.com",   // получатель (ваш email)
        subject: "Новый подписчик на почту",
        text: `Новый пользователь оставил свой email: ${email}`,
      };

      // Отправка письма
      await transporter.sendMail(mailOptions);

      return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ message: "Error sending email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}