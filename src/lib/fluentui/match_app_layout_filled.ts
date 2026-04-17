import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlMatchAppLayoutFilledSvg extends TypeSvgSvg {
  className: "FlMatchAppLayoutFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlMatchAppLayoutFilledSvg";
    addAttrObj(this, {
      name: "FlMatchAppLayoutFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M3.5 7C2.67157 7 2 7.67157 2 8.5V11.5C2 12.3284 2.67157 13 3.5 13H7.5C8.32843 13 9 12.3284 9 11.5V8.5C9 7.67157 8.32843 7 7.5 7H3.5ZM12.5 7C11.6716 7 11 7.67157 11 8.5V11.5C11 12.3284 11.6716 13 12.5 13H16.5C17.3284 13 18 12.3284 18 11.5V8.5C18 7.67157 17.3284 7 16.5 7H12.5Z",
    );
    this.addChild(path0);
  }
}
