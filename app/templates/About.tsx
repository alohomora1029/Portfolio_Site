import React from "react";

export default function About() {
  return (
    <div
      className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col items-center mb-32">
        <div className="font-montserrat text-2xl pr-96">About</div>
        <div className="max-w-md max-h-fit p-5 text-left  bg-slate-200
bg-opacity-50 rounded-lg shadow-lg">
          <p className="font-montserrat text-opacity-70">
            はじめまして。
            <br />
            東京でエンジニアをしております。直近はAWSの基盤の追加開発に携わっております。
            <br />
            業務外では最初に<a className="underline decoration-sky-500">frontend〜backend</a>幅広く勉強し始め、reactやnext.jsを使用して開発していました。最近は
            <a href="https://recursionist.io/">recursion</a>を通じて<a className="underline decoration-pink-500">backend</a>（アルゴリズム等）を勉強中です。
            <br />
            <a className="underline decoration-pink-500">backend</a>を中心にフルスタックに活躍できるようになりたいと思っています。
            <br />
            趣味はゲームとk-popが好きでよく聞いています。
          </p>
        </div>
      </div>
      </div>
  );
}
