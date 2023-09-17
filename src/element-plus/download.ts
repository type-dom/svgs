import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElDownloadSvg extends TypeSvgSvg {
  className: 'ElDownloadSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElDownloadSvg';
    this.addAttrObj({
      name: 'download',
      title: 'download'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64v450.304z',
    );
    this.childNodes.push(path0);
  }
}
