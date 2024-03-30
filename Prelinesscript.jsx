"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
const isBrowser = typeof window !== undefined;

export default function PrelineLoader() {
  const path = usePathname();

  useEffect(() => {
    if (isBrowser) {
      // if this component is rendered on a browser, import preline
      import("preline/preline");
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (isBrowser) {
        // if this component is rendered on a browser, import relevant preline plugins
        import("preline/preline").then(({ HSAccordion, HSSelect, HSDropdown, HSCollapse, HSOverlay }) => {
          HSAccordion.autoInit();
          HSSelect.autoInit();
          HSDropdown.autoInit();
          HSCollapse.autoInit();
          HSOverlay.autoInit();
        })
      }
    }, 250)
  }, [path])

  return <></>
}
