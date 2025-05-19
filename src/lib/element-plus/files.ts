import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElFilesSvg extends TypeSvgSvg {
  className: 'ElFilesSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'ElFilesSvg';
    this.attr.addObj({
      name: 'ElFilesSvg',
      title: 'ElFilesSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M128 384v448h768V384H128zm-32-64h832a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32zm64-128h704v64H160zm96-128h512v64H256z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
