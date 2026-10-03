export type ThemePref = "system" | "light" | "dark" | "still";
export type FontSizePref = "sm" | "md" | "lg" | "xl";
export type FontFamilyPref = "default" | "lexend" | "atkinson" | "opendyslexic";

export type A11yPrefs = {
  theme: ThemePref;
  fontSize: FontSizePref;
  fontFamily: FontFamilyPref;
};

export const A11Y_STORAGE_KEY = "gg-a11y";

export const A11Y_DEFAULTS = {
  theme: "system",
  fontSize: "md",
  fontFamily: "default",
} as const satisfies A11yPrefs;

function isTheme(value: unknown): value is ThemePref {
  return (
    value === "system" ||
    value === "light" ||
    value === "dark" ||
    value === "still"
  );
}

function isFontSize(value: unknown): value is FontSizePref {
  return value === "sm" || value === "md" || value === "lg" || value === "xl";
}

function isFontFamily(value: unknown): value is FontFamilyPref {
  return (
    value === "default" ||
    value === "lexend" ||
    value === "atkinson" ||
    value === "opendyslexic"
  );
}

export function parseA11yPrefs(raw: unknown): A11yPrefs {
  if (!raw || typeof raw !== "object") return { ...A11Y_DEFAULTS };
  const data = raw as Record<string, unknown>;
  return {
    theme: isTheme(data.theme) ? data.theme : A11Y_DEFAULTS.theme,
    fontSize: isFontSize(data.fontSize) ? data.fontSize : A11Y_DEFAULTS.fontSize,
    fontFamily: isFontFamily(data.fontFamily)
      ? data.fontFamily
      : A11Y_DEFAULTS.fontFamily,
  };
}

export function applyA11yPrefs(
  prefs: A11yPrefs,
  root: HTMLElement = document.documentElement,
) {
  root.dataset.theme = prefs.theme;
  root.dataset.fontSize = prefs.fontSize;
  root.dataset.fontFamily = prefs.fontFamily;
}

const listeners = new Set<() => void>();
let snapshot: A11yPrefs = A11Y_DEFAULTS;
let snapshotReady = false;

function loadSnapshot(): A11yPrefs {
  try {
    const raw = localStorage.getItem(A11Y_STORAGE_KEY);
    if (!raw) return A11Y_DEFAULTS;
    return parseA11yPrefs(JSON.parse(raw) as unknown);
  } catch {
    return A11Y_DEFAULTS;
  }
}

export function readA11yPrefs(): A11yPrefs {
  if (typeof window === "undefined") return A11Y_DEFAULTS;
  if (!snapshotReady) {
    snapshot = loadSnapshot();
    snapshotReady = true;
  }
  return snapshot;
}

export function getA11yServerSnapshot(): A11yPrefs {
  return A11Y_DEFAULTS;
}

export function subscribeA11yPrefs(onChange: () => void) {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
}

export function writeA11yPrefs(prefs: A11yPrefs) {
  snapshot = prefs;
  snapshotReady = true;
  applyA11yPrefs(prefs);
  localStorage.setItem(A11Y_STORAGE_KEY, JSON.stringify(prefs));
  for (const listener of listeners) listener();
}

/** Runs before paint so theme and font prefs do not flash. */
export const A11Y_BOOT_SCRIPT = `(function(){try{var k=${JSON.stringify(A11Y_STORAGE_KEY)};var d=${JSON.stringify(A11Y_DEFAULTS)};var p=d;try{p=Object.assign({},d,JSON.parse(localStorage.getItem(k)||"null")||{});}catch(e){}var r=document.documentElement;r.dataset.theme=p.theme||d.theme;r.dataset.fontSize=p.fontSize||d.fontSize;r.dataset.fontFamily=p.fontFamily||d.fontFamily;}catch(e){var r=document.documentElement;r.dataset.theme="system";r.dataset.fontSize="md";r.dataset.fontFamily="default";}})();`;
