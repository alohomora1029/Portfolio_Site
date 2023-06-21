import React from "react";
import PFrame from "../molecules/PFrame";
import { Todo_app } from "../organisms/Portfolios/Todo_app";
import Anki_app from "../organisms/Portfolios/Anki_app";
import Link from "next/link";

export default function Portfolios() {
  return (
    <div className="min-h-screen min-w-full">
      <div className="flex justify-center space-x-20 mt-10">
        <PFrame>
          <Anki_app />
        </PFrame>
        <div>
        <PFrame>
          <Todo_app />
        </PFrame>
        <div className="flex justify-end">
        <Link
          href={"/branch/work"}
          className="mt-5 text-lg font-bold ease-in duration-300 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500"
        >
          And More...??
        </Link>
        </div>
      </div>
      </div>
    </div>
  );
}
