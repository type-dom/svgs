import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdThumbnailSvg extends TypeSvgSvg {
  className: 'TdThumbnailSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdThumbnailSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M703.98 703.994H896V896H703.98V703.994z m0-287.974H896v192H703.98v-192z m0-288.02H896v192H703.98V128zM415.987 703.994h191.987V896H415.987V703.994z m0-287.974h191.987v192H415.987v-192z m0-288.02h191.987v192H415.987V128zM128 703.994h191.98V896H128V703.994z m0-287.974h191.98v192H128v-192zM128 128h191.98v192H128V128z',
    );
    this.childNodes.push(path0);
  }
}
