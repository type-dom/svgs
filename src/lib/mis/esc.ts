import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class MisEscSvg extends TypeSvgSvg {
  className: "MisEscSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "MisEscSvg";
    addAttrObj(this, {
      name: "MisEscSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 15 15",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
  }
}
