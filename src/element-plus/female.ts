import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElFemaleSvg extends TypeSvgSvg {
  className: 'ElFemaleSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElFemaleSvg';
    this.addAttrObj({
      name: 'ElFemaleSvg',
      title: 'ElFemaleSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M512 640a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath({ parent: this });
    path1.setData(
      'M512 640q32 0 32 32v256q0 32-32 32t-32-32V672q0-32 32-32z',
    );
    this.childNodes.push(path1);
    const path2 = new SvgPath({ parent: this });
    path2.setData(
      'M352 800h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z',
    );
    this.childNodes.push(path2);
    this.setConfig(config);
  }
}
