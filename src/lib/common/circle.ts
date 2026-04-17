import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class TdCircleSvg extends TypeSvgSvg {
  className: "TdCircleSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "TdCircleSvg";
    addAttrObj(this, {
      name: "TdCircleSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 1024 1024",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M62 512c0 248.528 201.472 450 450 450s450-201.472 450-450c0-248.528-201.472-450-450-450-248.528 0-450 201.472-450 450z",
    );
    this.addChild(path0);
  }
}
