import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlCalendarPhoneRegularSvg extends TypeSvgSvg {
  className: 'FlCalendarPhoneRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlCalendarPhoneRegularSvg';
    this.attr.addObj({
      name: 'FlCalendarPhoneRegularSvg',
      title: 'FlCalendarPhoneRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M14.5 3C15.8807 3 17 4.11929 17 5.5V8.05001C16.8384 8.01722 16.6712 8 16.5 8H16V7H4V14.5C4 15.3284 4.67157 16 5.5 16H11V16.5C11 16.6712 11.0172 16.8384 11.05 17H5.5C4.11929 17 3 15.8807 3 14.5V5.5C3 4.11929 4.11929 3 5.5 3H14.5ZM14.5 4H5.5C4.67157 4 4 4.67157 4 5.5V6H16V5.5C16 4.67157 15.3284 4 14.5 4ZM13.75 9C12.7835 9 12 9.7835 12 10.75V16.25C12 17.2165 12.7835 18 13.75 18H16.25C17.2165 18 18 17.2165 18 16.25V10.75C18 9.7835 17.2165 9 16.25 9H13.75ZM14 15.5C14 15.2239 14.2239 15 14.5 15H15.5C15.7761 15 16 15.2239 16 15.5C16 15.7761 15.7761 16 15.5 16H14.5C14.2239 16 14 15.7761 14 15.5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
