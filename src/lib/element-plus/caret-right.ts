import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElCaretRightSvg extends TypeSvgSvg {
  className: 'ElCaretRightSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'ElCaretRightSvg';
    this.attr.addObj({
      name: 'ElCaretRightSvg',
      title: 'ElCaretRightSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M384 192v640l384-320.064z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
