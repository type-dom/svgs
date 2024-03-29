import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdIdentifierSvg extends TypeSvgSvg {
  className: 'TdIdentifierSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdIdentifierSvg';
    this.addAttrObj({
      name: 'TdIdentifierSvg',
      title: 'TdIdentifierSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M214.557757 968.649602c-32.984463 0-59.724808-26.740345-59.724808-59.724808V132.396458c0-32.984463 26.740345-59.724808 59.724808-59.724807h594.849209c32.984463 0 59.724808 26.740345 59.724808 59.724807v776.528336c0 32.984463-26.740345 59.724808-59.724808 59.724808l-283.736935-165.098701-311.112274 165.098701z m298.059599-373.306508l146.930789 74.682468-22.401213-170.990043 113.029111-124.600131-160.618459-30.76198-77.363558-151.869639-77.363558 151.869639-161.218176 30.76198 113.029111 124.600131-22.401213 170.990043 147.530506-74.682468h0.84666z m0 0',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
