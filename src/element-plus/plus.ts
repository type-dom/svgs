import {SvgPath, TypeHtml, TypeSvgSvg} from "type-dom.ts";
export class PlusSvg extends TypeSvgSvg {
  className: 'PlusSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'PlusSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData("M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z");
    this.childNodes.push(path0);
  }
}
