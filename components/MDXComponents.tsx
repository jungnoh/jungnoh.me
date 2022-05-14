/* eslint-disable react/display-name */
import React, { useMemo } from "react";
import { ComponentMap, getMDXComponent, MDXContentProps } from "mdx-bundler/client";

import Image from "./Image";
import CustomLink from "./Link";
import TOCInline from "./TOCInline";
import Pre from "./Pre";

const Wrapper: React.ComponentType<{ layout: string }> = (props: { layout: string }) => {
  const { layout, ...rest } = props;
  const Layout = require(`../layouts/${layout}`).default;
  return <Layout {...rest} />;
};

export const MDXComponents: ComponentMap = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  wrapper: Wrapper,
};

export type MDXLayoutRendererProps = {
  layout: string;
  mdxSource: string;
} & MDXContentProps;

export const MDXLayoutRenderer: React.FC<MDXLayoutRendererProps> = (props) => {
  const { layout, mdxSource, ...rest } = props;
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />;
};
