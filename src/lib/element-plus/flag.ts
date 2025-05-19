import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElFlagSvg extends TypeSvgSvg {
  className: 'ElFlagSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'ElFlagSvg';
    this.attr.addObj({
      name: 'ElFlagSvg',
      title: 'ElFlagSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M288 128h608L736 384l160 256H288v320h-96V64h96v64z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
