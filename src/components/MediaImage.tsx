import Image, { type ImageProps } from "next/image";

/**
 * Thin wrapper over next/image that bypasses the optimizer for inline
 * data-URI placeholders (used by mock content) while keeping optimization for
 * real local and remote (Webflow CDN) imagery.
 */
export default function MediaImage({ alt, ...props }: ImageProps) {
  const isData =
    typeof props.src === "string" && props.src.startsWith("data:");
  return <Image alt={alt} {...props} unoptimized={isData || props.unoptimized} />;
}
