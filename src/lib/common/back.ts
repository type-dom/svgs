import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class TdBackSvg extends TypeSvgSvg {
  className: "TdBackSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "TdBackSvg";
    addAttrObj(this, {
      name: "TdBackSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 16 16",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData("M6 2.763v7.544l-4.29-3.73zM13 14v-3a4 4 0 0 0-4-4H6V6h3a5 5 0 0 1 5 5v3h-1z");
    this.addChild(path0);
  }
}
