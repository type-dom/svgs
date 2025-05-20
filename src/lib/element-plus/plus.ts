import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElPlusSvg extends TypeSvgSvg {
  className: 'ElPlusSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'ElPlusSvg';
    this.attr.addObj({
      name: 'ElPlusSvg',
      title: 'ElPlusSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
