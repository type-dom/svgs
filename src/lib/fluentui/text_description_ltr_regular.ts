import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlTextDescriptionLtrRegularSvg extends TypeSvgSvg {
  className: 'FlTextDescriptionLtrRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlTextDescriptionLtrRegularSvg';
    this.attr.addObj({
      name: 'FlTextDescriptionLtrRegularSvg',
      title: 'FlTextDescriptionLtrRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M2.5 5C2.22386 5 2 5.22386 2 5.5C2 5.77614 2.22386 6 2.5 6H17.5C17.7761 6 18 5.77614 18 5.5C18 5.22386 17.7761 5 17.5 5H2.5ZM2.5 8C2.22386 8 2 8.22386 2 8.5C2 8.77614 2.22386 9 2.5 9H17.5C17.7761 9 18 8.77614 18 8.5C18 8.22386 17.7761 8 17.5 8H2.5ZM2 11.5C2 11.2239 2.22386 11 2.5 11H17.5C17.7761 11 18 11.2239 18 11.5C18 11.7761 17.7761 12 17.5 12H2.5C2.22386 12 2 11.7761 2 11.5ZM2.5 14C2.22386 14 2 14.2239 2 14.5C2 14.7761 2.22386 15 2.5 15H12.5C12.7761 15 13 14.7761 13 14.5C13 14.2239 12.7761 14 12.5 14H2.5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
