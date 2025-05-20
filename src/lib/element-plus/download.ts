import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElDownloadSvg extends TypeSvgSvg {
  className: 'ElDownloadSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'ElDownloadSvg';
    this.attr.addObj({
      name: 'ElDownloadSvg',
      title: 'ElDownloadSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64v450.304z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
