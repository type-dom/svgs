import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlTransparencySquareRegularSvg extends TypeSvgSvg {
  className: "FlTransparencySquareRegularSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlTransparencySquareRegularSvg";
    addAttrObj(this, {
      name: "FlTransparencySquareRegularSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M6 3C4.34315 3 3 4.34315 3 6V14C3 15.6569 4.34315 17 6 17H14C15.6569 17 17 15.6569 17 14V6C17 4.34315 15.6569 3 14 3H6ZM4 6C4 4.89543 4.89543 4 6 4H7V7H4V6ZM4 10H7V7H10V4H13V7H16V10H13V13H16V14C16 15.1046 15.1046 16 14 16H13V13H10V16H7V13H4V10ZM10 10V7H13V10H10ZM10 10H7V13H10V10Z",
    );
    this.addChild(path0);
  }
}
