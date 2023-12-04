import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class ElKeySvg extends TypeSvgSvg {
  className: 'ElKeySvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElKeySvg';
    this.addAttrObj({
      name: 'ElKeySvg',
      title: 'ElKeySvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M448 456.064V96a32 32 0 0 1 32-32.064L672 64a32 32 0 0 1 0 64H512v128h160a32 32 0 0 1 0 64H512v128a256 256 0 1 1-64 8.064zM512 896a192 192 0 1 0 0-384 192 192 0 0 0 0 384z',
    );
    this.childNodes.push(path0);
  }
}
