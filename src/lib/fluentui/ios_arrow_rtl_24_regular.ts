import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlIosArrowRtl24RegularSvg extends TypeSvgSvg {
  className: "FlIosArrowRtl24RegularSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlIosArrowRtl24RegularSvg";
    addAttrObj(this, {
      name: "FlIosArrowRtl24RegularSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 24 24",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M19.7036 12L11.2125 3.27302C10.9236 2.97614 10.9301 2.50131 11.227 2.21246C11.5239 1.9236 11.9987 1.93011 12.2875 2.22698L21.2875 11.477C21.5708 11.7681 21.5708 12.2319 21.2875 12.523L12.2875 21.773C11.9987 22.0699 11.5239 22.0764 11.227 21.7875C10.9301 21.4987 10.9236 21.0239 11.2125 20.727L19.7036 12Z",
    );
    this.addChild(path0);
  }
}
