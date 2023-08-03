import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElFolderDeleteSvg extends TypeSvgSvg {
  className: 'ElFolderDeleteSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElFolderDeleteSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm370.752 448-90.496-90.496 45.248-45.248L512 530.752l90.496-90.496 45.248 45.248L557.248 576l90.496 90.496-45.248 45.248L512 621.248l-90.496 90.496-45.248-45.248L466.752 576z',
    );
    this.childNodes.push(path0);
  }
}
