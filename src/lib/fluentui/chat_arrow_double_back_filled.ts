import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlChatArrowDoubleBackFilledSvg extends TypeSvgSvg {
  className: 'FlChatArrowDoubleBackFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlChatArrowDoubleBackFilledSvg';
    this.attr.addObj({
      name: 'FlChatArrowDoubleBackFilledSvg',
      title: 'FlChatArrowDoubleBackFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    this.useParams(params);
  }
}
