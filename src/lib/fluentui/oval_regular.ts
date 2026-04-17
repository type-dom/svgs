import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlOvalRegularSvg extends TypeSvgSvg {
  className: "FlOvalRegularSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlOvalRegularSvg";
    addAttrObj(this, {
      name: "FlOvalRegularSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M2 10C2 6.68629 4.68629 4 8 4H12C15.3137 4 18 6.68629 18 10C18 13.3137 15.3137 16 12 16H8C4.68629 16 2 13.3137 2 10ZM8 5C5.23858 5 3 7.23858 3 10C3 12.7614 5.23858 15 8 15H12C14.7614 15 17 12.7614 17 10C17 7.23858 14.7614 5 12 5H8Z",
    );
    this.addChild(path0);
  }
}
