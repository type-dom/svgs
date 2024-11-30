import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlChevronUpRegularSvg extends TypeSvgSvg {
  className: 'FlChevronUpRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlChevronUpRegularSvg';
    this.attr.addObj({
      name: 'FlChevronUpRegularSvg',
      title: 'FlChevronUpRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M4.14708 12.3534C3.95147 12.1585 3.9509 11.8419 4.14582 11.6463L9.6108 6.16178C9.82574 5.94607 10.1751 5.94607 10.39 6.16178L15.855 11.6463C16.0499 11.8419 16.0493 12.1585 15.8537 12.3534C15.6581 12.5483 15.3415 12.5477 15.1466 12.3521L10.0004 7.18753L4.85418 12.3521C4.65927 12.5477 4.34269 12.5483 4.14708 12.3534Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
