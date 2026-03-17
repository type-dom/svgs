import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class TdTableSvg extends TypeSvgSvg {
  className: 'TdTableSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'TdTableSvg';
    addAttrObj(this, {
      name: 'TdTableSvg'
    });
    addAttrObj(this, {
      viewBox: '0 0 128 128',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M.006.064h127.988v31.104H.006V.064zm0 38.016h38.396v41.472H.006V38.08zm0 48.384h38.396v41.472H.006V86.464zM44.802 38.08h38.396v41.472H44.802V38.08zm0 48.384h38.396v41.472H44.802V86.464zM89.598 38.08h38.396v41.472H89.598zm0 48.384h38.396v41.472H89.598z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M.006.064h127.988v31.104H.006V.064zm0 38.016h38.396v41.472H.006V38.08zm0 48.384h38.396v41.472H.006V86.464zM44.802 38.08h38.396v41.472H44.802V38.08zm0 48.384h38.396v41.472H44.802V86.464zM89.598 38.08h38.396v41.472H89.598zm0 48.384h38.396v41.472H89.598z',
    );
    this.addChild(path1);
  }
}
