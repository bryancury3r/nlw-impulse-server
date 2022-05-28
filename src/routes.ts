import { prisma } from './prisma';
import express from 'express'
import nodemailer from 'nodemailer'


export const routes = express.Router()

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c6ab2cb9674fa9",
    pass: "74a37fe848baa8"
  }
});

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = 

  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedgt.com>',
    to: 'Bryan  Cury <gabriel_bryancury@outlook.com',
    subject: 'Novo feedback', 
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`
    ].join('\n')
  })

  return res.status(201).json({ data: feedback });
});