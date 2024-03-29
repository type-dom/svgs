import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdStaticSLLabelSvg extends TypeSvgSvg {
  className: 'TdStaticSLLabelSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdStaticSLLabelSvg';
    this.addAttrObj({
      name: 'TdStaticSLLabelSvg',
      title: 'TdStaticSLLabelSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M443.230627 956.230872V120.862886H76.773288A60.431443 60.431443 0 0 1 16.341845 60.431443 60.431443 60.431443 0 0 1 76.773288 0h870.452907a60.431443 60.431443 0 0 1 60.431444 60.431443 60.431443 60.431443 0 0 1-60.431444 60.431443h-368.191574v835.367986a67.768594 67.768594 0 0 1-67.768594 67.768594 67.768594 67.768594 0 0 1-68.0354-67.768594z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
