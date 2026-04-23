import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class MisEnterSvg extends TypeSvgSvg {
  className: "MisEnterSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "MisEnterSvg";
    addAttrObj(this, {
      name: "MisEnterSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 15 15",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
  }
}
