import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlLayoutColumnThreeFocusLeftFilledSvg extends TypeSvgSvg {
  className: "FlLayoutColumnThreeFocusLeftFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlLayoutColumnThreeFocusLeftFilledSvg";
    addAttrObj(this, {
      name: "FlLayoutColumnThreeFocusLeftFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M3 6C3 4.34315 4.34315 3 6 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H6C4.34315 17 3 15.6569 3 14V6ZM12 16V4H8V16H12ZM13 16H14C15.1046 16 16 15.1046 16 14V6C16 4.89543 15.1046 4 14 4H13V16Z",
    );
    this.addChild(path0);
  }
}
