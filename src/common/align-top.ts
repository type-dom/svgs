import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdAlignTopSvg extends TypeSvgSvg {
  className: 'TdAlignTopSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdAlignTopSvg';
    this.addAttrObj({
      name: 'TdAlignTopSvg',
      title: 'TdAlignTopSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M655.36 433.066667A21.333333 21.333333 0 0 1 640 469.333333h-85.333333v405.333334a21.333333 21.333333 0 0 1-21.333334 21.333333h-42.666666a21.333333 21.333333 0 0 1-21.333334-21.333333V469.333333H384a21.333333 21.333333 0 0 1-14.933333-36.266666l128-128a21.76 21.76 0 0 1 30.293333 0zM874.666667 128h-725.333334a21.333333 21.333333 0 0 0-21.333333 21.333333v42.666667a21.333333 21.333333 0 0 0 21.333333 21.333333h725.333334a21.333333 21.333333 0 0 0 21.333333-21.333333v-42.666667a21.333333 21.333333 0 0 0-21.333333-21.333333z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
