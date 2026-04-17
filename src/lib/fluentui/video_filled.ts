import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlVideoFilledSvg extends TypeSvgSvg {
  className: "FlVideoFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlVideoFilledSvg";
    addAttrObj(this, {
      name: "FlVideoFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M2 7C2 5.34315 3.34315 4 5 4H10C11.6569 4 13 5.34315 13 7V13C13 14.6569 11.6569 16 10 16H5C3.34315 16 2 14.6569 2 13V7ZM16.0373 14.7759L14 13.3692V6.63025L16.0373 5.22353C16.8665 4.65101 17.9976 5.24453 17.9976 6.25215V13.7473C17.9976 14.7549 16.8665 15.3484 16.0373 14.7759Z",
    );
    this.addChild(path0);
  }
}
