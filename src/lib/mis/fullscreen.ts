import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class MisFullscreenSvg extends TypeSvgSvg {
  className: "MisFullscreenSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "MisFullscreenSvg";
    addAttrObj(this, {
      name: "MisFullscreenSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 24 24",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData("M8 3v2H4v4H2V3h6zM2 21v-6h2v4h4v2H2zm20 0h-6v-2h4v-4h2v6zm0-12h-2V5h-4V3h6v6z");
    this.addChild(path0);
  }
}
