import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlTableColumnTopBottomFilledSvg extends TypeSvgSvg {
  className: "FlTableColumnTopBottomFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlTableColumnTopBottomFilledSvg";
    addAttrObj(this, {
      name: "FlTableColumnTopBottomFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M13 17H14.5C15.8807 17 17 15.8807 17 14.5V13H13V17ZM13 12V8H17V12H13ZM12 12H8V8H12V12ZM8 16H12V17H8V16ZM7 12V8H3V12H7ZM3 13H7V17H5.5C4.11929 17 3 15.8807 3 14.5V13ZM13 7H17V5.5C17 4.11929 15.8807 3 14.5 3H13V7ZM8 4H12V3H8V4ZM7 3V7H3V5.5C3 4.11929 4.11929 3 5.5 3H7Z",
    );
    this.addChild(path0);
  }
}
