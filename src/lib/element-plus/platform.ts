import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElPlatformSvg extends TypeSvgSvg {
  className: 'ElPlatformSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'ElPlatformSvg';
    this.attr.addObj({
      name: 'ElPlatformSvg',
      title: 'ElPlatformSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M448 832v-64h128v64h192v64H256v-64h192zM128 704V128h768v576H128z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
