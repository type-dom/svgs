import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlLineFlowDiagonalUpRightFilledSvg extends TypeSvgSvg {
  className: "FlLineFlowDiagonalUpRightFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlLineFlowDiagonalUpRightFilledSvg";
    addAttrObj(this, {
      name: "FlLineFlowDiagonalUpRightFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M15.8536 4.85355C16.0488 4.65829 16.0488 4.34171 15.8536 4.14645C15.6583 3.95118 15.3417 3.95118 15.1464 4.14645L7.73827 11.5546C7.24786 11.2054 6.64792 11 6 11C4.34315 11 3 12.3432 3 14C3 15.6569 4.34315 17 6 17C7.65685 17 9 15.6569 9 14C9 13.3521 8.79461 12.7522 8.44537 12.2617L15.8536 4.85355Z",
    );
    this.addChild(path0);
  }
}
