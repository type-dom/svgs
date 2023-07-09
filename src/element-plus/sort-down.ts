import {SvgPath, TypeHtml, TypeSvgSvg} from "type-dom.ts";
export class SortDownSvg extends TypeSvgSvg {
  className: 'SortDownSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'SortDownSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData("M576 96v709.568L333.312 562.816A32 32 0 1 0 288 608l297.408 297.344A32 32 0 0 0 640 882.688V96a32 32 0 0 0-64 0z");
    this.childNodes.push(path0);
  }
}
