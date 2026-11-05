/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-clean-order",
  ],
  "referenceFiles": [
    "styles/base.css",
    "styles/pallette.css",
  ],
  "rules": {
    "no-unknown-animations": true,
    "no-unknown-custom-properties": true,
    "no-unknown-custom-media": true,
    "declaration-no-important":true,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-no-redundant-longhand-properties": true,
    "color-named": "never",
    "color-no-hex": true,
    "hue-degree-notation": "number",
    "lightness-notation": "number",
    "function-disallowed-list": ["rgb", "hsl", "hwb", "lch"],
    "property-disallowed-list": [
      "/top|bottom|left|right/",
    ],
    "declaration-property-unit-allowed-list": {
      "font-size": ["em", "rem"],
      "/grid/": ["fr", "rem"],
      "^(min-|max-)?(width|height)": ["%", "em"]
    },
    "unit-disallowed-list": [
      "px",
      // "em",
    ],
    "length-zero-no-unit": true,
    "declaration-property-value-allowed-list": {
      // Use Variables as any colors
      "/\\s*color\\s*/": ["/--color-/", "unset"],
      "/(border|outline)([\s-]*-width)/": ["/--size-(tn|xs|sm|md|lg|xl|hg)/", "0",],
      "/(margin|padding)(-inline|-block)?/": ["/--size-(tn|xs|sm|md|lg|xl|hg)/", "0", "auto"],
      "/(min-|max-)?(width|height)/": ["/[\d.]*(%|vw|em)/", "0", "/--size-/", "auto",]
    },
    "declaration-property-value-disallowed-list": {
      // Don't use pallette colors directly
      "/(\s*-)?color/": ["/--(color)-(.+)-([0-9](0|5))/"],
    },
    "custom-property-pattern": "(size|color)-.+"
  },
  "overrides":[{
    "files": ["styles/pallette.css",],
    "rules": {
      "declaration-property-value-allowed-list": {
        // Can use pallette colors when setting varaible only
        "/--color/": ["/oklch/"]
      },
      "custom-property-pattern": "(color)-(.+)-([0-9](0|5))"
    }
  }, 
  {
    "files": ["styles/base.css",],
    "rules": {
      "declaration-property-value-allowed-list": {
        // Can use pallette colors when setting varaible only
        "/--color-(.+)/": ["/--color-(.+)/"]
      },
      "declaration-property-value-disallowed-list": {},
    }
  },]
};