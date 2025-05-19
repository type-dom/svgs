import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlDividerTallRegularSvg extends TypeSvgSvg {
  className: 'FlDividerTallRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlDividerTallRegularSvg';
    this.attr.addObj({
      name: 'FlDividerTallRegularSvg',
      title: 'FlDividerTallRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M9.5 1C9.77614 1 10 1.22386 10 1.5V18.5C10 18.7761 9.77614 19 9.5 19C9.22386 19 9 18.7761 9 18.5V1.5C9 1.22386 9.22386 1 9.5 1Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
