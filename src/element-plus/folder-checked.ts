import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElFolderCheckedSvg extends TypeSvgSvg {
  className: 'ElFolderCheckedSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElFolderCheckedSvg';
    this.addAttrObj({
      name: 'ElFolderCheckedSvg',
      title: 'ElFolderCheckedSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm414.08 502.144 180.992-180.992L736.32 494.4 510.08 720.64l-158.4-158.336 45.248-45.312L510.08 630.144z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
