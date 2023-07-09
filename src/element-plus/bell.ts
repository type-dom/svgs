import {SvgPath, TypeHtml, TypeSvgSvg} from "type-dom.ts";
export class BellSvg extends TypeSvgSvg {
  className: 'BellSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'BellSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData("M512 64a64 64 0 0 1 64 64v64H448v-64a64 64 0 0 1 64-64z");
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData("M256 768h512V448a256 256 0 1 0-512 0v320zm256-640a320 320 0 0 1 320 320v384H192V448a320 320 0 0 1 320-320z");
    this.childNodes.push(path1);
    const path2 = new SvgPath(this);
    path2.setData("M96 768h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm352 128h128a64 64 0 0 1-128 0z");
    this.childNodes.push(path2);
  }
}
