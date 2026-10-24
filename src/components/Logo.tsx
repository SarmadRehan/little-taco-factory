import Image from "next/image";

import logo from "@/assets/images/logo.png";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

/** Their own round logo from Instagram: "Little Taco Factory #2 · Rodriguez Family". */
export function Logo({ className = "", priority = false }: LogoProps) {
  return <Image src={logo} alt="The Little Taco Factory #2" className={`h-auto ${className}`} sizes="16rem" priority={priority} />;
}
