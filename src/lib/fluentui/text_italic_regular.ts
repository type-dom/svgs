import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlTextItalicRegularSvg extends TypeSvgSvg {
  className: 'FlTextItalicRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlTextItalicRegularSvg';
    this.attr.addObj({
      name: 'FlTextItalicRegularSvg',
      title: 'FlTextItalicRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M16 3C16.2761 3 16.5 3.22386 16.5 3.5C16.5 3.77614 16.2761 4 16 4H12.843L8.227 16H11.5C11.7761 16 12 16.2239 12 16.5C12 16.7761 11.7761 17 11.5 17H4C3.72386 17 3.5 16.7761 3.5 16.5C3.5 16.2239 3.72386 16 4 16H7.156L11.771 4H8.5C8.22386 4 8 3.77614 8 3.5C8 3.22386 8.22386 3 8.5 3H16Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
