import {SvgPath, TypeHtml, TypeSvgSvg} from "type-dom.ts";
export class FolderSvg extends TypeSvgSvg {
  className: 'FolderSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'FolderSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData("M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32z");
    this.childNodes.push(path0);
  }
}
