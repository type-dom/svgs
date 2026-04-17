import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlAppTitleFilledSvg extends TypeSvgSvg {
  className: "FlAppTitleFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlAppTitleFilledSvg";
    addAttrObj(this, {
      name: "FlAppTitleFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M7 3C5.34315 3 4 4.34315 4 6V12C4 13.6569 5.34315 15 7 15H13C14.6569 15 16 13.6569 16 12V6C16 4.34315 14.6569 3 13 3H7ZM4.5 17C4.22386 17 4 17.2239 4 17.5C4 17.7761 4.22386 18 4.5 18H15.5C15.7761 18 16 17.7761 16 17.5C16 17.2239 15.7761 17 15.5 17H4.5Z",
    );
    this.addChild(path0);
  }
}
