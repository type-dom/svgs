import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlCircleHalfFillRegularSvg extends TypeSvgSvg {
  className: "FlCircleHalfFillRegularSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlCircleHalfFillRegularSvg";
    addAttrObj(this, {
      name: "FlCircleHalfFillRegularSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10H3ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2Z",
    );
    this.addChild(path0);
  }
}
