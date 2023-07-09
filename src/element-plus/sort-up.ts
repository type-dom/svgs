import {SvgPath, TypeHtml, TypeSvgSvg} from "type-dom.ts";
export class SortUpSvg extends TypeSvgSvg {
  className: 'SortUpSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'SortUpSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData("M384 141.248V928a32 32 0 1 0 64 0V218.56l242.688 242.688A32 32 0 1 0 736 416L438.592 118.656A32 32 0 0 0 384 141.248z");
    this.childNodes.push(path0);
  }
}
