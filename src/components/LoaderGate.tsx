"use client";

import { usePathname } from "next/navigation";
import AppLoader from "./AppLoader";

export default function LoaderGate() {
  const pathname = usePathname();
  if (pathname !== "/") return null;
  return <AppLoader />;
}


