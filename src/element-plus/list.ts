import {SvgPath, TypeHtml, TypeSvgSvg} from "type-dom.ts";
export class ListSvg extends TypeSvgSvg {
  className: 'ListSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ListSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData("M704 192h160v736H160V192h160v64h384v-64zM288 512h448v-64H288v64zm0 256h448v-64H288v64zm96-576V96h256v96H384z");
    this.childNodes.push(path0);
  }
}
