import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElCirclePlusSvg extends TypeSvgSvg {
  className: 'ElCirclePlusSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElCirclePlusSvg';
    this.addAttrObj({
      name: 'ElCirclePlusSvg',
      title: 'ElCirclePlusSvg'
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
      'M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0z',
    );
    this.childNodes.push(path1);
    const path2 = new SvgPath({ parent: this });
    path2.setData(
      'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z',
    );
    this.childNodes.push(path2);
    this.setConfig(config);
  }
}
