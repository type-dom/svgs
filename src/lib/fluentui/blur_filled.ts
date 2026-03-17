import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlBlurFilledSvg extends TypeSvgSvg {
  className: 'FlBlurFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlBlurFilledSvg';
   addAttrObj(this, {
      name: 'FlBlurFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C12.0289 18 13.8814 17.2447 15.2916 16H10V15H16.2454C16.4977 14.6853 16.7267 14.3511 16.9297 14H10V13H17.4185C17.5494 12.6766 17.6597 12.3428 17.748 12H10V11H17.9381C17.979 10.6724 18 10.3387 18 10H10V9H17.9381C17.8957 8.65956 17.8318 8.32577 17.748 8H10V7H17.4185C17.2784 6.65398 17.1148 6.31998 16.9297 6H10V5H16.2454C15.9567 4.63985 15.6375 4.30521 15.2916 4H10V3H13.876C12.7278 2.36284 11.4063 2 10 2Z',
    );
    this.addChild(path0);
  }
}
