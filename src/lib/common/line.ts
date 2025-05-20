import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdLineSvg extends TypeSvgSvg {
  className: 'TdLineSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'TdLineSvg';
    this.attr.addObj({
      name: 'TdLineSvg',
      title: 'TdLineSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1227 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M1227.922 489.545v44.91H0v-44.91h1227.922z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
