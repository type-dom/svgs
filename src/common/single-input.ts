import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdSingleInputSvg extends TypeSvgSvg {
  className: 'TdSingleInputSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdSingleInputSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData('M0 171.885714h1024v69.485715H0V171.885714z m0 614.4h1024v69.485715H0v-69.485715z m0 0');
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData('3244');
    this.childNodes.push(path1);
    const path2 = new SvgPath(this);
    path2.setData('M0 171.885714h69.485714v683.885715H0V171.885714z m135.314286 168.228572h69.485714v340.114285H135.314286V340.114286z m819.2-168.228572H1024v683.885715h-69.485714V171.885714z m0 0');
    this.childNodes.push(path2);
    const path3 = new SvgPath(this);
    path3.setData('3245');
    this.childNodes.push(path3);
  }
}
