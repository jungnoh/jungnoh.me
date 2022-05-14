import React from "react";
import dynamic from "next/dynamic";
import { PostFrontMatter } from "types/PostFrontMatter";

import siteMetadata from "@/data/siteMetadata";

interface Props {
  frontMatter: PostFrontMatter;
}

const UtterancesComponent = dynamic(
  () => {
    return import("@/components/comments/Utterances");
  },
  { ssr: false }
);

const Comments = ({ frontMatter }: Props) => {
  let term;
  switch (siteMetadata.comment.utterancesConfig.issueTerm) {
    case "pathname":
      term = frontMatter.slug;
      break;
    case "url":
      term = window.location.href;
      break;
    case "title":
      term = frontMatter.title;
      break;
  }
  return (
    <div id="comment">
      {siteMetadata.comment && siteMetadata.comment.provider === "utterances" && (
        <UtterancesComponent issueTerm={term} />
      )}
    </div>
  );
};

export default Comments;
