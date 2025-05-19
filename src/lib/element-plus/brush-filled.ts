import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElBrushFilledSvg extends TypeSvgSvg {
  className: 'ElBrushFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'ElBrushFilledSvg';
    this.attr.addObj({
      name: 'ElBrushFilledSvg',
      title: 'ElBrushFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M608 704v160a96 96 0 0 1-192 0V704h-96a128 128 0 0 1-128-128h640a128 128 0 0 1-128 128h-96zM192 512V128.064h640V512H192z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
