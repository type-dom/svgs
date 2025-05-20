import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlAppRecentFilledSvg extends TypeSvgSvg {
  className: 'FlAppRecentFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlAppRecentFilledSvg';
    this.attr.addObj({
      name: 'FlAppRecentFilledSvg',
      title: 'FlAppRecentFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M7 2C5.89543 2 5 2.89543 5 4V16C5 17.1046 5.89543 18 7 18H13C14.1046 18 15 17.1046 15 16V4C15 2.89543 14.1046 2 13 2H7ZM2 6C2 4.89543 2.89543 4 4 4V16C2.89543 16 2 15.1046 2 14V6ZM16 16V4C17.1046 4 18 4.89543 18 6V14C18 15.1046 17.1046 16 16 16Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
