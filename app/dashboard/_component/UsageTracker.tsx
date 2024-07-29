"use client";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { UpdateCreditContext } from "@/app/(context)/UpdateCreditContext";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { useContext, useEffect, useState } from "react";

const UsageTracker = () => {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const {updateCredit, setUpdateCredit} = useContext(UpdateCreditContext);

  const getData = async () => {
    const result = await db
      .select()
      .from(AIOutput)
      //   @ts-ignore
      .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(AIOutput.id)
      .execute();
    getTotalUsage(result);
  };

  const getTotalUsage = (result: any) => {
    let totalUsage = 0;
    result.forEach((item: any) => {
      totalUsage += item?.aiResponse?.length;
    });
    setTotalUsage(totalUsage);
  };

  useEffect(() => {
    user && getData();
  }, [user]);

  useEffect(() => {
    user && getData();
  }, [updateCredit, user]);

  return (
    <div className="m-5">
      <div className="bg-primary text-white p-4 rounded-lg">
        <h2 className="font-medium mb-1">Credits</h2>
        <div className="h-2 bg-orange-200 rounded-full w-full">
          <div
            className="h-2 bg-white rounded-full"
            style={{ width: `${(totalUsage / 10000) * 100}%` }}
          ></div>
        </div>
        <h2 className="text-sm my-2">{totalUsage}/10,000 Credit Used!</h2>
      </div>
      <Button className="mt-5 bg-gray-100 hover:bg-gray-200 text-primary w-full">
        Upgrade
      </Button>
    </div>
  );
};

export default UsageTracker;
