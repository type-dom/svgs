import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElCaretRightSvg extends TypeSvgSvg {
  className: 'ElCaretRightSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElCaretRightSvg';
    this.addAttrObj({
      name: 'ElCaretRightSvg',
      title: 'ElCaretRightSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M384 192v640l384-320.064z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
