import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class ElHomeFilledSvg extends TypeSvgSvg {
  className: "ElHomeFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "ElHomeFilledSvg";
    addAttrObj(this, {
      name: "ElHomeFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 1024 1024",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData("M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z");
    this.addChild(path0);
  }
}
