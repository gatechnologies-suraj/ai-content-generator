"use client";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import { UpdateCreditContext } from "../(context)/UpdateCreditContext";
import Header from "./_component/Header";
import Sidebar from "./_component/Sidebar";
import React from "react";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [totalUsage, setTotalUsage] = React.useState(0);
  const [updateCredit, setUpdateCredit] = React.useState<any>();

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <UpdateCreditContext.Provider value={{ updateCredit, setUpdateCredit  }}>
      <div className="">
        <div className="md:w-64 md:block hidden fixed bg-white">
          <Sidebar />
        </div>
        <div className="md:ml-64">
          <Header />
          {children}
        </div>
        <div></div>
      </div>
      </UpdateCreditContext.Provider>
    </TotalUsageContext.Provider>
  );
}

export default layout;
