import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    try {
      // Настройка транспортера для отправки почты
      const transporter = nodemailer.createTransport({
        service: "gmail", // Используйте вашу почтовую службу (например, Gmail, Outlook)
        auth: {
          user: "karinabeshimova1998@gmail.com", // Замените на ваш email
          pass: "lzxr wrvi zqnp adqs", // Замените на ваш пароль приложения
        },
      });

      // Настройка письма
      const mailOptions = {
        from: "karinabeshimova1998@gmail.com", // Отправитель
        to: "karinabeshimova1998@gmail.com", // Получатель (ваш email)
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