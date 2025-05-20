import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdItalic1Svg extends TypeSvgSvg {
  className: 'TdItalic1Svg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'TdItalic1Svg';
    this.attr.addObj({
      name: 'TdItalic1Svg',
      title: 'TdItalic1Svg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M460.8 798.72l153.6-573.44h81.92v-40.96h-204.8v40.96h79.872l-153.6 573.44h-90.112v40.96h204.8v-40.96h-71.68z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
