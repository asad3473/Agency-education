import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const sendVerificationCode = async (to, code) => {
  await transporter.sendMail({
    from: process.env.MAIL_USER,
    to,
    subject: "Verify your email",
    text: `Your verification code is: ${code}`,
  });
};

export { transporter, sendVerificationCode };