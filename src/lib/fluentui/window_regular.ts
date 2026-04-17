import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlWindowRegularSvg extends TypeSvgSvg {
  className: "FlWindowRegularSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlWindowRegularSvg";
    addAttrObj(this, {
      name: "FlWindowRegularSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M6 3C4.34315 3 3 4.34315 3 6V14C3 15.6569 4.34315 17 6 17H14C15.6569 17 17 15.6569 17 14V6C17 4.34315 15.6569 3 14 3H6ZM4 6C4 4.89543 4.89543 4 6 4H14C15.1046 4 16 4.89543 16 6L4 6ZM4 7H16V14C16 15.1046 15.1046 16 14 16H6C4.89543 16 4 15.1046 4 14V7Z",
    );
    this.addChild(path0);
  }
}
