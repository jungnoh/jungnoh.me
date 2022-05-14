import { Parent } from "unist";
import { visit } from "unist-util-visit";
import { slug } from "github-slugger";
import { toString } from "mdast-util-to-string";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function remarkTocHeadings(options: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  exportRef: { value: string; url: string; depth: any }[];
}): (tree: Parent) => void {
  return (tree: Parent) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    visit(tree, "heading", (node: any) => {
      const textContent = toString(node);
      options.exportRef.push({
        value: textContent,
        url: "#" + slug(textContent),
        depth: node.depth,
      });
    });
}
