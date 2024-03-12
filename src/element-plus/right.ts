import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElRightSvg extends TypeSvgSvg {
  className: 'ElRightSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElRightSvg';
    this.addAttrObj({
      name: 'ElRightSvg',
      title: 'ElRightSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
