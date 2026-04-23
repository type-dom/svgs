import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class MisSizeSvg extends TypeSvgSvg {
  className: "MisSizeSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "MisSizeSvg";
    addAttrObj(this, {
      name: "MisSizeSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 24 24",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData("M10 6v15H8V6H2V4h14v2h-6zm8 8v7h-2v-7h-3v-2h8v2h-3z");
    this.addChild(path0);
  }
}
