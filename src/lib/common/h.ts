import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdHSvg extends TypeSvgSvg {
  className: 'TdHSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'TdHSvg';
    this.attr.addObj({
      name: 'TdHSvg',
      title: 'TdHSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 16 16',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3 14v-3a4 4 0 0 1 4-4h3V6H7a5 5 0 0 0-5 5v3h1zm7.016-11.282v7.543l4.29-3.73z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
