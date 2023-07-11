import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElReadingLampSvg extends TypeSvgSvg {
  className: 'ElReadingLampSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElReadingLampSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData('M352 896h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm-44.672-768-99.52 448h608.384l-99.52-448H307.328zm-25.6-64h460.608a32 32 0 0 1 31.232 25.088l113.792 512A32 32 0 0 1 856.128 640H167.872a32 32 0 0 1-31.232-38.912l113.792-512A32 32 0 0 1 281.664 64z');
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData('M672 576q32 0 32 32v128q0 32-32 32t-32-32V608q0-32 32-32zm-192-.064h64V960h-64z');
    this.childNodes.push(path1);
  }
}