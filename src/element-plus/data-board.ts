import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElDataBoardSvg extends TypeSvgSvg {
  className: 'ElDataBoardSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElDataBoardSvg';
    this.addAttrObj({
      name: 'ElDataBoardSvg',
      title: 'ElDataBoardSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M32 128h960v64H32z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath({ parent: this });
    path1.setData(
      'M192 192v512h640V192H192zm-64-64h768v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V128z',
    );
    this.childNodes.push(path1);
    const path2 = new SvgPath({ parent: this });
    path2.setData(
      'M322.176 960H248.32l144.64-250.56 55.424 32L322.176 960zm453.888 0h-73.856L576 741.44l55.424-32L776.064 960z',
    );
    this.childNodes.push(path2);
    this.setConfig(config);
  }
}
