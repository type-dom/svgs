import {SvgPath, TypeHtml, TypeSvgSvg} from "type-dom.ts";
export class ExpandSvg extends TypeSvgSvg {
  className: 'ExpandSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ExpandSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData("M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z");
    this.childNodes.push(path0);
  }
}
