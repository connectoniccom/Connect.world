// node_modules/.pnpm/@angular+cdk@19.2.19_@angular+common@19.2.15_@angular+core@19.2.15_rxjs@7.8.2/node_modules/@angular/cdk/fesm2022/boolean-property-DaaVhX5A.mjs
function coerceBooleanProperty(value) {
  return value != null && `${value}` !== "false";
}

// node_modules/.pnpm/@angular+cdk@19.2.19_@angular+common@19.2.15_@angular+core@19.2.15_rxjs@7.8.2/node_modules/@angular/cdk/fesm2022/css-pixel-value-C_HEqLhI.mjs
function coerceCssPixelValue(value) {
  if (value == null) {
    return "";
  }
  return typeof value === "string" ? value : `${value}px`;
}

export {
  coerceBooleanProperty,
  coerceCssPixelValue
};
//# sourceMappingURL=chunk-YYJJB5WX.js.map
