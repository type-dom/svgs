import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class MisClose_leftSvg extends TypeSvgSvg {
  className: "MisClose_leftSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "MisClose_leftSvg";
    addAttrObj(this, {
      name: "MisClose_leftSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 24 24",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
  }
}
