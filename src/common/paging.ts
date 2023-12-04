import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdPagingSvg extends TypeSvgSvg {
  className: 'TdPagingSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdPagingSvg';
    this.addAttrObj({
      name: 'TdPagingSvg',
      title: 'TdPagingSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M912 64v256H112V64h66.688v192h666.688V64zM112 960v-256h800v256h-66.624v-192H178.688v192zM64 448h896v128H64z',
    );
    this.childNodes.push(path0);
  }
}
