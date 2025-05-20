import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlSlideTransitionRegularSvg extends TypeSvgSvg {
  className: 'FlSlideTransitionRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlSlideTransitionRegularSvg';
    this.attr.addObj({
      name: 'FlSlideTransitionRegularSvg',
      title: 'FlSlideTransitionRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M4.75 4C3.23122 4 2 5.23122 2 6.75V13.25C2 14.7688 3.23122 16 4.75 16H15.25C16.7688 16 18 14.7688 18 13.25V6.75C18 5.23122 16.7688 4 15.25 4H4.75ZM12 5V15H9V5H12ZM13 15V5H15.25C16.2165 5 17 5.7835 17 6.75V13.25C17 14.2165 16.2165 15 15.25 15H13ZM8 15H6V5H8V15ZM5 5V15H4.75C3.7835 15 3 14.2165 3 13.25V6.75C3 5.7835 3.7835 5 4.75 5H5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
