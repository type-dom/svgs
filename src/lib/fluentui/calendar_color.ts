import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlCalendarColorSvg extends TypeSvgSvg {
  className: "FlCalendarColorSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlCalendarColorSvg";
    addAttrObj(this, {
      name: "FlCalendarColorSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData("M17 6H3V14.5C3 15.8807 4.11929 17 5.5 17H14.5C15.8807 17 17 15.8807 17 14.5V6Z");
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path1.setData("M17 6H3V14.5C3 15.8807 4.11929 17 5.5 17H14.5C15.8807 17 17 15.8807 17 14.5V6Z");
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path2.setData("M17 5.5C17 4.11929 15.8807 3 14.5 3H5.5C4.11929 3 3 4.11929 3 5.5V7H17V5.5Z");
    this.addChild(path2);
  }
}
