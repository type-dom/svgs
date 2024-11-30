import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlChevronRightFilledSvg extends TypeSvgSvg {
  className: 'FlChevronRightFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlChevronRightFilledSvg';
    this.attr.addObj({
      name: 'FlChevronRightFilledSvg',
      title: 'FlChevronRightFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M7.73271 4.20694C8.03263 3.92125 8.50737 3.93279 8.79306 4.23271L13.7944 9.48318C14.0703 9.77285 14.0703 10.2281 13.7944 10.5178L8.79306 15.7682C8.50737 16.0681 8.03263 16.0797 7.73271 15.794C7.43279 15.5083 7.42125 15.0336 7.70694 14.7336L12.2155 10.0005L7.70694 5.26729C7.42125 4.96737 7.43279 4.49264 7.73271 4.20694Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
