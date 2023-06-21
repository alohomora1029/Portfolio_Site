import React from "react";
import Image from 'next/image'
import TypescriptIcon from "../../atoms/TypescriptIcon";
import GithubIcon from "../../atoms/GithubIcon";
import HomeIcon from "../../atoms/HomeIcon";
import NextIcon from "../../atoms/NextIcon";

export default function PortfolioSite() {
  return (
    <div>
      <p className="pl-5 text-lg font-bold">🌟Portfolio_Site</p>
      <Image
       width={500}
       height={500}
       src="/Portfolio_site.png"
       alt="Picture of the Portfolio_Site"
       style={{
        width: 'full',
        height: 'full',
       }}
      />
      <div className="pl-5">
        <div className="flex py-5  space-x-5">
          <NextIcon />
          <TypescriptIcon />
        </div>
        <p className="w-[450px]">
          こちらのサイト
          <br />
          トップページにある自動でタイプされる文字を改行させて遊びました。
          また、sliderを使って、下にスライド形式でスクロールさせました。sliderが一番苦戦しました。<br />
          また、headerコンポーネントを別ディレクトリのlayoutで流用しようとしたら、トップページに戻る際にLink使用によるエラーが発生して、沼りました。解決策は模索中です。<br/>
          デザインをできるだけスタイリッシュにしたくて、背景画像が波打っている動画にしたかったのですが、どこも有料のため静止画です。徐々に改善していきたいと思います！<br/>
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
