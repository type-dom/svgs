import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdStaticVLineSvg extends TypeSvgSvg {
  className: 'TdStaticVLineSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdStaticVLineSvg';
    this.addAttrObj({
      name: 'TdStaticVLineSvg',
      title: 'TdStaticVLineSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M474.91 67h74.19v890h-74.19z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
