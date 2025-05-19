import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdViewCodeSvg extends TypeSvgSvg {
  className: 'TdViewCodeSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'TdViewCodeSvg';
    this.attr.addObj({
      name: 'TdViewCodeSvg',
      title: 'TdViewCodeSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M272 279.04l45.248 45.312L113.6 528l203.648 203.648-45.248 45.248L23.04 528zM720 279.04l-45.248 45.312 203.648 203.648-203.648 203.648 45.248 45.248 248.96-248.896z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
