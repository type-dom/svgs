import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlLayoutColumnOneThirdRightFilledSvg extends TypeSvgSvg {
  className: "FlLayoutColumnOneThirdRightFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlLayoutColumnOneThirdRightFilledSvg";
    addAttrObj(this, {
      name: "FlLayoutColumnOneThirdRightFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M13 17H14C15.6569 17 17 15.6569 17 14V6C17 4.34315 15.6569 3 14 3H13V17ZM12 3H6C4.34315 3 3 4.34315 3 6V14C3 15.6569 4.34315 17 6 17H12V3Z",
    );
    this.addChild(path0);
  }
}
