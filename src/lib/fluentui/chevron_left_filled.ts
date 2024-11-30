import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlChevronLeftFilledSvg extends TypeSvgSvg {
  className: 'FlChevronLeftFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlChevronLeftFilledSvg';
    this.attr.addObj({
      name: 'FlChevronLeftFilledSvg',
      title: 'FlChevronLeftFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M12.2686 15.794C11.9687 16.0797 11.494 16.0681 11.2083 15.7682L6.20694 10.5178C5.93102 10.2281 5.93102 9.77284 6.20694 9.48318L11.2083 4.23271C11.494 3.93279 11.9687 3.92125 12.2686 4.20694C12.5685 4.49264 12.5801 4.96737 12.2944 5.26729L7.7858 10.0005L12.2944 14.7336C12.5801 15.0336 12.5685 15.5083 12.2686 15.794Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
