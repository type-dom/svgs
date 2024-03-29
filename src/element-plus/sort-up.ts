import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElSortUpSvg extends TypeSvgSvg {
  className: 'ElSortUpSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElSortUpSvg';
    this.addAttrObj({
      name: 'ElSortUpSvg',
      title: 'ElSortUpSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M384 141.248V928a32 32 0 1 0 64 0V218.56l242.688 242.688A32 32 0 1 0 736 416L438.592 118.656A32 32 0 0 0 384 141.248z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
