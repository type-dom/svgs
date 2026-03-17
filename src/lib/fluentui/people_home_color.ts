import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlPeopleHomeColorSvg extends TypeSvgSvg {
  className: 'FlPeopleHomeColorSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlPeopleHomeColorSvg';
   addAttrObj(this, {
      name: 'FlPeopleHomeColorSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
  }
}
