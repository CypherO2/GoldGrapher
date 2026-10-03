import type { Metadata } from "next";
import AccessibilityControls from "@/components/core/AccessibilityControls";

export const metadata: Metadata = { title: "Accessibility | GoldGrapher" };

export default function Page() {
  return <AccessibilityControls />;
}
