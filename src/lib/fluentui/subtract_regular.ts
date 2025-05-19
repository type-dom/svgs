import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlSubtractRegularSvg extends TypeSvgSvg {
  className: 'FlSubtractRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlSubtractRegularSvg';
    this.attr.addObj({
      name: 'FlSubtractRegularSvg',
      title: 'FlSubtractRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3 10C3 9.72386 3.22386 9.5 3.5 9.5H16.5C16.7761 9.5 17 9.72386 17 10C17 10.2761 16.7761 10.5 16.5 10.5H3.5C3.22386 10.5 3 10.2761 3 10Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
