import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElFoldSvg extends TypeSvgSvg {
  className: 'ElFoldSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElFoldSvg';
    this.addAttrObj({
      name: 'ElFoldSvg',
      title: 'ElFoldSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M896 192H128v128h768V192zm0 256H384v128h512V448zm0 256H128v128h768V704zM320 384 128 512l192 128V384z',
    );
    this.childNodes.push(path0);
  }
}
