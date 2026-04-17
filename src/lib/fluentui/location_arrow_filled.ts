import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlLocationArrowFilledSvg extends TypeSvgSvg {
  className: "FlLocationArrowFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlLocationArrowFilledSvg";
    addAttrObj(this, {
      name: "FlLocationArrowFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M16.6375 2.06928C17.4462 1.75823 18.2408 2.55286 17.9298 3.36161L12.5462 17.3589C12.1977 18.2649 10.8928 18.1932 10.6458 17.2545L9.07391 11.2814C9.02805 11.1071 8.89192 10.971 8.71762 10.9251L2.7446 9.35329C1.80588 9.10626 1.73415 7.80132 2.64011 7.45287L16.6375 2.06928Z",
    );
    this.addChild(path0);
  }
}
