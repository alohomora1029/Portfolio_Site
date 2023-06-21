import PFrame from "@/app/molecules/PFrame";
import Anki_app from "@/app/organisms/Portfolios/Anki_app";
import PortfolioSite from "@/app/organisms/Portfolios/PortfolioSite";
import { Todo_app } from "@/app/organisms/Portfolios/Todo_app";
import React from "react";

export default function Work() {
  return (
    <div className="min-h-screen min-w-full mb-10 mt-10">
      <div className="flex justify-center space-x-20">
      <PFrame>
          {/* coming soon */}
        </PFrame>
        <PFrame>
          <PortfolioSite />
        </PFrame>
      </div>
      <div className="flex justify-center space-x-20 mt-10">
        <PFrame>
          <Anki_app />
        </PFrame>
        <PFrame>
          <Todo_app />
        </PFrame>
      </div>
    </div>
  );
}
