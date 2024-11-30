import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlRhombusFilledSvg extends TypeSvgSvg {
  className: 'FlRhombusFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlRhombusFilledSvg';
    this.attr.addObj({
      name: 'FlRhombusFilledSvg',
      title: 'FlRhombusFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M4.88933 4.29611C5.18252 3.51636 5.92832 3 6.76137 3H16.9984C18.3955 3 19.3621 4.39612 18.8704 5.70389L15.1104 15.7039C14.8172 16.4836 14.0714 17 13.2384 17H3.00133C1.60417 17 0.637562 15.6039 1.12929 14.2961L4.88933 4.29611Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
