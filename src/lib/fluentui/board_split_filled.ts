import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlBoardSplitFilledSvg extends TypeSvgSvg {
  className: 'FlBoardSplitFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlBoardSplitFilledSvg';
    this.attr.addObj({
      name: 'FlBoardSplitFilledSvg',
      title: 'FlBoardSplitFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M6 3C4.34315 3 3 4.34315 3 6V9L11 9V3H6ZM11 10L3 10V14C3 15.6569 4.34315 17 6 17H11V10ZM14 17H12V13H17V14C17 15.6569 15.6569 17 14 17ZM17 12H12V8H17V12ZM17 7L12 7V3H14C15.6569 3 17 4.34315 17 6V7Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
