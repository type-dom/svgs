import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class ElCheckedSvg extends TypeSvgSvg {
  className: 'ElCheckedSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElCheckedSvg';
    this.addAttrObj({
      name: 'ElCheckedSvg',
      title: 'ElCheckedSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M704 192h160v736H160V192h160.064v64H704v-64zM311.616 537.28l-45.312 45.248L447.36 763.52l316.8-316.8-45.312-45.184L447.36 673.024 311.616 537.28zM384 192V96h256v96H384z',
    );
    this.childNodes.push(path0);
  }
}
