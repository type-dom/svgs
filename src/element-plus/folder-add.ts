import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElFolderAddSvg extends TypeSvgSvg {
  className: 'ElFolderAddSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElFolderAddSvg';
    this.addAttrObj({
      name: 'ElFolderAddSvg',
      title: 'ElFolderAddSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm384 416V416h64v128h128v64H544v128h-64V608H352v-64h128z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
