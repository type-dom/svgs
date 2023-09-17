import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElSunsetSvg extends TypeSvgSvg {
  className: 'ElSunsetSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElSunsetSvg';
    this.addAttrObj({
      name: 'sunset',
      title: 'sunset'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M82.56 640a448 448 0 1 1 858.88 0h-67.2a384 384 0 1 0-724.288 0H82.56zM32 704h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm256 128h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z',
    );
    this.childNodes.push(path0);
  }
}
