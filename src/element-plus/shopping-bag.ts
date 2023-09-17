import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElShoppingBagSvg extends TypeSvgSvg {
  className: 'ElShoppingBagSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElShoppingBagSvg';
    this.addAttrObj({
      name: 'shopping-bag',
      title: 'shopping-bag'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M704 320v96a32 32 0 0 1-32 32h-32V320H384v128h-32a32 32 0 0 1-32-32v-96H192v576h640V320H704zm-384-64a192 192 0 1 1 384 0h160a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32h160zm64 0h256a128 128 0 1 0-256 0z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData(
      'M192 704h640v64H192z',
    );
    this.childNodes.push(path1);
  }
}
