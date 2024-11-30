import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlTableColumnTopBottomRegularSvg extends TypeSvgSvg {
  className: 'FlTableColumnTopBottomRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlTableColumnTopBottomRegularSvg';
    this.attr.addObj({
      name: 'FlTableColumnTopBottomRegularSvg',
      title: 'FlTableColumnTopBottomRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M17 5.5C17 4.11929 15.8807 3 14.5 3H5.5C4.11929 3 3 4.11929 3 5.5V14.5C3 15.8807 4.11929 17 5.5 17H14.5C15.8807 17 17 15.8807 17 14.5V5.5ZM4 14.5V13H7V16H5.5L5.35554 15.9931C4.59489 15.9204 4 15.2797 4 14.5ZM14.5 16H13V13H16V14.5L15.9931 14.6445C15.9204 15.4051 15.2797 16 14.5 16ZM12 8V12H8V8H12ZM13 8H16V12H13V8ZM13 4H14.5L14.6445 4.00687C15.4051 4.07955 16 4.7203 16 5.5V7H13V4ZM4 7V5.5L4.00687 5.35554C4.07955 4.59489 4.7203 4 5.5 4H7V7H4ZM7 8V12H4V8H7Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
