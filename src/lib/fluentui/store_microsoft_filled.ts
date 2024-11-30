import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlStoreMicrosoftFilledSvg extends TypeSvgSvg {
  className: 'FlStoreMicrosoftFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlStoreMicrosoftFilledSvg';
    this.attr.addObj({
      name: 'FlStoreMicrosoftFilledSvg',
      title: 'FlStoreMicrosoftFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M7 2.5V4H2.5C2.22386 4 2 4.22386 2 4.5V14.5C2 15.8807 3.11929 17 4.5 17H15.5C16.8807 17 18 15.8807 18 14.5V4.5C18 4.22386 17.7761 4 17.5 4H13V2.5C13 1.67157 12.3284 1 11.5 1H8.5C7.67157 1 7 1.67157 7 2.5ZM8.5 2H11.5C11.7761 2 12 2.22386 12 2.5V4H8V2.5C8 2.22386 8.22386 2 8.5 2ZM6.5 10V7H9.5V10H6.5ZM6.5 14V11H9.5V14H6.5ZM13.5 10H10.5V7H13.5V10ZM10.5 14V11H13.5V14H10.5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
