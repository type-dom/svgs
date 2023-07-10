import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElHomeFilledSvg extends TypeSvgSvg {
  className: 'ElHomeFilledSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElHomeFilledSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData('M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z');
    this.childNodes.push(path0);
  }
}
