import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdItalic1Svg extends TypeSvgSvg {
  className: 'TdItalic1Svg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdItalic1Svg';
    this.addAttrObj({
      name: 'TdItalic1Svg',
      title: 'TdItalic1Svg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M460.8 798.72l153.6-573.44h81.92v-40.96h-204.8v40.96h79.872l-153.6 573.44h-90.112v40.96h204.8v-40.96h-71.68z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
