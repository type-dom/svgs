import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlSlideTransitionFilledSvg extends TypeSvgSvg {
  className: 'FlSlideTransitionFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlSlideTransitionFilledSvg';
    this.attr.addObj({
      name: 'FlSlideTransitionFilledSvg',
      title: 'FlSlideTransitionFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M2 6.75C2 5.23122 3.23122 4 4.75 4H15.25C16.7688 4 18 5.23122 18 6.75V13.25C18 14.7688 16.7688 16 15.25 16H4.75C3.23122 16 2 14.7688 2 13.25V6.75ZM6 5H5V15H6V5ZM9 5H8V15H9V5ZM12 5V15H13V5H12Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
