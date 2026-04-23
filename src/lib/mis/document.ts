import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class MisDocumentSvg extends TypeSvgSvg {
  className: "MisDocumentSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "MisDocumentSvg";
    addAttrObj(this, {
      name: "MisDocumentSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 1024 1024",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M832.1 185.1H609.4l-17.1-62c-9.6-34.6-40.5-58.8-75.3-58.8H196c-43.2 0-78.3 36.4-78.3 81.1V897c0 35.3 28.7 64 64 64H832c35.3 0 64-28.7 64-64V249c.1-35.2-28.6-63.9-63.9-63.9zm-644.4-39.7c0-6.6 4.4-11.1 8.3-11.1h321c3.4 0 6.6 3.1 7.8 7.4l12 43.4H187.7v-39.7zm638.4 745.8H187.7V255.1h638.4v636.1z",
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path1.setData(
      "M311.1 415.1a35 35 0 1 0 70 0 35 35 0 1 0-70 0zm151.2-35h257.8v70H462.3zM311.1 582.3a35 35 0 1 0 70 0 35 35 0 1 0-70 0zm151.2-35h257.8v70H462.3zM311.1 749.5a35 35 0 1 0 70 0 35 35 0 1 0-70 0zm151.2-35h257.8v70H462.3z",
    );
    this.addChild(path1);
  }
}
