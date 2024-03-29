import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdIncreaseIndentSvg extends TypeSvgSvg {
  className: 'TdIncreaseIndentSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdIncreaseIndentSvg';
    this.addAttrObj({
      name: 'TdIncreaseIndentSvg',
      title: 'TdIncreaseIndentSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M448 384h576v64H448zM448 576h386v64H448zM448 192h576v64H448zM0 192h320v64H0zM448 768h576v64H448zM0 768h320v64H0z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath({ parent: this });
    path1.setData(
      'M62.8 704l137.8-128H1.3V448h199.1L62.7 320h114.8L384 512.1 177.6 704z',
    );
    this.childNodes.push(path1);
    this.setConfig(config);
  }
}
