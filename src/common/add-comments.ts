import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdAddCommentsSvg extends TypeSvgSvg {
  className: 'TdAddCommentsSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdAddCommentsSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M949.570847 212.673727l-41.801035 41.517579L768.565377 115.843378l41.801035-41.459251c15.340383-15.283078 39.522132-16.084327 53.892421-1.768273l87.024006 86.454024C965.710432 173.382862 964.91123 197.393719 949.570847 212.673727L949.570847 212.673727zM580.373227 579.594491 441.169815 441.244516l306.238706-304.299541 139.205459 138.348951L580.373227 579.594491 580.373227 579.594491zM560.984644 598.869486l-194.863083 55.314817 55.659671-193.666838L560.984644 598.869486 560.984644 598.869486zM236.551554 178.118724c-48.13223 0-87.081311 38.949081-87.081311 87.024006l0 522.372232c0 48.062646 38.962384 87.026052 87.026052 87.026052l522.485819 0c48.063669 0 87.028099-38.963407 87.028099-87.028099L846.010213 439.248046l87.079264-87.028099 0 464.321094c0 80.124875-64.954361 145.078213-145.078213 145.078213L207.468169 961.619254c-80.124875 0-145.078213-64.954361-145.078213-145.078213L62.389956 236.114602c0-80.124875 64.954361-145.078213 145.078213-145.078213l464.435705 0-87.083357 87.083357L236.551554 178.119747 236.551554 178.118724z',
    );
    this.childNodes.push(path0);
  }
}
