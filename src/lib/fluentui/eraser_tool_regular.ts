import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlEraserToolRegularSvg extends TypeSvgSvg {
  className: 'FlEraserToolRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlEraserToolRegularSvg';
    this.attr.addObj({
      name: 'FlEraserToolRegularSvg',
      title: 'FlEraserToolRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3.5 2C3.77614 2 4 2.22386 4 2.5V6H16V2.5C16 2.22386 16.2239 2 16.5 2C16.7761 2 17 2.22386 17 2.5V14.5C17 16.433 15.433 18 13.5 18H6.5C4.567 18 3 16.433 3 14.5V2.5C3 2.22386 3.22386 2 3.5 2ZM4 11V14.5C4 15.8807 5.11929 17 6.5 17H13.5C14.8807 17 16 15.8807 16 14.5V11H4ZM16 10V7H4V10H16Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
