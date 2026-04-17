import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlStarHalfFilledSvg extends TypeSvgSvg {
  className: "FlStarHalfFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlStarHalfFilledSvg";
    addAttrObj(this, {
      name: "FlStarHalfFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M10 2.3418C9.64369 2.34217 9.28755 2.52798 9.10433 2.89923L7.17389 6.81073L2.8573 7.43797C2.03708 7.55715 1.70956 8.56512 2.30308 9.14366L5.4266 12.1883L4.68924 16.4875C4.54913 17.3044 5.40655 17.9274 6.14018 17.5417L10 15.5124V2.3418Z",
    );
    this.addChild(path0);
  }
}
