import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class MisCollapseSvg extends TypeSvgSvg {
  className: "MisCollapseSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "MisCollapseSvg";
    addAttrObj(this, {
      name: "MisCollapseSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 24 24",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M3 4h18v2H3V4zm0 15h18v2H3v-2zm8-5h10v2H11v-2zm0-5h10v2H11V9zm-8 3.5L7 9v7l-4-3.5z",
    );
    this.addChild(path0);
  }
}
