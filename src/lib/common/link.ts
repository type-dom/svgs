import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class TdLinkSvg extends TypeSvgSvg {
  className: "TdLinkSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "TdLinkSvg";
    addAttrObj(this, {
      name: "TdLinkSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 128 128",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData("M115.625 127.937H.063V12.375h57.781v12.374H12.438v90.813h90.813V70.156h12.374z");
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path1.setData("M116.426 2.821l8.753 8.753-56.734 56.734-8.753-8.745z");
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path2.setData("M127.893 37.982h-12.375V12.375H88.706V0h39.187z");
    this.addChild(path2);
  }
}
