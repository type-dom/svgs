import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlCaretRightFilledSvg extends TypeSvgSvg {
  className: "FlCaretRightFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlCaretRightFilledSvg";
    addAttrObj(this, {
      name: "FlCaretRightFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M7 14.2037C7 15.0444 7.97434 15.5098 8.62834 14.9816L13.351 11.1671C14.0943 10.5668 14.0943 9.4337 13.351 8.83333L8.62834 5.01887C7.97434 4.49064 7 4.95613 7 5.79681V14.2037Z",
    );
    this.addChild(path0);
  }
}
