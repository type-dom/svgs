import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElAvatarSvg extends TypeSvgSvg {
  className: 'ElAvatarSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElAvatarSvg';
    this.addAttrObj({
      name: 'ElAvatarSvg',
      title: 'ElAvatarSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
