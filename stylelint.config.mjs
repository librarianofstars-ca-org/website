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
    "color-named": "never",
    "color-no-hex": true,
    "hue-degree-notation": "number",
    "function-disallowed-list": ["rgb", "hsl", "hwb", "lch"],
    "property-disallowed-list": [],
    "unit-allowed-list": ["rem", "%", "fr", ],
    "declaration-property-unit-allowed-list": {
      "font-size": ["em", "rem"],
    },
    "declaration-property-value-allowed-list": {
        // Use Variables as any colors
        "/\\s*color\\s*/": ["/--color-/", "unset"],
        "/border([\s-]*-width)/": ["/--size-(tn|xs|sm|md|lg|xl|hg)/", "0",],
        "/margin(-inline|-block)?/": ["/--size-(tn|xs|sm|md|lg|xl|hg)/", "0", "auto"],
        "/padding(-inline|-block)?/": ["/--size-(tn|xs|sm|md|lg|xl|hg)/", "0", "auto"],
      },
      "declaration-property-value-disallowed-list": {
        // Don't use pallette colors directly
        "/\\s*color\\s*/": ["/--color-(\s*)-(0-9)+/"],
      }
  },
  "overrides":[{
    "files": ["styles/pallette.css",],
    "rules": {
      "declaration-property-value-allowed-list": {
        // Can use pallette colors when setting varaible only
        "/--color/": ["/oklch/"]
      }
    }
    }
  ]
};