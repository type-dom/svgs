import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class MisClose_allSvg extends TypeSvgSvg {
  className: "MisClose_allSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "MisClose_allSvg";
    addAttrObj(this, {
      name: "MisClose_allSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 36 36",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData("M26 17H10a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2z");
    this.addChild(path0);
  }
}
