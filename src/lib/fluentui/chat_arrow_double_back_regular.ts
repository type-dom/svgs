import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlChatArrowDoubleBackRegularSvg extends TypeSvgSvg {
  className: 'FlChatArrowDoubleBackRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlChatArrowDoubleBackRegularSvg';
    this.attr.addObj({
      name: 'FlChatArrowDoubleBackRegularSvg',
      title: 'FlChatArrowDoubleBackRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    this.useParams(params);
  }
}
