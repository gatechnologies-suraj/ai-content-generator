import { Button } from "@/components/ui/button";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { Copy } from "lucide-react";
import { useRef } from "react";

const OutputSection = () => {
  const editorRef = useRef<Editor>(null);
  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex items-center justify-between p-5">
        <h2>Your Result</h2>
        <Button className="flex gap-2">
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
