import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElFolderSvg extends TypeSvgSvg {
  className: 'ElFolderSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'ElFolderSvg';
    this.attr.addObj({
      name: 'ElFolderSvg',
      title: 'ElFolderSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
