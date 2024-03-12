import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElDocumentCopySvg extends TypeSvgSvg {
  className: 'ElDocumentCopySvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElDocumentCopySvg';
    this.addAttrObj({
      name: 'ElDocumentCopySvg',
      title: 'ElDocumentCopySvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
