import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "h-9 w-auto", priority = false }: LogoProps) {
  return (
    <Image
      src={`${basePath}/ashpacket-logo.png`}
      alt="AshPacket LLC"
      width={220}
      height={48}
      className={className}
      priority={priority}
    />
  );
}
