import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlIosArrow24RegularSvg extends TypeSvgSvg {
  className: 'FlIosArrow24RegularSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlIosArrow24RegularSvg';
    this.attr.addObj({
      name: 'FlIosArrow24RegularSvg',
      title: 'FlIosArrow24RegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 24 24',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M4.29642 12L12.7875 3.27302C13.0764 2.97614 13.0699 2.50131 12.773 2.21246C12.4761 1.9236 12.0013 1.93011 11.7125 2.22698L2.71246 11.477C2.42918 11.7681 2.42918 12.2319 2.71246 12.523L11.7125 21.773C12.0013 22.0699 12.4761 22.0764 12.773 21.7875C13.0699 21.4987 13.0764 21.0239 12.7875 20.727L4.29642 12Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
