import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlTextboxAlignMiddleRightRegularSvg extends TypeSvgSvg {
  className: 'FlTextboxAlignMiddleRightRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlTextboxAlignMiddleRightRegularSvg';
    this.attr.addObj({
      name: 'FlTextboxAlignMiddleRightRegularSvg',
      title: 'FlTextboxAlignMiddleRightRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M5.5 3C4.11929 3 3 4.11929 3 5.5V14.5C3 15.8807 4.11929 17 5.5 17H14.5C15.8807 17 17 15.8807 17 14.5V5.5C17 4.11929 15.8807 3 14.5 3H5.5ZM4 5.5C4 4.67157 4.67157 4 5.5 4H14.5C15.3284 4 16 4.67157 16 5.5V14.5C16 15.3284 15.3284 16 14.5 16H5.5C4.67157 16 4 15.3284 4 14.5V5.5ZM13.5 8C13.7761 8 14 8.22386 14 8.5C14 8.77614 13.7761 9 13.5 9H6.5C6.22386 9 6 8.77614 6 8.5C6 8.22386 6.22386 8 6.5 8H13.5ZM13.5 11C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H8.5C8.22386 12 8 11.7761 8 11.5C8 11.2239 8.22386 11 8.5 11H13.5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
