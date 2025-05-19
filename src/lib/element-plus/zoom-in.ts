import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElZoomInSvg extends TypeSvgSvg {
  className: 'ElZoomInSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'ElZoomInSvg';
    this.attr.addObj({
      name: 'ElZoomInSvg',
      title: 'ElZoomInSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'm795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zm-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
