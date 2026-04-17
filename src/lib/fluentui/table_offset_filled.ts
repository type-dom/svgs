import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlTableOffsetFilledSvg extends TypeSvgSvg {
  className: "FlTableOffsetFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlTableOffsetFilledSvg";
    addAttrObj(this, {
      name: "FlTableOffsetFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M5.5 3H12V7H3V5.5C3 4.11929 4.11929 3 5.5 3ZM8 8H17V12H8V8ZM7 12V8H3V12H7ZM3 13H12V17H5.5C4.11929 17 3 15.8807 3 14.5V13ZM13 13V17H14.5C15.8807 17 17 15.8807 17 14.5V13H13ZM13 7H17V5.5C17 4.11929 15.8807 3 14.5 3H13V7Z",
    );
    this.addChild(path0);
  }
}
