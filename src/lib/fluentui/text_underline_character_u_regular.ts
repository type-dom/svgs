import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlTextUnderlineCharacterURegularSvg extends TypeSvgSvg {
  className: 'FlTextUnderlineCharacterURegularSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlTextUnderlineCharacterURegularSvg';
    this.attr.addObj({
      name: 'FlTextUnderlineCharacterURegularSvg',
      title: 'FlTextUnderlineCharacterURegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M7 3.5C7 3.22386 6.77614 3 6.5 3C6.22386 3 6 3.22386 6 3.5V10C6 12.2091 7.79086 14 10 14C12.2091 14 14 12.2091 14 10V3.5C14 3.22386 13.7761 3 13.5 3C13.2239 3 13 3.22386 13 3.5V10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10V3.5ZM5.5 16C5.22386 16 5 16.2239 5 16.5C5 16.7761 5.22386 17 5.5 17H14.5C14.7761 17 15 16.7761 15 16.5C15 16.2239 14.7761 16 14.5 16H5.5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
