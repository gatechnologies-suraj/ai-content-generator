"use client";
import React, { useState } from "react";
import FormSection from "../_component/FormSection";
import OutputSection from "../_component/OutputSection";
import Templates from "@/app/(data)/Templates";
import { Template } from "@/types/types";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Props {
  params: {
    "template-slug": string;
  };
}

const CreateContent = (props: Props) => {
  const [userInputData, setUserInputData] = useState();
  const selectedTemplate: Template | undefined = Templates?.find(
    (template) => template?.slug === props?.params["template-slug"]
  );
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
          setUserInputData={setUserInputData}
        />
        <div className="col-span-2">
          <OutputSection />
        </div>
      </div>
    </div>
  );
};

export default CreateContent;
