import React from "react";
import TypescriptIcon from "../../atoms/TypescriptIcon";
import FirebaseIcon from "../../atoms/FirebaseIcon";
import GithubIcon from "../../atoms/GithubIcon";
import HomeIcon from "../../atoms/HomeIcon";

export const Todo_app = () => {
  return (
    <div>
      <p className="pl-5 text-lg font-bold">🌟TodoList</p>
      <video
        controls
        muted
        src={"/todolist.mov"}
        style={{ width: "500px", height: "full" }}
      />
      <div className="pl-5">
        <div className="flex py-5  space-x-5">
          <TypescriptIcon />
          <FirebaseIcon />
        </div>
        <p className="w-[450px]">
          はじめに自作したポートフォリオ
          <br />
          最初はreactで作成し、typescriptを学習した後、
          typescriptに書き換え、firebaseと連携させました。
          <br />
          思いの外、firebase用のコードに苦戦しましたが、
          更新時間の機能をなんとかつけられて良かったです。
          <br />
          同時期にtodolistのチーム開発に携われたので、
          そこでの経験も役に立ちました。
          <br />
        </p>
        <div className="flex justify-end py-5 pr-5 space-x-5">
          <a href="https://github.com/natsukiete/Todolist_typescript">
            <GithubIcon />
          </a>
          <a href="https://my-todolist-7tttgsate-natsukiete.vercel.app/">
            <HomeIcon />
          </a>
        </div>
      </div>
    </div>
  );
};
