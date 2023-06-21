import React from "react";
import TypescriptIcon from "../../atoms/TypescriptIcon";
import GithubIcon from "../../atoms/GithubIcon";
import HomeIcon from "../../atoms/HomeIcon";
import NextIcon from "../../atoms/NextIcon";

export default function Anki_app() {
  return (
    <div>
      <p className="pl-5 text-lg font-bold">🌟Anki_app</p>
      <video
        controls
        muted
        src={"/anki_app.mov"}
        style={{ width: "500px", height: "full" }}
      />
      <div className="pl-5">
        <div className="flex py-5  space-x-5">
          <NextIcon />
          <TypescriptIcon />
        </div>
        <p className="w-[450px]">
          Anki用ポートフォリオ。next13で作成しています。
          <br />
          英語勉強の際に愛用していた
          <a
            href="https://apps.ankiweb.net/"
            className="underline decoration-sky-500 hover:text-sky-600"
          >
            Anki
          </a>
          というアプリがあり
          <br />
          そのアプリに単語・画像・英英辞書の意味を追加して、
          自分の用の辞書が作りたいと思い作成しました。
          <br />
          googleのCustom Search APIで画像を検索し、
          メリアム・ウェブスターのAPIを使用して、
          英英辞典の意味を取り出しています。
          <br />
          最後のCSV化はjson2csvを使用しました。
          <br />
          Ankiの追加機能はpythonで作るのが主流でしたので、
          pythonを学ぶきっかけになりました。
          <br />
        </p>
        <div className="flex justify-end py-5 pr-5 space-x-5">
          <a href="https://github.com/natsukiete/make-anki-app/tree/main">
            <GithubIcon />
          </a>
          <a href="https://make-anki-app.vercel.app/">
            <HomeIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
