import Image from "next/image";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "h-9 w-auto", priority = false }: LogoProps) {
  return (
    <Image
      src="/ashpacket-logo.png"
      alt="AshPacket LLC"
      width={220}
      height={48}
      className={className}
      priority={priority}
    />
  );
}
