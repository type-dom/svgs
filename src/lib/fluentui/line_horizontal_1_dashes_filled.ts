import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlLineHorizontal1DashesFilledSvg extends TypeSvgSvg {
  className: 'FlLineHorizontal1DashesFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlLineHorizontal1DashesFilledSvg';
    this.attr.addObj({
      name: 'FlLineHorizontal1DashesFilledSvg',
      title: 'FlLineHorizontal1DashesFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M2 9.75C2 9.33579 2.33579 9 2.75 9H5.25C5.66421 9 6 9.33579 6 9.75C6 10.1642 5.66421 10.5 5.25 10.5H2.75C2.33579 10.5 2 10.1642 2 9.75ZM8 9.75C8 9.33579 8.33579 9 8.75 9H11.25C11.6642 9 12 9.33579 12 9.75C12 10.1642 11.6642 10.5 11.25 10.5H8.75C8.33579 10.5 8 10.1642 8 9.75ZM14 9.75C14 9.33579 14.3358 9 14.75 9H17.25C17.6642 9 18 9.33579 18 9.75C18 10.1642 17.6642 10.5 17.25 10.5H14.75C14.3358 10.5 14 10.1642 14 9.75Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
