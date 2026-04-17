import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class TdStaticVLineSvg extends TypeSvgSvg {
  className: "TdStaticVLineSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "TdStaticVLineSvg";
    addAttrObj(this, {
      name: "TdStaticVLineSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 1024 1024",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData("M474.91 67h74.19v890h-74.19z");
    this.addChild(path0);
  }
}
