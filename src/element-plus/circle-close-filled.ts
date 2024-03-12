import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElCircleCloseFilledSvg extends TypeSvgSvg {
  className: 'ElCircleCloseFilledSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElCircleCloseFilledSvg';
    this.addAttrObj({
      name: 'ElCircleCloseFilledSvg',
      title: 'ElCircleCloseFilledSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
