import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlWifi4RegularSvg extends TypeSvgSvg {
  className: 'FlWifi4RegularSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlWifi4RegularSvg';
    this.attr.addObj({
      name: 'FlWifi4RegularSvg',
      title: 'FlWifi4RegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M10.9631 13.7865C11.4702 14.2936 11.4702 15.1157 10.9631 15.6228C10.4561 16.1299 9.63395 16.1299 9.12688 15.6228C8.61982 15.1157 8.61982 14.2936 9.12688 13.7865C9.63395 13.2795 10.4561 13.2795 10.9631 13.7865Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
