import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElExpandSvg extends TypeSvgSvg {
  className: 'ElExpandSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'ElExpandSvg';
    this.attr.addObj({
      name: 'ElExpandSvg',
      title: 'ElExpandSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
