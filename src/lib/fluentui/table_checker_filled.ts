import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlTableCheckerFilledSvg extends TypeSvgSvg {
  className: 'FlTableCheckerFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlTableCheckerFilledSvg';
    this.attr.addObj({
      name: 'FlTableCheckerFilledSvg',
      title: 'FlTableCheckerFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M7 3V7H3V5.5C3 4.11929 4.11929 3 5.5 3H7ZM12 8H8V12H12V8ZM13 13H17V14.5C17 15.8807 15.8807 17 14.5 17H13V13ZM8 4H14.5C15.3284 4 16 4.67157 16 5.5V12H17V5.5C17 4.11929 15.8807 3 14.5 3H8V4ZM5.5 16H12V17H5.5C4.11929 17 3 15.8807 3 14.5V8H4V14.5C4 15.3284 4.67157 16 5.5 16Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
