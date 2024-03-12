import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElCaretTopSvg extends TypeSvgSvg {
  className: 'ElCaretTopSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElCaretTopSvg';
    this.addAttrObj({
      name: 'ElCaretTopSvg',
      title: 'ElCaretTopSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M512 320 192 704h639.936z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
