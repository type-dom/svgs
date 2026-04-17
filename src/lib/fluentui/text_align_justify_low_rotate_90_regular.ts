import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlTextAlignJustifyLowRotate90RegularSvg extends TypeSvgSvg {
  className: "FlTextAlignJustifyLowRotate90RegularSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlTextAlignJustifyLowRotate90RegularSvg";
    addAttrObj(this, {
      name: "FlTextAlignJustifyLowRotate90RegularSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M15.5 9C15.7761 9 16 9.22386 16 9.5V17.5C16 17.7761 15.7761 18 15.5 18C15.2239 18 15 17.7761 15 17.5V9.5C15 9.22386 15.2239 9 15.5 9ZM10.5 9C10.7761 9 11 9.22386 11 9.5V17.5C11 17.7761 10.7761 18 10.5 18C10.2239 18 10 17.7761 10 17.5V9.5C10 9.22386 10.2239 9 10.5 9ZM6 2.5C6 2.22386 5.77614 2 5.5 2C5.22386 2 5 2.22386 5 2.5V17.5C5 17.7761 5.22386 18 5.5 18C5.77614 18 6 17.7761 6 17.5V2.5Z",
    );
    this.addChild(path0);
  }
}
