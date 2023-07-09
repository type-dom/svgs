import {SvgPath, TypeHtml, TypeSvgSvg} from "type-dom.ts";
export class CaretTopSvg extends TypeSvgSvg {
  className: 'CaretTopSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'CaretTopSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData("M512 320 192 704h639.936z");
    this.childNodes.push(path0);
  }
}
