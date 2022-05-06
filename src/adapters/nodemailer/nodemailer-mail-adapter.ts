import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapters";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ebf04edda43d1d",
    pass: "efe85ac97284ad"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
        from: 'Equipe Feedget <oi@feeedget.com>',
        to: 'Lucas Gomes <lgomes.lg99@gmail.com>',
        subject,
        html: body
      });
  };
}

