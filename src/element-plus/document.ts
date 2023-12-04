import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class ElDocumentSvg extends TypeSvgSvg {
  className: 'ElDocumentSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElDocumentSvg';
    this.addAttrObj({
      name: 'ElDocumentSvg',
      title: 'ElDocumentSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z',
    );
    this.childNodes.push(path0);
  }
}
