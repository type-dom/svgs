import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class ElBriefcaseSvg extends TypeSvgSvg {
  className: 'ElBriefcaseSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElBriefcaseSvg';
    this.addAttrObj({
      name: 'ElBriefcaseSvg',
      title: 'ElBriefcaseSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M320 320V128h384v192h192v192H128V320h192zM128 576h768v320H128V576zm256-256h256.064V192H384v128z',
    );
    this.childNodes.push(path0);
  }
}
