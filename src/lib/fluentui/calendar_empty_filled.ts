import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlCalendarEmptyFilledSvg extends TypeSvgSvg {
  className: 'FlCalendarEmptyFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlCalendarEmptyFilledSvg';
    this.attr.addObj({
      name: 'FlCalendarEmptyFilledSvg',
      title: 'FlCalendarEmptyFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M17 7V14.5C17 15.8807 15.8807 17 14.5 17H5.5C4.11929 17 3 15.8807 3 14.5V7H17ZM14.5 3C15.8807 3 17 4.11929 17 5.5V6H3V5.5C3 4.11929 4.11929 3 5.5 3H14.5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
