import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlTextTFilledSvg extends TypeSvgSvg {
  className: 'FlTextTFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlTextTFilledSvg';
    this.attr.addObj({
      name: 'FlTextTFilledSvg',
      title: 'FlTextTFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M4 3.75C4 3.33579 4.33579 3 4.75 3H14.75C15.1642 3 15.5 3.33579 15.5 3.75V5.25C15.5 5.66421 15.1642 6 14.75 6C14.3358 6 14 5.66421 14 5.25V4.5H10.5V15.5H11.75C12.1642 15.5 12.5 15.8358 12.5 16.25C12.5 16.6642 12.1642 17 11.75 17H7.75C7.33579 17 7 16.6642 7 16.25C7 15.8358 7.33579 15.5 7.75 15.5H9V4.5H5.5V5.25C5.5 5.66421 5.16421 6 4.75 6C4.33579 6 4 5.66421 4 5.25V3.75Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
