import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlWindowColumnOneFourthLeftFilledSvg extends TypeSvgSvg {
  className: 'FlWindowColumnOneFourthLeftFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlWindowColumnOneFourthLeftFilledSvg';
   addAttrObj(this, {
      name: 'FlWindowColumnOneFourthLeftFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M5.5 3C4.11929 3 3 4.11929 3 5.5V6H17V5.5C17 4.11929 15.8807 3 14.5 3H5.5ZM17 7H7V17H14.5C15.8807 17 17 15.8807 17 14.5V7ZM6 17V7H3V14.5C3 15.8807 4.11929 17 5.5 17H6Z',
    );
    this.addChild(path0);
  }
}
