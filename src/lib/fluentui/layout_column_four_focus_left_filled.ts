import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlLayoutColumnFourFocusLeftFilledSvg extends TypeSvgSvg {
  className: 'FlLayoutColumnFourFocusLeftFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlLayoutColumnFourFocusLeftFilledSvg';
    this.attr.addObj({
      name: 'FlLayoutColumnFourFocusLeftFilledSvg',
      title: 'FlLayoutColumnFourFocusLeftFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M14 3C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H6C4.34315 17 3 15.6569 3 14V6C3 4.34315 4.34315 3 6 3H14ZM16 6C16 4.89543 15.1046 4 14 4H13.5V16H14C15.1046 16 16 15.1046 16 14V6ZM12.5 16V4H10V16H12.5ZM6.5 16H9V4H6.5V16Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
