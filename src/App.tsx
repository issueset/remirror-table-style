import React from "react";

import { AllStyledComponent } from "@remirror/styles/emotion";
import { useRemirrorContext } from "@remirror/react";
import { useRemirror, Remirror, ThemeProvider } from "@remirror/react";
import { TableExtension } from "@remirror/extension-tables";
import Menu from "./Menu";

const extensions = () => [new TableExtension()];

const InnerEditor: React.FC = () => {
  const { getRootProps } = useRemirrorContext();

  return (
    <div id="example-editor">
      <Menu />
      <div {...getRootProps()} />
    </div>
  );
};

export default function App() {
  const { manager } = useRemirror({
    extensions
  });

  return (
    <AllStyledComponent>
      <ThemeProvider>
        <Remirror manager={manager}>
          <InnerEditor />
        </Remirror>
      </ThemeProvider>
    </AllStyledComponent>
  );
}
