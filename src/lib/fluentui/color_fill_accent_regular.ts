import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlColorFillAccentRegularSvg extends TypeSvgSvg {
  className: "FlColorFillAccentRegularSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlColorFillAccentRegularSvg";
    addAttrObj(this, {
      name: "FlColorFillAccentRegularSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M4.83564 12.5H4C3.17157 12.5 2.5 13.1716 2.5 14V16C2.5 16.8284 3.17157 17.5 4 17.5H16C16.8284 17.5 17.5 16.8284 17.5 16V14C17.5 13.7051 17.4149 13.4301 17.2679 13.1982C16.8877 14.1666 16.0422 15 14.7499 15C13.1528 15 12.2383 13.7274 12.0406 12.5H10.9778L10.028 13.4497C8.85645 14.6213 6.95696 14.6213 5.78538 13.4497L4.83564 12.5Z",
    );
    this.addChild(path0);
  }
}
