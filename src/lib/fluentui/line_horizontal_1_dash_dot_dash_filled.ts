import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlLineHorizontal1DashDotDashFilledSvg extends TypeSvgSvg {
  className: 'FlLineHorizontal1DashDotDashFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlLineHorizontal1DashDotDashFilledSvg';
    this.attr.addObj({
      name: 'FlLineHorizontal1DashDotDashFilledSvg',
      title: 'FlLineHorizontal1DashDotDashFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M10 11.75C10.9665 11.75 11.75 10.9665 11.75 10C11.75 9.0335 10.9665 8.25 10 8.25C9.0335 8.25 8.25 9.0335 8.25 10C8.25 10.9665 9.0335 11.75 10 11.75ZM2.75 9C2.33579 9 2 9.33579 2 9.75C2 10.1642 2.33579 10.5 2.75 10.5H5.25C5.66421 10.5 6 10.1642 6 9.75C6 9.33579 5.66421 9 5.25 9H2.75ZM14.75 9C14.3358 9 14 9.33579 14 9.75C14 10.1642 14.3358 10.5 14.75 10.5H17.25C17.6642 10.5 18 10.1642 18 9.75C18 9.33579 17.6642 9 17.25 9H14.75Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
