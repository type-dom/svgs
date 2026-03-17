import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlTriangleUpFilledSvg extends TypeSvgSvg {
  className: 'FlTriangleUpFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlTriangleUpFilledSvg';
   addAttrObj(this, {
      name: 'FlTriangleUpFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M11.3195 2.78548C10.7522 1.73807 9.24903 1.73807 8.68166 2.78548L2.1822 14.7841C1.64081 15.7835 2.36446 16.9985 3.50113 16.9985H16.5C17.6367 16.9985 18.3604 15.7835 17.819 14.7841L11.3195 2.78548Z',
    );
    this.addChild(path0);
  }
}
