import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlDividerShortFilledSvg extends TypeSvgSvg {
  className: "FlDividerShortFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlDividerShortFilledSvg";
    addAttrObj(this, {
      name: "FlDividerShortFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M9.75 3C10.1642 3 10.5 3.33579 10.5 3.75V16.25C10.5 16.6642 10.1642 17 9.75 17C9.33579 17 9 16.6642 9 16.25V3.75C9 3.33579 9.33579 3 9.75 3Z",
    );
    this.addChild(path0);
  }
}
