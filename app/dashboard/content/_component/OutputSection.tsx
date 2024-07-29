import { Button } from "@/components/ui/button";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { Copy } from "lucide-react";
import { useEffect, useRef } from "react";

interface Props {
  aiOutput: string;
}

const OutputSection = ({ aiOutput }: Props) => {
  const editorRef = useRef<Editor>(null);

  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance();
    editorInstance?.setMarkdown(aiOutput);
  }, [aiOutput]);

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex items-center justify-between p-5">
        <h2>Your Result</h2>
        <Button
          onClick={() => navigator.clipboard.writeText(aiOutput)}
          className="flex gap-2"
        >
          <Copy /> Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Hey There👋!! Your Result Will Appear Here."
        height="430px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() => {
          console.log(editorRef.current?.getInstance().getMarkdown());
        }}
      />
    </div>
  );
};

export default OutputSection;
