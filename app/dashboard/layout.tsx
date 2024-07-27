import Header from "./_component/Header";
import Sidebar  from "./_component/Sidebar";
import React from "react";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="md:w-64 md:block hidden fixed">
        <Sidebar />
      </div>
      <div className="md:ml-64">
        <Header />
        {children}
        </div>
    </div>
  );
}

export default layout;
