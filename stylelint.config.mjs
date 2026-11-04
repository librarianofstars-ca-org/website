/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-clean-order",
  ],
  "referenceFiles": [
    "styles/base.css"
  ],
  "rules": {
    "no-unknown-animations": true,
    "no-unknown-custom-properties": true,
    "no-unknown-custom-media": true,
    "declaration-no-important":true,
    "color-named": "never",
    "color-no-hex": true,
    "function-disallowed-list": ["rgb", "hsl", "hwb", "lch"],
    "property-disallowed-list": [],
    "unit-allowed-list": [],
  }
};