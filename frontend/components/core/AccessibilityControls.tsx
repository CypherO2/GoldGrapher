"use client";

import { useSyncExternalStore } from "react";
import {
  A11Y_DEFAULTS,
  getA11yServerSnapshot,
  readA11yPrefs,
  subscribeA11yPrefs,
  writeA11yPrefs,
  type FontFamilyPref,
  type FontSizePref,
  type ThemePref,
} from "@/lib/a11y";

const THEMES: Array<{ value: ThemePref; label: string; hint: string }> = [
  {
    value: "system",
    label: "Browser default",
    hint: "Follows your device light or dark setting.",
  },
  {
    value: "dark",
    label: "Dark",
    hint: "Black ground, clay figures, hearth lit.",
  },
  {
    value: "still",
    label: "Still",
    hint: "Dark theme with no hearth, smoke, or ash. The page matches the sidebar.",
  },
  {
    value: "light",
    label: "Light",
    hint: "Bone ground, dark text.",
  },
];

const SIZES: Array<{ value: FontSizePref; label: string }> = [
  { value: "sm", label: "Small" },
  { value: "md", label: "Default" },
  { value: "lg", label: "Large" },
  { value: "xl", label: "Extra large" },
];

const FAMILIES: Array<{ value: FontFamilyPref; label: string; hint: string }> = [
  {
    value: "default",
    label: "Site default",
    hint: "Source Sans 3 for text. Cinzel for titles.",
  },
  {
    value: "lexend",
    label: "Lexend",
    hint: "Built for reading ease. Free, SIL Open Font License.",
  },
  {
    value: "atkinson",
    label: "Atkinson Hyperlegible",
    hint: "Clear letter shapes from the Braille Institute. Free, SIL Open Font License.",
  },
  {
    value: "opendyslexic",
    label: "OpenDyslexic",
    hint: "Weighted bottoms so letters are harder to flip. Free, SIL Open Font License.",
  },
];

function OptionRow({
  name,
  value,
  checked,
  label,
  hint,
  onChange,
}: {
  name: string;
  value: string;
  checked: boolean;
  label: string;
  hint?: string;
  onChange: () => void;
}) {
  return (
    <label
      className={`flex cursor-pointer items-start gap-3 border px-3 py-3 focus-within:border-clay ${
        checked ? "border-clay" : "border-foreground/20 hover:border-clay"
      }`}
    >
      <input
        type="radio"
        className="mt-1 accent-clay"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className="min-w-0">
        <span className="block font-semibold text-foreground">{label}</span>
        {hint ? (
          <span className="mt-0.5 block text-sm text-muted">{hint}</span>
        ) : null}
      </span>
    </label>
  );
}

export default function AccessibilityControls() {
  const prefs = useSyncExternalStore(
    subscribeA11yPrefs,
    readA11yPrefs,
    getA11yServerSnapshot,
  );

  return (
    <div className="bg-background px-6 py-8 md:px-10">
      <div className="max-w-xl">
        <h1 className="font-display text-2xl tracking-wide text-foreground">
          Accessibility
        </h1>
        <p className="mt-2 mb-8 text-sm text-muted">
          These settings stay on this device. They change the theme, the type
          size, and the typeface.
        </p>

        <div className="grid gap-6">
          <section
            className="naiskos-border bg-surface p-5"
            aria-labelledby="a11y-theme"
          >
            <h2
              id="a11y-theme"
              className="mb-1 font-display text-lg tracking-wide"
            >
              Theme
            </h2>
            <p className="m-0 mb-3 text-sm text-muted">
              Pick a fixed theme, or follow the browser.
            </p>
            <div
              className="grid gap-2"
              role="radiogroup"
              aria-labelledby="a11y-theme"
            >
              {THEMES.map((item) => (
                <OptionRow
                  key={item.value}
                  name="theme"
                  value={item.value}
                  checked={prefs.theme === item.value}
                  label={item.label}
                  hint={item.hint}
                  onChange={() => writeA11yPrefs({ ...prefs, theme: item.value })}
                />
              ))}
            </div>
          </section>

          <section
            className="naiskos-border bg-surface p-5"
            aria-labelledby="a11y-size"
          >
            <h2
              id="a11y-size"
              className="mb-1 font-display text-lg tracking-wide"
            >
              Font size
            </h2>
            <p className="m-0 mb-3 text-sm text-muted">
              Scales text across the app.
            </p>
            <div
              className="grid gap-2 sm:grid-cols-2"
              role="radiogroup"
              aria-labelledby="a11y-size"
            >
              {SIZES.map((item) => (
                <OptionRow
                  key={item.value}
                  name="fontSize"
                  value={item.value}
                  checked={prefs.fontSize === item.value}
                  label={item.label}
                  onChange={() => writeA11yPrefs({ ...prefs, fontSize: item.value })}
                />
              ))}
            </div>
          </section>

          <section
            className="naiskos-border bg-surface p-5"
            aria-labelledby="a11y-family"
          >
            <h2
              id="a11y-family"
              className="mb-1 font-display text-lg tracking-wide"
            >
              Font family
            </h2>
            <p className="m-0 mb-3 text-sm text-muted">
              Pick a typeface that is easier to read. Titles use that face.
              Site default keeps Cinzel for titles.
            </p>
            <div
              className="grid gap-2"
              role="radiogroup"
              aria-labelledby="a11y-family"
            >
              {FAMILIES.map((item) => (
                <OptionRow
                  key={item.value}
                  name="fontFamily"
                  value={item.value}
                  checked={prefs.fontFamily === item.value}
                  label={item.label}
                  hint={item.hint}
                  onChange={() => writeA11yPrefs({ ...prefs, fontFamily: item.value })}
                />
              ))}
            </div>
          </section>

          <div>
            <button
              type="button"
              onClick={() => writeA11yPrefs(A11Y_DEFAULTS)}
              className="border border-clay bg-clay px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-transparent hover:text-clay"
            >
              Reset to defaults
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
