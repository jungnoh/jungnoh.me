import NextImage, { ImageProps } from "next/image";
import React, { ReactElement } from "react";

const Image = ({ ...rest }: ImageProps): ReactElement => <NextImage {...rest} />;

export default Image;
