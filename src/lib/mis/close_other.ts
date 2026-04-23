import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class MisClose_otherSvg extends TypeSvgSvg {
  className: "MisClose_otherSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "MisClose_otherSvg";
    addAttrObj(this, {
      name: "MisClose_otherSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData("M3 5h14V3H3v2zm12 8V7H5v6h10zM3 17h14v-2H3v2z");
    this.addChild(path0);
  }
}
