import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElFolderOpenedSvg extends TypeSvgSvg {
  className: 'ElFolderOpenedSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElFolderOpenedSvg';
    this.addAttrObj({
      name: 'ElFolderOpenedSvg',
      title: 'ElFolderOpenedSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M878.08 448H241.92l-96 384h636.16l96-384zM832 384v-64H485.76L357.504 192H128v448l57.92-231.744A32 32 0 0 1 216.96 384H832zm-24.96 512H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h287.872l128.384 128H864a32 32 0 0 1 32 32v96h23.04a32 32 0 0 1 31.04 39.744l-112 448A32 32 0 0 1 807.04 896z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
