import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdTextIndentSvg extends TypeSvgSvg {
  className: 'TdTextIndentSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdTextIndentSvg';
    this.addAttrObj({
      name: 'TdTextIndentSvg',
      title: 'TdTextIndentSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1097 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M915.968 458.532571v-87.04l145.700571 164.864-145.700571 164.790858V604.818286H695.954286v-146.285715h220.013714zM36.790857 153.746286v-109.714286h1021.074286v109.714286H36.864z m-1.462857 314.221714v-109.714286h588.507429v109.714286H35.254857z m2.633143 213.430857v-109.714286h584.557714v109.714286H38.034286z m1.828571 310.710857v-109.714285H1062.765714v109.714285H39.789714z',
    );
    this.childNodes.push(path0);
  }
}
