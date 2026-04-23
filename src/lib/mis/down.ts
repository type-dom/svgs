import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class MisDownSvg extends TypeSvgSvg {
  className: "MisDownSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "MisDownSvg";
    addAttrObj(this, {
      name: "MisDownSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 15 15",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
  }
}
