import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlTextUnderlineRegularSvg extends TypeSvgSvg {
  className: 'FlTextUnderlineRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlTextUnderlineRegularSvg';
    this.attr.addObj({
      name: 'FlTextUnderlineRegularSvg',
      title: 'FlTextUnderlineRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M6 3.5C6 3.22386 5.77614 3 5.5 3C5.22386 3 5 3.22386 5 3.5V9.95455C5 12.7363 7.23385 15 10 15C12.7661 15 15 12.7363 15 9.95455V3.5C15 3.22386 14.7761 3 14.5 3C14.2239 3 14 3.22386 14 3.5V9.95455C14 12.1935 12.2044 14 10 14C7.79559 14 6 12.1935 6 9.95455V3.5ZM5 16.5C5 16.2239 5.22386 16 5.5 16H14.5C14.7761 16 15 16.2239 15 16.5C15 16.7761 14.7761 17 14.5 17H5.5C5.22386 17 5 16.7761 5 16.5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
