import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlChatArrowDoubleBackFilledSvg extends TypeSvgSvg {
  className: 'FlChatArrowDoubleBackFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlChatArrowDoubleBackFilledSvg';
   addAttrObj(this, {
      name: 'FlChatArrowDoubleBackFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
  }
}
