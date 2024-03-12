import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdAlignBottomSvg extends TypeSvgSvg {
  className: 'TdAlignBottomSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdAlignBottomSvg';
    this.addAttrObj({
      name: 'TdAlignBottomSvg',
      title: 'TdAlignBottomSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M368.64 590.933333A21.333333 21.333333 0 0 1 384 554.666667h85.333333V149.333333a21.333333 21.333333 0 0 1 21.333334-21.333333h42.666666a21.333333 21.333333 0 0 1 21.333334 21.333333V554.666667h85.333333a21.333333 21.333333 0 0 1 14.933333 36.266666l-128 128a21.76 21.76 0 0 1-30.293333 0zM149.333333 896h725.333334a21.333333 21.333333 0 0 0 21.333333-21.333333v-42.666667a21.333333 21.333333 0 0 0-21.333333-21.333333h-725.333334a21.333333 21.333333 0 0 0-21.333333 21.333333v42.666667a21.333333 21.333333 0 0 0 21.333333 21.333333z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
