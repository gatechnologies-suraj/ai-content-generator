"use client";

import { Button } from "@/components/ui/button";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-10 mx-2">Upgrade With Monthly Plan</h1>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {/* Free Plan */}
        <div className="w-full max-w-xs bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Free</h2>
          <div className="text-4xl font-bold mb-4">0$<span className="text-lg font-normal">/month</span></div>
          <ul className="mb-6 space-y-2">
            <li>10,000 Words/Month</li>
            <li>50+ Content Templates</li>
            <li>Unlimited Download & Copy</li>
            <li>1 Month of History</li>
          </ul>
          <Button className="w-full bg-gray-200 text-gray-700 cursor-default" disabled>
            Currently Active Plan
          </Button>
        </div>

        {/* Monthly Plan */}
        <div className="w-full max-w-xs bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Monthly</h2>
          <div className="text-4xl font-bold mb-4">9.99$<span className="text-lg font-normal">/month</span></div>
          <ul className="mb-6 space-y-2">
            <li>1,00,000 Words/Month</li>
            <li>50+ Template Access</li>
            <li>Unlimited Download & Copy</li>
            <li>1 Year of History</li>
          </ul>
          <Button className="w-full bg-primary text-white">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
