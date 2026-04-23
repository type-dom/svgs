import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class MisTableSvg extends TypeSvgSvg {
  className: "MisTableSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "MisTableSvg";
    addAttrObj(this, {
      name: "MisTableSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 1024 1024",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M0 64v896h1024V64H0zm384 576V448h256v192H384zm256 64v192H384V704h256zm0-512v192H384V192h256zm-320 0v192H64V192h256zM64 448h256v192H64V448zm640 0h256v192H704V448zm0-64V192h256v192H704zM64 704h256v192H64V704zm640 192V704h256v192H704z",
    );
    this.addChild(path0);
  }
}
