import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlBoardSplitRegularSvg extends TypeSvgSvg {
  className: 'FlBoardSplitRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlBoardSplitRegularSvg';
    this.attr.addObj({
      name: 'FlBoardSplitRegularSvg',
      title: 'FlBoardSplitRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3 6C3 4.34315 4.34315 3 6 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H6C4.34315 17 3 15.6569 3 14V6ZM4 10V14C4 15.1046 4.89543 16 6 16H11V10H4ZM11 9V4H6C4.89543 4 4 4.89543 4 6V9H11ZM12 16H14C15.1046 16 16 15.1046 16 14V13H12V16ZM16 7V6C16 4.89543 15.1046 4 14 4H12V7H16ZM16 8H12V12H16V8Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
