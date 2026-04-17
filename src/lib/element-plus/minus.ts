import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class ElMinusSvg extends TypeSvgSvg {
  className: "ElMinusSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "ElMinusSvg";
    addAttrObj(this, {
      name: "ElMinusSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 1024 1024",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData("M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z");
    this.addChild(path0);
  }
}
