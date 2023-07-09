import {SvgPath, TypeHtml, TypeSvgSvg} from "type-dom.ts";
export class ArrowUpBoldSvg extends TypeSvgSvg {
  className: 'ArrowUpBoldSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ArrowUpBoldSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData("M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8 316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z");
    this.childNodes.push(path0);
  }
}
