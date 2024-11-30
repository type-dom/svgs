import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElKeySvg extends TypeSvgSvg {
  className: 'ElKeySvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'ElKeySvg';
    this.attr.addObj({
      name: 'ElKeySvg',
      title: 'ElKeySvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M448 456.064V96a32 32 0 0 1 32-32.064L672 64a32 32 0 0 1 0 64H512v128h160a32 32 0 0 1 0 64H512v128a256 256 0 1 1-64 8.064zM512 896a192 192 0 1 0 0-384 192 192 0 0 0 0 384z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
