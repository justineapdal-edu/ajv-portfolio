"use client";

import Image, { type ImageProps } from "next/image";
import { useState, type ReactNode } from "react";

interface ImageWithFallbackProps
  extends Omit<ImageProps, "src" | "alt"> {
  src?: string;
  alt: string;
  fallback: ReactNode;
}

export function ImageWithFallback({
  src,
  alt,
  fallback,
  ...rest
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <>{fallback}</>;
  }

  return (
    <Image
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}
