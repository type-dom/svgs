import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdStaticVerticalLineSvg extends TypeSvgSvg {
  className: 'TdStaticVerticalLineSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'TdStaticVerticalLineSvg';
    this.attr.addObj({
      name: 'TdStaticVerticalLineSvg',
      title: 'TdStaticVerticalLineSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M474.91 67h74.19v890h-74.19z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
