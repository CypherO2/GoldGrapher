"use client";

import { useEffect } from "react";
import { applyA11yPrefs, readA11yPrefs } from "@/lib/a11y";

/** Re-applies stored prefs after hydration in case React cleared the html data attributes. */
export default function A11yApply() {
  useEffect(() => {
    applyA11yPrefs(readA11yPrefs());
  }, []);

  return null;
}
