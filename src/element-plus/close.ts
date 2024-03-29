import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElCloseSvg extends TypeSvgSvg {
  className: 'ElCloseSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElCloseSvg';
    this.addAttrObj({
      name: 'ElCloseSvg',
      title: 'ElCloseSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
