import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdStaticHLineSvg extends TypeSvgSvg {
  className: 'TdStaticHLineSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'TdStaticHLineSvg';
    this.attr.addObj({
      name: 'TdStaticHLineSvg',
      title: 'TdStaticHLineSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
