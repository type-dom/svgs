import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElBellSvg extends TypeSvgSvg {
  className: 'ElBellSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElBellSvg';
    this.addAttrObj({
      name: 'ElBellSvg',
      title: 'ElBellSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M512 64a64 64 0 0 1 64 64v64H448v-64a64 64 0 0 1 64-64z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath({ parent: this });
    path1.setData(
      'M256 768h512V448a256 256 0 1 0-512 0v320zm256-640a320 320 0 0 1 320 320v384H192V448a320 320 0 0 1 320-320z',
    );
    this.childNodes.push(path1);
    const path2 = new SvgPath({ parent: this });
    path2.setData(
      'M96 768h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm352 128h128a64 64 0 0 1-128 0z',
    );
    this.childNodes.push(path2);
    this.setConfig(config);
  }
}
