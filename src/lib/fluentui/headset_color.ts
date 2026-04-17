import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlHeadsetColorSvg extends TypeSvgSvg {
  className: "FlHeadsetColorSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlHeadsetColorSvg";
    addAttrObj(this, {
      name: "FlHeadsetColorSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData("M6 12V14C6 14.5523 6.44772 15 7 15H9V17H7C5.34315 17 4 15.6569 4 14V12H6Z");
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path1.setData(
      "M12 16C12 17.1046 11.1046 18 10 18C8.89543 18 8 17.1046 8 16C8 14.8954 8.89543 14 10 14C11.1046 14 12 14.8954 12 16Z",
    );
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path2.setData(
      "M14 8L15 9L16 8C16 4.68629 13.3137 2 10 2C6.68629 2 4 4.68629 4 8L5 9L6 8C6 5.79086 7.79086 4 10 4C12.2091 4 14 5.79086 14 8Z",
    );
    this.addChild(path2);
    const path3 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path3.setData("M6 8H7C7.55228 8 8 8.44772 8 9V12C8 12.5523 7.55228 13 7 13H6L5 10.5L6 8Z");
    this.addChild(path3);
    const path4 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path4.setData(
      "M15 12L14 13H13C12.4477 13 12 12.5523 12 12L12 9C12 8.44772 12.4477 8 13 8L14 8L15 9V12Z",
    );
    this.addChild(path4);
    const path5 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path5.setData("M6 8H4V13H6V8Z");
    this.addChild(path5);
    const path6 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path6.setData("M16 8H14V13C15.1046 13 16 12.1046 16 11V8Z");
    this.addChild(path6);
  }
}
