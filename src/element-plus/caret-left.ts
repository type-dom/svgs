import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElCaretLeftSvg extends TypeSvgSvg {
  className: 'ElCaretLeftSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElCaretLeftSvg';
    this.addAttrObj({
      name: 'ElCaretLeftSvg',
      title: 'ElCaretLeftSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M672 192 288 511.936 672 832z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
