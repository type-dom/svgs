import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlClockFilledSvg extends TypeSvgSvg {
  className: "FlClockFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlClockFilledSvg";
    addAttrObj(this, {
      name: "FlClockFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2ZM9.5 5C9.22386 5 9 5.22386 9 5.5V10.5L9.00806 10.5899C9.05039 10.8231 9.25454 11 9.5 11H12.5L12.5899 10.9919C12.8231 10.9496 13 10.7455 13 10.5C13 10.2239 12.7761 10 12.5 10H10V5.5L9.99194 5.41012C9.94961 5.17688 9.74546 5 9.5 5Z",
    );
    this.addChild(path0);
  }
}
