import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class TdChartSvg extends TypeSvgSvg {
  className: "TdChartSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "TdChartSvg";
    addAttrObj(this, {
      name: "TdChartSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 128 128",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M0 54.857h36.571V128H0V54.857zM91.429 27.43H128V128H91.429V27.429zM45.714 0h36.572v128H45.714V0z",
    );
    this.addChild(path0);
  }
}
