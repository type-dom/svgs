import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlSaveFilledSvg extends TypeSvgSvg {
  className: "FlSaveFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlSaveFilledSvg";
    addAttrObj(this, {
      name: "FlSaveFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M3 5C3 3.89543 3.89543 3 5 3H6L6 6.5C6 7.32843 6.67157 8 7.5 8L11.5 8C12.3284 8 13 7.32843 13 6.5V3H13.3787C13.9091 3 14.4178 3.21071 14.7929 3.58579L16.4142 5.20711C16.7893 5.58218 17 6.09089 17 6.62132V15C17 16.1046 16.1046 17 15 17V11.5C15 10.6716 14.3284 10 13.5 10H6.5C5.67157 10 5 10.6716 5 11.5L5 17C3.89543 17 3 16.1046 3 15V5ZM12 3H7L7 6.5C7 6.77614 7.22386 7 7.5 7L11.5 7C11.7761 7 12 6.77614 12 6.5V3ZM14 11.5V17H6V11.5C6 11.2239 6.22386 11 6.5 11H13.5C13.7761 11 14 11.2239 14 11.5Z",
    );
    this.addChild(path0);
  }
}
