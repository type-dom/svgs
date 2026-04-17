import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlArrowOutlineDownLeftFilledSvg extends TypeSvgSvg {
  className: "FlArrowOutlineDownLeftFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlArrowOutlineDownLeftFilledSvg";
    addAttrObj(this, {
      name: "FlArrowOutlineDownLeftFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M3.6659 17.9897C2.71054 18.0959 1.90325 17.2887 2.00941 16.3333L3.08758 6.63002C3.22648 5.37995 4.74972 4.84568 5.63909 5.73501L6.70638 6.80228L11.0695 2.43933C11.6553 1.85356 12.605 1.85356 13.1908 2.43933L17.5605 6.8089C18.1463 7.39468 18.1463 8.34443 17.5605 8.93021L13.1974 13.2931L14.2645 14.3601C15.1539 15.2495 14.6195 16.7727 13.3694 16.9116L3.6659 17.9897Z",
    );
    this.addChild(path0);
  }
}
