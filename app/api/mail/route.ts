import {createTransport} from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req:Request,res:Response){
  const body = await req.json()
  const transporter = createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_my_user,
    pass: process.env.NEXT_PUBLIC_my_password,
  },
  tls: {
    rejectUnauthorized: false,
  },
});
try{
  await transporter.sendMail({
  from: `${body.name}`,
  to: process.env.NEXT_PUBLIC_my_user,
  subject: 'お問い合わせ',
  html: `<div>From:${body.name}</div>
  <div>Mail:${body.mail}</div>
  <div>Message:${body.message}</div>`,
})
return NextResponse.json({
  success:true
})
}catch(error){
  console.log('送信できませんでした')
  throw error
}
}