import {SvgPath, TypeHtml, TypeSvgSvg} from "type-dom.ts";
export class ManagementSvg extends TypeSvgSvg {
  className: 'ManagementSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ManagementSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData("M576 128v288l96-96 96 96V128h128v768H320V128h256zm-448 0h128v768H128V128z");
    this.childNodes.push(path0);
  }
}
