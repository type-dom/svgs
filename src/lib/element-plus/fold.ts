import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElFoldSvg extends TypeSvgSvg {
  className: 'ElFoldSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'ElFoldSvg';
    this.attr.addObj({
      name: 'ElFoldSvg',
      title: 'ElFoldSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M896 192H128v128h768V192zm0 256H384v128h512V448zm0 256H128v128h768V704zM320 384 128 512l192 128V384z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
