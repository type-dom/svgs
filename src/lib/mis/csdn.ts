import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class MisCsdnSvg extends TypeSvgSvg {
  className: "MisCsdnSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "MisCsdnSvg";
    addAttrObj(this, {
      name: "MisCsdnSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 30 30",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
  }
}
