import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class MisMonitorSvg extends TypeSvgSvg {
  className: "MisMonitorSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "MisMonitorSvg";
    addAttrObj(this, {
      name: "MisMonitorSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 1024 1024",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData("M64 64v576h832V64H64zM0 0h960v704H0V0z");
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path1.setData(
      "M192 896h576v64H192zm256-256h64v256h-64zm31.232-78.396 309.99-348.33-47.803-42.548-259.567 291.67-177.895-222.387L163.21 438.605l52.224 37.009 91.622-129.28z",
    );
    this.addChild(path1);
  }
}
