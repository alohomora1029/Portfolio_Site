"use client"
import React, { useState } from 'react'

export const useEmail = () => {
 const [name,setName] = useState('');
 const [message,setMessage] = useState('');
 const [mail,setMail] = useState('')
 const send = async(e:React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   console.log("送信中・・・");

  await fetch('/api/mail',
  {
     method:'POST',
     body:JSON.stringify({ name:name,
   mail:mail,
   message:message})
     }).then((res)=>{
      if(res.status == 200){
      alert('メール送信完了')
      }else{
         alert('送信できませんでした。')
      }  
     })
   };
   return {
    setName,setMessage,send,setMail
   }
}
