import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElBottomSvg extends TypeSvgSvg {
  className: 'ElBottomSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElBottomSvg';
    this.addAttrObj({
      name: 'ElBottomSvg',
      title: 'ElBottomSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M544 805.888V168a32 32 0 1 0-64 0v637.888L246.656 557.952a30.72 30.72 0 0 0-45.312 0 35.52 35.52 0 0 0 0 48.064l288 306.048a30.72 30.72 0 0 0 45.312 0l288-306.048a35.52 35.52 0 0 0 0-48 30.72 30.72 0 0 0-45.312 0L544 805.824z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
