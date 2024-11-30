import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlSystemFilledSvg extends TypeSvgSvg {
  className: 'FlSystemFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlSystemFilledSvg';
    this.attr.addObj({
      name: 'FlSystemFilledSvg',
      title: 'FlSystemFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M2 6.5C2 5.11929 3.11929 4 4.5 4H15.5C16.8807 4 18 5.11929 18 6.5V13.5C18 14.8807 16.8807 16 15.5 16H4.5C3.11929 16 2 14.8807 2 13.5V6.5ZM4.5 5.5C3.94772 5.5 3.5 5.94772 3.5 6.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H15.5C16.0523 14.5 16.5 14.0523 16.5 13.5V6.5C16.5 5.94772 16.0523 5.5 15.5 5.5H4.5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
