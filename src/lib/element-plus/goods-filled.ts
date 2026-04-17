import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class ElGoodsFilledSvg extends TypeSvgSvg {
  className: "ElGoodsFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "ElGoodsFilledSvg";
    addAttrObj(this, {
      name: "ElGoodsFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 1024 1024",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M192 352h640l64 544H128l64-544zm128 224h64V448h-64v128zm320 0h64V448h-64v128zM384 288h-64a192 192 0 1 1 384 0h-64a128 128 0 1 0-256 0z",
    );
    this.addChild(path0);
  }
}
