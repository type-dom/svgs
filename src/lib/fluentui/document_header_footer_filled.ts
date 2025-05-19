import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlDocumentHeaderFooterFilledSvg extends TypeSvgSvg {
  className: 'FlDocumentHeaderFooterFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlDocumentHeaderFooterFilledSvg';
    this.attr.addObj({
      name: 'FlDocumentHeaderFooterFilledSvg',
      title: 'FlDocumentHeaderFooterFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M4 4C4 2.89543 4.89543 2 6 2H14C15.1046 2 16 2.89543 16 4L16 16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4ZM6 5C6 5.55228 6.44772 6 7 6H13C13.5523 6 14 5.55228 14 5C14 4.44772 13.5523 4 13 4H7C6.44772 4 6 4.44772 6 5ZM6 15C6 15.5523 6.44772 16 7 16H13C13.5523 16 14 15.5523 14 15C14 14.4477 13.5523 14 13 14H7C6.44772 14 6 14.4477 6 15Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
