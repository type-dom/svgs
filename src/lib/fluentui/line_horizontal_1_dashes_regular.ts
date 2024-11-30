import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlLineHorizontal1DashesRegularSvg extends TypeSvgSvg {
  className: 'FlLineHorizontal1DashesRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlLineHorizontal1DashesRegularSvg';
    this.attr.addObj({
      name: 'FlLineHorizontal1DashesRegularSvg',
      title: 'FlLineHorizontal1DashesRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M2 9.5C2 9.22386 2.22386 9 2.5 9H5.5C5.77614 9 6 9.22386 6 9.5C6 9.77614 5.77614 10 5.5 10H2.5C2.22386 10 2 9.77614 2 9.5ZM8 9.5C8 9.22386 8.22386 9 8.5 9H11.5C11.7761 9 12 9.22386 12 9.5C12 9.77614 11.7761 10 11.5 10H8.5C8.22386 10 8 9.77614 8 9.5ZM14 9.5C14 9.22386 14.2239 9 14.5 9H17.5C17.7761 9 18 9.22386 18 9.5C18 9.77614 17.7761 10 17.5 10H14.5C14.2239 10 14 9.77614 14 9.5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
