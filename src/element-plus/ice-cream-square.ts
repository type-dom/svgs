import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElIceCreamSquareSvg extends TypeSvgSvg {
  className: 'ElIceCreamSquareSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElIceCreamSquareSvg';
    this.addAttrObj({
      name: 'ElIceCreamSquareSvg',
      title: 'ElIceCreamSquareSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M416 640h256a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32H352a32 32 0 0 0-32 32v448a32 32 0 0 0 32 32h64zm192 64v160a96 96 0 0 1-192 0V704h-64a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96h320a96 96 0 0 1 96 96v448a96 96 0 0 1-96 96h-64zm-64 0h-64v160a32 32 0 1 0 64 0V704z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
