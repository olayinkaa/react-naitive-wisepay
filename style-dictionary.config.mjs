import StyleDictionary from "style-dictionary";

/**
 * ─────────────────────────────────────────────────────────────
 * FORMAT: global.css (Tailwind v4 + NativeWind)
 * ─────────────────────────────────────────────────────────────
 */
StyleDictionary.registerFormat({
  name: "css/nativewind",
  format({ dictionary }) {
    const tokens = dictionary.allTokens;

    // Colors (skip primitives like color.base)
    const colors = tokens
      .filter((t) => t.path[0] === "color" && t.path[1] !== "base")
      .map((t) => `  --color-${t.path.slice(1).join("-")}: ${t.value};`)
      .join("\n");

    // Spacing (ensure px for CSS)
    const spacing = tokens
      .filter((t) => t.path[0] === "spacing")
      .map(
        (t) =>
          `  --spacing-${t.path[1]}: ${
            Number(t.value) === 0 ? "0px" : `${t.value}px`
          };`,
      )
      .join("\n");

    // Font families
    const fonts = tokens
      .filter((t) => t.path[0] === "font" && t.path[1] === "family")
      .map((t) => {
        const name = t.path.slice(2).join("-");
        return `  --font-${name}: ${t.value};`;
      })
      .join("\n");

    // Component tokens → CSS classes
    const componentsMap = {};
    tokens
      .filter((t) => t.path[0] === "component")
      .forEach((t) => {
        const cls = t.path[1];
        const prop = t.path[2];

        if (!componentsMap[cls]) {
          componentsMap[cls] = [];
        }

        componentsMap[cls].push(`    ${prop}: ${t.value};`);
      });

    const componentCSS = Object.entries(componentsMap)
      .map(([cls, props]) => `  .${cls} {\n${props.join("\n")}\n  }`)
      .join("\n\n");

    return `
/* ─── Design Tokens ───────────────────────── */
@theme {
${colors}

${spacing}

${fonts}
}

/* ─── Component Classes ───────────────────── */
@layer components {
${componentCSS}
}
`;
  },
});

/**
 * ─────────────────────────────────────────────────────────────
 * FORMAT: constants/theme.ts (TypeScript tokens)
 * ─────────────────────────────────────────────────────────────
 */
StyleDictionary.registerFormat({
  name: "ts/constants",
  format({ dictionary }) {
    const tokens = dictionary.allTokens;

    const colors = Object.fromEntries(
      tokens
        .filter((t) => t.path[0] === "color" && t.path[1] !== "base")
        .map((t) => [t.path.slice(1).join("-"), t.value]),
    );

    const spacing = Object.fromEntries(
      tokens
        .filter((t) => t.path[0] === "spacing")
        .map((t) => [t.path[1], Number(t.value)]),
    );

    // ─── FONTS (UPDATED) ────────────────────────────────────
    const fonts = Object.fromEntries(
      tokens
        .filter((t) => t.path[0] === "font" && t.path[1] === "family")
        .map((t) => {
          const key = t.path.slice(2).join("-");
          return [key, t.value];
        }),
    );

    // ✅ ── Gradients (THIS IS THE KEY PART) ──
    const gradients = Object.fromEntries(
      tokens
        .filter((t) => t.path[0] === "gradient")
        .map((t) => [t.path[1], t.value]), // keeps array intact
    );

    return `/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT
 * Run "npm run tokens" to regenerate
 */

export const colors = ${JSON.stringify(colors, null, 2)} as const;

export const spacing = ${JSON.stringify(spacing, null, 2)} as const;

export const fonts = ${JSON.stringify(fonts, null, 2)} as const;

export const linearGradient = {
  gradients: ${JSON.stringify(gradients, null, 2)}
} as const;

// export type ColorKeys = keyof typeof colors;
// export type SpacingKeys = keyof typeof spacing;
// export type FontKeys = keyof typeof fonts;
`;
  },
});

/**
 * ─────────────────────────────────────────────────────────────
 * BUILD CONFIG
 * ─────────────────────────────────────────────────────────────
 */
export default {
  source: ["tokens/**/*.json"],

  platforms: {
    /**
     * CSS → global.css (Tailwind v4 entry)
     */
    css: {
      transformGroup: "css",
      buildPath: "./",
      files: [
        {
          destination: "assets/styles/theme.css",
          format: "css/nativewind",
        },
      ],
    },

    /**
     * TS → constants/theme.ts
     */
    ts: {
      transformGroup: "js",
      buildPath: "tokens/",
      files: [
        {
          destination: "constants.ts",
          format: "ts/constants",
        },
      ],
    },
  },
};
