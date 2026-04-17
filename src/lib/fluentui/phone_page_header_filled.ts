import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlPhonePageHeaderFilledSvg extends TypeSvgSvg {
  className: "FlPhonePageHeaderFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlPhonePageHeaderFilledSvg";
    addAttrObj(this, {
      name: "FlPhonePageHeaderFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M5 4C5 2.89543 5.89543 2 7 2H13C14.1046 2 15 2.89543 15 4V5H5V4ZM5 6V16C5 17.1046 5.89543 18 7 18H13C14.1046 18 15 17.1046 15 16V6H5Z",
    );
    this.addChild(path0);
  }
}
