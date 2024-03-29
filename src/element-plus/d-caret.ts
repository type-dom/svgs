import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElDCaretSvg extends TypeSvgSvg {
  className: 'ElDCaretSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElDCaretSvg';
    this.addAttrObj({
      name: 'ElDCaretSvg',
      title: 'ElDCaretSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'm512 128 288 320H224l288-320zM224 576h576L512 896 224 576z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
