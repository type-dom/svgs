import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElDocumentRemoveSvg extends TypeSvgSvg {
  className: 'ElDocumentRemoveSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElDocumentRemoveSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm192 512h320v64H352v-64z',
    );
    this.childNodes.push(path0);
  }
}
