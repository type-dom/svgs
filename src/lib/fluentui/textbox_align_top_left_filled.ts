import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlTextboxAlignTopLeftFilledSvg extends TypeSvgSvg {
  className: 'FlTextboxAlignTopLeftFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlTextboxAlignTopLeftFilledSvg';
    this.attr.addObj({
      name: 'FlTextboxAlignTopLeftFilledSvg',
      title: 'FlTextboxAlignTopLeftFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M5.5 3C4.11929 3 3 4.11929 3 5.5V14.5C3 15.8807 4.11929 17 5.5 17H14.5C15.8807 17 17 15.8807 17 14.5V5.5C17 4.11929 15.8807 3 14.5 3H5.5ZM6.5 6H13.5C13.7761 6 14 6.22386 14 6.5C14 6.77614 13.7761 7 13.5 7H6.5C6.22386 7 6 6.77614 6 6.5C6 6.22386 6.22386 6 6.5 6ZM6.5 9H11.5C11.7761 9 12 9.22386 12 9.5C12 9.77614 11.7761 10 11.5 10H6.5C6.22386 10 6 9.77614 6 9.5C6 9.22386 6.22386 9 6.5 9Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
