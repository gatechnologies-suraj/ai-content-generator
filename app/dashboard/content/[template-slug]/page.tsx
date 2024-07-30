"use client";
import React, { useContext, useState } from "react";
import FormSection from "../_component/FormSection";
import OutputSection from "../_component/OutputSection";
import Templates from "@/app/(data)/Templates";
import { Template } from "@/types/types";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AIModel";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { useRouter } from "next/navigation";
import { UpdateCreditContext } from "@/app/(context)/UpdateCreditContext";

interface Props {
  params: {
    "template-slug": string;
  };
}

const CreateContent = (props: Props) => {
  const { user } = useUser();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState("");
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { updateCredit, setUpdateCredit } = useContext(UpdateCreditContext);

  const selectedTemplate: Template | undefined = Templates?.find(
    (template) => template?.slug === props?.params["template-slug"]
  );

  const GenerateAiContent = async (userInputData: any) => {
    if (totalUsage >= 10000) {
      alert(
        "You have reached your limit of 10,000 credits. Please upgrade your plan to continue using the app."
      );
      router.push("/dashboard/billing");
      return;
    }

    setIsLoading(true);

    try {
      const SelectPrompt = selectedTemplate?.aiPrompt;
      const FinalPrompt = JSON.stringify(userInputData) + ", " + SelectPrompt;
      const result = await chatSession.sendMessage(FinalPrompt);
      const aiResponseText = await result.response.text();

      setAiOutput(aiResponseText);
      await saveDB(userInputData, selectedTemplate?.slug, aiResponseText);

      // Calculate and update the total usage
      const newUsage = aiResponseText.length;
      setTotalUsage((prevTotalUsage: any) => prevTotalUsage + newUsage);
    } catch (error) {
      console.error("Error generating AI content:", error);
      alert("Failed to generate AI content. Please try again later.");
    } finally {
      setIsLoading(false);
      setUpdateCredit(Date.now());
    }
  };

  const saveDB = async (formData: any, slug: any, aiOutput: any) => {
    try {
      // @ts-ignore
      await db.insert(AIOutput).values({
        formData: formData,
        templateSlug: slug,
        aiResponse: aiOutput,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      });
    } catch (error) {
      console.error("Error saving to the database:", error);
    }
  };

  return (
    <div>
      <Link href={"/dashboard"}>
        <Button className="ml-5 mt-5 flex items-center gap-1">
          <ArrowLeft className="h-5 w-6" /> Back
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 ">
        <FormSection
          selectedTemplate={selectedTemplate}
          userInputData={(e: any) => GenerateAiContent(e)}
          isLoading={isLoading}
        />
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
};

export default CreateContent;
