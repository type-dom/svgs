import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlDocumentFooterRegularSvg extends TypeSvgSvg {
  className: 'FlDocumentFooterRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlDocumentFooterRegularSvg';
    this.attr.addObj({
      name: 'FlDocumentFooterRegularSvg',
      title: 'FlDocumentFooterRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M6 2C4.89543 2 4 2.89543 4 4V16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V4C16 2.89543 15.1046 2 14 2H6ZM5 4C5 3.44772 5.44772 3 6 3H14C14.5523 3 15 3.44772 15 4V16C15 16.5523 14.5523 17 14 17H6C5.44772 17 5 16.5523 5 16V4ZM7 14C6.44772 14 6 14.4477 6 15C6 15.5523 6.44772 16 7 16H13C13.5523 16 14 15.5523 14 15C14 14.4477 13.5523 14 13 14H7Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
