import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElRemoveSvg extends TypeSvgSvg {
  className: 'ElRemoveSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElRemoveSvg';
    this.addAttrObj({
      name: 'ElRemoveSvg',
      title: 'ElRemoveSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath({ parent: this });
    path1.setData(
      'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z',
    );
    this.childNodes.push(path1);
    this.setConfig(config);
  }
}
