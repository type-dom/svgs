import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlHourglassOneQuarterFilledSvg extends TypeSvgSvg {
  className: "FlHourglassOneQuarterFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlHourglassOneQuarterFilledSvg";
    addAttrObj(this, {
      name: "FlHourglassOneQuarterFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M6.67951 14C6.53889 14.1859 6.41822 14.387 6.32 14.6C6.11516 15.0387 6.00608 15.5159 6 16H14C13.9947 15.5169 13.8891 15.0402 13.69 14.6C13.5885 14.3871 13.4653 14.1861 13.3228 14H6.67951Z",
    );
    this.addChild(path0);
  }
}
