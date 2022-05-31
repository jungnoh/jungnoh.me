import React from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { AuthorFrontMatter } from "types/AuthorFrontMatter";

import { MDXLayoutRenderer } from "@/components/MDXComponents";
import { getFileBySlug } from "@/lib/mdx";

const DEFAULT_LAYOUT = "AuthorLayout";

export const getStaticProps: GetStaticProps<{
  authorDetails: { mdxSource: string; frontMatter: AuthorFrontMatter };
}> = async () => {
  const authorDetails = await getFileBySlug<AuthorFrontMatter>("authors", ["default"]);
  const { mdxSource, frontMatter } = authorDetails;
  return { props: { authorDetails: { mdxSource, frontMatter } } };
};

export default function Index({ authorDetails }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { mdxSource, frontMatter } = authorDetails;

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  );
}
