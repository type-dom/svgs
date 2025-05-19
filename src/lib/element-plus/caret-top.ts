import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElCaretTopSvg extends TypeSvgSvg {
  className: 'ElCaretTopSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'ElCaretTopSvg';
    this.attr.addObj({
      name: 'ElCaretTopSvg',
      title: 'ElCaretTopSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M512 320 192 704h639.936z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
