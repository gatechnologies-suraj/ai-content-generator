"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Template } from "@/types/types";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  selectedTemplate?: Template;
  setUserInputData: (data: any) => void;
}

const FormSection = ({ selectedTemplate, setUserInputData }: Props) => {
  const [formData, setFormData] = useState<any>();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserInputData(formData);
  };
  return (
    <div className="p-5 border shadow-lg rounded-lg bg-white">
      {selectedTemplate?.icon && (
        <Image
          src={selectedTemplate.icon}
          alt={selectedTemplate.name || "Template Icon"}
          width={70}
          height={70}
        />
      )}
      <h2 className="text-2xl font-bold text-primary mb-2">
        {selectedTemplate?.name}
      </h2>
      <p className="text-sm text-gray-500">{selectedTemplate?.desc}</p>

      <form className="mt-6" onSubmit={handleSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className="my-2 mb-5 flex flex-col gap-2">
            <label className="text-semibold">{item.label}</label>
            {item.field === "input" ? (
              <Input
                className="shadow-sm"
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : item.field === "textarea" ? (
              <Textarea
                className="shadow-sm"
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : null}
          </div>
        ))}
        <Button type="submit" className="w-full py-6 text-md">
          Generate Content
        </Button>
      </form>
    </div>
  );
};

export default FormSection;
