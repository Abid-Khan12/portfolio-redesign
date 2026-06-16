"use client";

import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function useHash() {
  const [hash, setHash] = useState("");
  const params = useParams();
  const pathname = usePathname();

  useEffect(() => {
    setHash(window.location.hash || "#");
  }, [params, pathname]); // Re-runs natively whenever Next.js changes routes

  return hash;
}
