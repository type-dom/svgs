import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlFlagCheckeredFilledSvg extends TypeSvgSvg {
  className: 'FlFlagCheckeredFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlFlagCheckeredFilledSvg';
    this.attr.addObj({
      name: 'FlFlagCheckeredFilledSvg',
      title: 'FlFlagCheckeredFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M4.5 3.25C4.5 2.83579 4.83579 2.5 5.25 2.5H15.75C16.1642 2.5 16.5 2.83579 16.5 3.25V13.75C16.5 14.1642 16.1642 14.5 15.75 14.5H6V17.25C6 17.6642 5.66421 18 5.25 18C4.83579 18 4.5 17.6642 4.5 17.25V3.25ZM6 13H9V10H12V13H15V10H12V7H15V4H12V7H9V4H6V7H9V10H6V13Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
