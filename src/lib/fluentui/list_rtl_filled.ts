import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlListRtlFilledSvg extends TypeSvgSvg {
  className: "FlListRtlFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlListRtlFilledSvg";
    addAttrObj(this, {
      name: "FlListRtlFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M6 4.75C6 4.33579 6.33579 4 6.75 4H17.25C17.6642 4 18 4.33579 18 4.75C18 5.16421 17.6642 5.5 17.25 5.5H6.75C6.33579 5.5 6 5.16421 6 4.75ZM7 14.75C7 14.3358 7.33579 14 7.75 14H17.25C17.6642 14 18 14.3358 18 14.75C18 15.1642 17.6642 15.5 17.25 15.5H7.75C7.33579 15.5 7 15.1642 7 14.75ZM2.75 9C2.33579 9 2 9.33579 2 9.75C2 10.1642 2.33579 10.5 2.75 10.5H17.25C17.6642 10.5 18 10.1642 18 9.75C18 9.33579 17.6642 9 17.25 9H2.75Z",
    );
    this.addChild(path0);
  }
}
