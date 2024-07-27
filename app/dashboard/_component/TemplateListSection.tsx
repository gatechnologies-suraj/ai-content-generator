import Templates from "@/app/(data)/Templates";
import { Template } from "@/types/types";
import React, { useEffect } from "react";
import TemplateCard from "./TemplateCard";

type Props = {
  search: string;
};

function TemplateListSection({ search }: Props) {
  const [templates, setTemplates] = React.useState<Template[]>(Templates);

  useEffect(() => {
    setTemplates(
      Templates.filter((item: Template) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);
  
  return (
    <div className="grid grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-5 p-10">
      {templates.map((item: Template, index: number) => (
        <TemplateCard {...item} />
      ))}
    </div>
  );
}

export default TemplateListSection;
