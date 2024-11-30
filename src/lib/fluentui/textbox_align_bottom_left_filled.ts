import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlTextboxAlignBottomLeftFilledSvg extends TypeSvgSvg {
  className: 'FlTextboxAlignBottomLeftFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlTextboxAlignBottomLeftFilledSvg';
    this.attr.addObj({
      name: 'FlTextboxAlignBottomLeftFilledSvg',
      title: 'FlTextboxAlignBottomLeftFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M5.5 3C4.11929 3 3 4.11929 3 5.5V14.5C3 15.8807 4.11929 17 5.5 17H14.5C15.8807 17 17 15.8807 17 14.5V5.5C17 4.11929 15.8807 3 14.5 3H5.5ZM6.5 10H13.5C13.7761 10 14 10.2239 14 10.5C14 10.7761 13.7761 11 13.5 11H6.5C6.22386 11 6 10.7761 6 10.5C6 10.2239 6.22386 10 6.5 10ZM6.5 13H11.5C11.7761 13 12 13.2239 12 13.5C12 13.7761 11.7761 14 11.5 14H6.5C6.22386 14 6 13.7761 6 13.5C6 13.2239 6.22386 13 6.5 13Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
