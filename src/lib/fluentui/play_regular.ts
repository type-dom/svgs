import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlPlayRegularSvg extends TypeSvgSvg {
  className: 'FlPlayRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlPlayRegularSvg';
    this.attr.addObj({
      name: 'FlPlayRegularSvg',
      title: 'FlPlayRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M17.2204 8.68703C18.2558 9.25661 18.2558 10.7434 17.2204 11.313L7.2234 16.812C6.22371 17.362 5 16.6393 5 15.4991L5 4.50093C5 3.36068 6.22371 2.63805 7.2234 3.18795L17.2204 8.68703ZM16.7381 10.4377C17.0833 10.2478 17.0833 9.7522 16.7381 9.56234L6.74113 4.06327C6.4079 3.87997 6 4.12084 6 4.50093L6 15.4991C6 15.8792 6.4079 16.12 6.74114 15.9367L16.7381 10.4377Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
