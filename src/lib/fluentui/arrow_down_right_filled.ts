import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlArrowDownRightFilledSvg extends TypeSvgSvg {
  className: 'FlArrowDownRightFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlArrowDownRightFilledSvg';
    this.attr.addObj({
      name: 'FlArrowDownRightFilledSvg',
      title: 'FlArrowDownRightFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M7.99932 16.2499C7.99932 16.6642 8.33513 17 8.74937 17H16.2499C16.6642 17 17 16.6642 17 16.2499V8.74927C17 8.33502 16.6642 7.9992 16.2499 7.9992C15.8357 7.9992 15.4999 8.33502 15.4999 8.74927V14.4391L4.28042 3.21969C3.9875 2.92677 3.5126 2.92677 3.21968 3.21969C2.92677 3.51261 2.92677 3.98753 3.21969 4.28045L14.4391 15.4999H8.74937C8.33513 15.4999 7.99932 15.8357 7.99932 16.2499Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
