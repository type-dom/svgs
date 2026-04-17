import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlDataWaterfallFilledSvg extends TypeSvgSvg {
  className: "FlDataWaterfallFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlDataWaterfallFilledSvg";
    addAttrObj(this, {
      name: "FlDataWaterfallFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M1 3.5C1 3.22386 1.22386 3 1.5 3H7C8.10457 3 9 3.89543 9 5V9.5H15C16.035 9.5 17 10.2411 17 11.3V16H18.5C18.7761 16 19 16.2239 19 16.5C19 16.7761 18.7761 17 18.5 17H13C11.965 17 11 16.2589 11 15.2V10.5H5C3.89543 10.5 3 9.60457 3 8.5V4H1.5C1.22386 4 1 3.77614 1 3.5Z",
    );
    this.addChild(path0);
  }
}
