import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlScanPersonColorSvg extends TypeSvgSvg {
  className: "FlScanPersonColorSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlScanPersonColorSvg";
    addAttrObj(this, {
      name: "FlScanPersonColorSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData("M4 16C4 14.8954 4.89543 14 6 14H14C15.1046 14 16 14.8954 16 16V17H4V16Z");
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path1.setData("M4 16C4 14.8954 4.89543 14 6 14H14C15.1046 14 16 14.8954 16 16V17H4V16Z");
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path2.setData(
      "M10 12C11.933 12 13.5 10.433 13.5 8.5C13.5 6.567 11.933 5 10 5C8.067 5 6.5 6.567 6.5 8.5C6.5 10.433 8.067 12 10 12Z",
    );
    this.addChild(path2);
    const path3 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path3.setData(
      "M4.5 4C4.22386 4 4 4.22386 4 4.5V7C4 7.55228 3.55228 8 3 8C2.44772 8 2 7.55228 2 7V4.5C2 3.11929 3.11929 2 4.5 2H7C7.55228 2 8 2.44772 8 3C8 3.55228 7.55228 4 7 4H4.5ZM12 3C12 2.44772 12.4477 2 13 2H15.5C16.8807 2 18 3.11929 18 4.5V7C18 7.55228 17.5523 8 17 8C16.4477 8 16 7.55228 16 7V4.5C16 4.22386 15.7761 4 15.5 4H13C12.4477 4 12 3.55228 12 3ZM3 12C3.55228 12 4 12.4477 4 13V15.5C4 15.7761 4.22386 16 4.5 16H7C7.55228 16 8 16.4477 8 17C8 17.5523 7.55228 18 7 18H4.5C3.11929 18 2 16.8807 2 15.5V13C2 12.4477 2.44772 12 3 12ZM17 12C17.5523 12 18 12.4477 18 13V15.5C18 16.8807 16.8807 18 15.5 18H13C12.4477 18 12 17.5523 12 17C12 16.4477 12.4477 16 13 16H15.5C15.7761 16 16 15.7761 16 15.5V13C16 12.4477 16.4477 12 17 12Z",
    );
    this.addChild(path3);
  }
}
