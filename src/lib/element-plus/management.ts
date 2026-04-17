import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class ElManagementSvg extends TypeSvgSvg {
  className: "ElManagementSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "ElManagementSvg";
    addAttrObj(this, {
      name: "ElManagementSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 1024 1024",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData("M576 128v288l96-96 96 96V128h128v768H320V128h256zm-448 0h128v768H128V128z");
    this.addChild(path0);
  }
}
