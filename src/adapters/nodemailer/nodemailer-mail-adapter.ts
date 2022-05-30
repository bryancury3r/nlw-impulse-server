import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c6ab2cb9674fa9",
    pass: "74a37fe848baa8"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedgt.com>',
      to: 'Bryan  Cury <gabriel_bryancury@outlook.com',
      subject, 
      html: body,
  });
  };
}