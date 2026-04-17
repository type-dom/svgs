import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlFlagPridePhiladelphiaFilledSvg extends TypeSvgSvg {
  className: "FlFlagPridePhiladelphiaFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlFlagPridePhiladelphiaFilledSvg";
    addAttrObj(this, {
      name: "FlFlagPridePhiladelphiaFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M3.5 3H16.5C16.7761 3 17 3.22386 17 3.5V11.5C17 11.7761 16.7761 12 16.5 12H4L4 17.5C4 17.7761 3.77614 18 3.5 18C3.22386 18 3 17.7761 3 17.5V3.5C3 3.22386 3.22386 3 3.5 3ZM4 4V11H16V4H4Z",
    );
    this.addChild(path0);
  }
}
