import {SvgPath, TypeHtml, TypeSvgSvg} from "type-dom.ts";
export class FlagSvg extends TypeSvgSvg {
  className: 'FlagSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'FlagSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData("M288 128h608L736 384l160 256H288v320h-96V64h96v64z");
    this.childNodes.push(path0);
  }
}
