import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlTextAlignCenterRotate270RegularSvg extends TypeSvgSvg {
  className: "FlTextAlignCenterRotate270RegularSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlTextAlignCenterRotate270RegularSvg";
    addAttrObj(this, {
      name: "FlTextAlignCenterRotate270RegularSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M4.5 16C4.22386 16 4 15.7761 4 15.5V4.5C4 4.22386 4.22386 4 4.5 4C4.77614 4 5 4.22386 5 4.5V15.5C5 15.7761 4.77614 16 4.5 16ZM9.5 18C9.22386 18 9 17.7761 9 17.5V2.5C9 2.22386 9.22386 2 9.5 2C9.77614 2 10 2.22386 10 2.5V17.5C10 17.7761 9.77614 18 9.5 18ZM14 13.5C14 13.7761 14.2239 14 14.5 14C14.7761 14 15 13.7761 15 13.5V6.5C15 6.22386 14.7761 6 14.5 6C14.2239 6 14 6.22386 14 6.5V13.5Z",
    );
    this.addChild(path0);
  }
}
