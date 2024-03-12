import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdAlignMiddleSvg extends TypeSvgSvg {
  className: 'TdAlignMiddleSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdAlignMiddleSvg';
    this.addAttrObj({
      name: 'TdAlignMiddleSvg',
      title: 'TdAlignMiddleSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M655.36 774.4A21.333333 21.333333 0 0 1 640 810.666667h-85.333333v106.666666a21.333333 21.333333 0 0 1-21.333334 21.333334h-42.666666a21.333333 21.333333 0 0 1-21.333334-21.333334V810.666667H384a21.333333 21.333333 0 0 1-14.933333-36.266667l128-128a21.76 21.76 0 0 1 30.293333 0zM874.666667 469.333333h-725.333334a21.333333 21.333333 0 0 0-21.333333 21.333334v42.666666a21.333333 21.333333 0 0 0 21.333333 21.333334h725.333334a21.333333 21.333333 0 0 0 21.333333-21.333334v-42.666666a21.333333 21.333333 0 0 0-21.333333-21.333334z m-377.6-91.306666a21.76 21.76 0 0 0 30.293333 0l128-128A21.333333 21.333333 0 0 0 640 213.333333h-85.333333V106.666667a21.333333 21.333333 0 0 0-21.333334-21.333334h-42.666666a21.333333 21.333333 0 0 0-21.333334 21.333334V213.333333H384a21.333333 21.333333 0 0 0-14.933333 36.266667z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
