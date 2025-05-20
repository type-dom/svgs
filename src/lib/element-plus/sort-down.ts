import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElSortDownSvg extends TypeSvgSvg {
  className: 'ElSortDownSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'ElSortDownSvg';
    this.attr.addObj({
      name: 'ElSortDownSvg',
      title: 'ElSortDownSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M576 96v709.568L333.312 562.816A32 32 0 1 0 288 608l297.408 297.344A32 32 0 0 0 640 882.688V96a32 32 0 0 0-64 0z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
