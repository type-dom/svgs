import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElRemoveFilledSvg extends TypeSvgSvg {
  className: 'ElRemoveFilledSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElRemoveFilledSvg';
    this.addAttrObj({
      name: 'ElRemoveFilledSvg',
      title: 'ElRemoveFilledSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zM288 512a38.4 38.4 0 0 0 38.4 38.4h371.2a38.4 38.4 0 0 0 0-76.8H326.4A38.4 38.4 0 0 0 288 512z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
