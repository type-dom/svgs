import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdLineSvg extends TypeSvgSvg {
  className: 'TdLineSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdLineSvg';
    this.addAttrObj({
      name: 'TdLineSvg',
      title: 'TdLineSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1227 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M1227.922 489.545v44.91H0v-44.91h1227.922z',
    );
    this.childNodes.push(path0);
  }
}
