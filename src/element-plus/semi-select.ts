import {SvgPath, TypeHtml, TypeSvgSvg} from "type-dom.ts";
export class SemiSelectSvg extends TypeSvgSvg {
  className: 'SemiSelectSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'SemiSelectSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData("M128 448h768q64 0 64 64t-64 64H128q-64 0-64-64t64-64z");
    this.childNodes.push(path0);
  }
}
