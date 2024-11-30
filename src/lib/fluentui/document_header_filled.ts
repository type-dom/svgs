import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlDocumentHeaderFilledSvg extends TypeSvgSvg {
  className: 'FlDocumentHeaderFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlDocumentHeaderFilledSvg';
    this.attr.addObj({
      name: 'FlDocumentHeaderFilledSvg',
      title: 'FlDocumentHeaderFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M6 2C4.89543 2 4 2.89543 4 4V16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V4C16 2.89543 15.1046 2 14 2H6ZM7 4H13C13.5523 4 14 4.44772 14 5C14 5.55228 13.5523 6 13 6H7C6.44772 6 6 5.55228 6 5C6 4.44772 6.44772 4 7 4Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
