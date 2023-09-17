import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdStaticVerticalLineSvg extends TypeSvgSvg {
  className: 'TdStaticVerticalLineSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdStaticVerticalLineSvg';
    this.addAttrObj({
      name: 'static-vertical-line',
      title: 'static-vertical-line'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M474.91 67h74.19v890h-74.19z',
    );
    this.childNodes.push(path0);
  }
}
