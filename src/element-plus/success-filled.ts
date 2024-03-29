import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElSuccessFilledSvg extends TypeSvgSvg {
  className: 'ElSuccessFilledSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElSuccessFilledSvg';
    this.addAttrObj({
      name: 'ElSuccessFilledSvg',
      title: 'ElSuccessFilledSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
