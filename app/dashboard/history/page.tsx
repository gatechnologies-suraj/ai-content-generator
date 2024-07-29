"use client";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import { Loader2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Page = () => {
  const { user } = useUser();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const results = await db
        .select()
        .from(AIOutput)
        // @ts-ignore
        .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress))
        .orderBy(AIOutput.id)
        .execute();

      setData(results);
    } catch (err) {
      console.error("Error fetching data: ", err);
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (content: string, id: number) => {
    navigator.clipboard.writeText(content).then(
      () => {
        console.log("Text copied to clipboard");
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
      },
      (err) => {
        console.error("Failed to copy text: ", err);
      }
    );
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  return (
    <div className="p-4">
      {loading ? (
        <div className="flex justify-center items-center">
          <Loader2 className="animate-spin h-6 w-6 text-gray-600" />
        </div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : data && data.length > 0 ? (
        <table className="w-full border-collapse shadow-xl bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="border-b p-4 text-left font-semibold">TEMPLATE</th>
              <th className="border-b p-4 text-left font-semibold">AIRESP</th>
              <th className="border-b p-4 text-left font-semibold">DATE</th>
              <th className="border-b p-4 text-left font-semibold">WORDS</th>
              <th className="border-b p-4 text-left font-semibold">COPY</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: any) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="border-b p-4">{item.templateSlug}</td>
                <td className="border-b p-4">
                  {item.aiResponse.slice(0, 50)}...
                </td>
                <td className="border-b p-4">{item.createdAt}</td>
                <td className="border-b p-4">{item.formData.length}</td>
                <td className="border-b p-4 flex items-center">
                  <Button
                    className=" text-white px-2 py-1 rounded "
                    onClick={() =>
                      handleCopy(
                        `${item.templateSlug}\n${item.aiResponse}\n${item.createdAt}`,
                        item.id
                      )
                    }
                  >
                    Copy
                  </Button>
                  {copiedId === item.id && (
                    <Check className="ml-2 text-green-500" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center text-gray-600">No history found!</div>
      )}
    </div>
  );
};

export default Page;
