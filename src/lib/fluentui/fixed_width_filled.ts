import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlFixedWidthFilledSvg extends TypeSvgSvg {
  className: 'FlFixedWidthFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlFixedWidthFilledSvg';
    this.attr.addObj({
      name: 'FlFixedWidthFilledSvg',
      title: 'FlFixedWidthFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3.5 3C3.77614 3 4 3.22386 4 3.5V5H9.5V3.5C9.5 3.22386 9.72386 3 10 3C10.2761 3 10.5 3.22386 10.5 3.5V5H16V3.5C16 3.22386 16.2239 3 16.5 3C16.7761 3 17 3.22386 17 3.5V7.5C17 7.77614 16.7761 8 16.5 8C16.2239 8 16 7.77614 16 7.5V6H10.5V7.5C10.5 7.77614 10.2761 8 10 8C9.72386 8 9.5 7.77614 9.5 7.5V6H4V7.5C4 7.77614 3.77614 8 3.5 8C3.22386 8 3 7.77614 3 7.5V3.5C3 3.22386 3.22386 3 3.5 3ZM9.5 9H5C3.89543 9 3 9.89543 3 11V15C3 16.1046 3.89543 17 5 17H9.5V9ZM10.5 17H15C16.1046 17 17 16.1046 17 15V11C17 9.89543 16.1046 9 15 9H10.5V17Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
