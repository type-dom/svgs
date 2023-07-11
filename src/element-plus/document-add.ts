import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElDocumentAddSvg extends TypeSvgSvg {
  className: 'ElDocumentAddSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElDocumentAddSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData('M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm320 512V448h64v128h128v64H544v128h-64V640H352v-64h128z');
    this.childNodes.push(path0);
  }
}