import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElBriefcaseSvg extends TypeSvgSvg {
  className: 'ElBriefcaseSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'ElBriefcaseSvg';
    this.attr.addObj({
      name: 'ElBriefcaseSvg',
      title: 'ElBriefcaseSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M320 320V128h384v192h192v192H128V320h192zM128 576h768v320H128V576zm256-256h256.064V192H384v128z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
