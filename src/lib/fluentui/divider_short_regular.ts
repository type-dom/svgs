import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlDividerShortRegularSvg extends TypeSvgSvg {
  className: 'FlDividerShortRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlDividerShortRegularSvg';
    this.attr.addObj({
      name: 'FlDividerShortRegularSvg',
      title: 'FlDividerShortRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M9.5 3C9.77614 3 10 3.22386 10 3.5V16.5C10 16.7761 9.77614 17 9.5 17C9.22386 17 9 16.7761 9 16.5V3.5C9 3.22386 9.22386 3 9.5 3Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
