import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class ElPlatformSvg extends TypeSvgSvg {
  className: "ElPlatformSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "ElPlatformSvg";
    addAttrObj(this, {
      name: "ElPlatformSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 1024 1024",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData("M448 832v-64h128v64h192v64H256v-64h192zM128 704V128h768v576H128z");
    this.addChild(path0);
  }
}
