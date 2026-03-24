import Image from "next/image";

export function SiteImage({
  src,
  alt,
  priority = false,
  sizes = "(max-width: 720px) 100vw, 50vw",
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <div className={`media-frame ${className}`.trim()}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="media-img" />
    </div>
  );
}
