import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlChatArrowDoubleBackRegularSvg extends TypeSvgSvg {
  className: 'FlChatArrowDoubleBackRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlChatArrowDoubleBackRegularSvg';
   addAttrObj(this, {
      name: 'FlChatArrowDoubleBackRegularSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
  }
}
