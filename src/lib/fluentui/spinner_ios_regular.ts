import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlSpinnerIosRegularSvg extends TypeSvgSvg {
  className: 'FlSpinnerIosRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlSpinnerIosRegularSvg';
    this.attr.addObj({
      name: 'FlSpinnerIosRegularSvg',
      title: 'FlSpinnerIosRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M10 3C6.13401 3 3 6.13401 3 10C3 10.2761 2.77614 10.5 2.5 10.5C2.22386 10.5 2 10.2761 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C9.72386 18 9.5 17.7761 9.5 17.5C9.5 17.2239 9.72386 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
