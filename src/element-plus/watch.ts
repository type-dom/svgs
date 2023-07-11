import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElWatchSvg extends TypeSvgSvg {
  className: 'ElWatchSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElWatchSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData('M512 768a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z');
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData('M480 352a32 32 0 0 1 32 32v160a32 32 0 0 1-64 0V384a32 32 0 0 1 32-32z');
    this.childNodes.push(path1);
    const path2 = new SvgPath(this);
    path2.setData('M480 512h128q32 0 32 32t-32 32H480q-32 0-32-32t32-32zm128-256V128H416v128h-64V64h320v192h-64zM416 768v128h192V768h64v192H352V768h64z');
    this.childNodes.push(path2);
  }
}