import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlStreamInputFilledSvg extends TypeSvgSvg {
  className: 'FlStreamInputFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlStreamInputFilledSvg';
   addAttrObj(this, {
      name: 'FlStreamInputFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
  }
}
