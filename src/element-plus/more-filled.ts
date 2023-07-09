import {SvgPath, TypeHtml, TypeSvgSvg} from "type-dom.ts";
export class MoreFilledSvg extends TypeSvgSvg {
  className: 'MoreFilledSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'MoreFilledSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData("M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z");
    this.childNodes.push(path0);
  }
}
