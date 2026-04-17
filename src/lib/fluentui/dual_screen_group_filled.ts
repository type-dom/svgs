import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlDualScreenGroupFilledSvg extends TypeSvgSvg {
  className: "FlDualScreenGroupFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlDualScreenGroupFilledSvg";
    addAttrObj(this, {
      name: "FlDualScreenGroupFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M10.5 16H16C17.1046 16 18 15.1046 18 14V6C18 4.89543 17.1046 4 16 4H10.5V16ZM9.5 4H4C2.89543 4 2 4.89543 2 6V14C2 15.1046 2.89543 16 4 16H9.5V4Z",
    );
    this.addChild(path0);
  }
}
