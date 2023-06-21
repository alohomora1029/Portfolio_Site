"use client";
import { useEffect } from "react";
import { useEmail } from "../atoms/useEmail";

export default function Email() {
  const { setName, setMessage, setMail, send } = useEmail();
 
  return (
    <div className="flex justify-center mt-10 max-w-full,max-h-full">
      <div className="bg-neutral-100 max-w-md max-h-fit p-5 text-left bg-opacity-40 rounded-lg shadow-lg m-10">
        <form className="flex flex-col" onSubmit={send}>
          <label className="text-lg font-semibold" htmlFor="name">お名前</label>
          <input
            className="mb-5 p-2 rounded-md"
            id="name"
            type="text"
            autoComplete="given-name"
            onChange={(e) => setName(e.target.value)}
            required 
          />
          <label className="text-lg font-semibold" htmlFor="email">Email</label>
          <input
          className="mb-5 p-2 rounded-md"
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="info@example.com"
            onChange={(e) => setMail(e.target.value)}
            required
          />
          <label className="text-lg font-semibold" htmlFor="message">お問い合わせ内容</label>
          <textarea
          className="mb-5 w-80 h-40 p-2 rounded-md"
            id="message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button className="bg-sky-500 w-fit p-2 cursor-pointer rounded-lg hover:bg-yellow-200 hover:translate-y-1" type="submit" 
          >
            Click me
          </button>
        </form>
      </div>
    </div>
  );
}
