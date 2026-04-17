import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlTriangleFilledSvg extends TypeSvgSvg {
  className: "FlTriangleFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlTriangleFilledSvg";
    addAttrObj(this, {
      name: "FlTriangleFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M1.17569 15.7997C0.648072 16.7987 1.37233 18.0003 2.50205 18.0003H17.4967C18.6339 18.0003 19.3575 16.7841 18.815 15.7847L11.2149 1.78437C10.6435 0.731747 9.12968 0.740379 8.57031 1.79945L1.17569 15.7997Z",
    );
    this.addChild(path0);
  }
}
