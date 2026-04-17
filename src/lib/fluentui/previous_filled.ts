import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlPreviousFilledSvg extends TypeSvgSvg {
  className: "FlPreviousFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlPreviousFilledSvg";
    addAttrObj(this, {
      name: "FlPreviousFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M17.0002 4.25211C17.0002 3.25186 15.8838 2.65676 15.0534 3.21436L6.55415 8.92144C5.81966 9.41464 5.81592 10.4938 6.54698 10.9921L15.0462 16.785C15.876 17.3505 17.0002 16.7562 17.0002 15.7521V4.25211ZM3 3.5C3 3.22386 3.22386 3 3.5 3C3.77614 3 4 3.22386 4 3.5V16.5C4 16.7761 3.77614 17 3.5 17C3.22386 17 3 16.7761 3 16.5V3.5Z",
    );
    this.addChild(path0);
  }
}
