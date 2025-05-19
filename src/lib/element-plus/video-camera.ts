import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElVideoCameraSvg extends TypeSvgSvg {
  className: 'ElVideoCameraSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'ElVideoCameraSvg';
    this.attr.addObj({
      name: 'ElVideoCameraSvg',
      title: 'ElVideoCameraSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M704 768V256H128v512h576zm64-416 192-96v512l-192-96v128a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 71.552v176.896l128 64V359.552l-128 64zM192 320h192v64H192v-64z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
