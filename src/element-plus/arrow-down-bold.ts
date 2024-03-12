import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElArrowDownBoldSvg extends TypeSvgSvg {
  className: 'ElArrowDownBoldSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElArrowDownBoldSvg';
    this.addAttrObj({
      name: 'ElArrowDownBoldSvg',
      title: 'ElArrowDownBoldSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
