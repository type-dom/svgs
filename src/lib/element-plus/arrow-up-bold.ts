import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class ElArrowUpBoldSvg extends TypeSvgSvg {
  className: "ElArrowUpBoldSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "ElArrowUpBoldSvg";
    addAttrObj(this, {
      name: "ElArrowUpBoldSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 1024 1024",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8 316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z",
    );
    this.addChild(path0);
  }
}
