import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class TdPageMarginSvg extends TypeSvgSvg {
  className: 'TdPageMarginSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'TdPageMarginSvg';
    addAttrObj(this, {
      name: 'TdPageMarginSvg'
    });
    addAttrObj(this, {
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M59.534884 0h904.930232v1000.186047H59.534884z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M59.534884 1000.186047V0h904.930232v1000.186047H59.534884z m857.302325-952.55814h-809.674418v904.930233h809.674418V47.627907z',
    );
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path2.setData(
      'M940.651163 190.511628h-119.069768v619.162791H940.651163a23.813953 23.813953 0 1 1 0 47.627907h-119.069768v119.069767a23.813953 23.813953 0 0 1-47.627907 0V857.302326h-523.906976v119.069767a23.813953 23.813953 0 0 1-47.627907 0V857.302326H83.348837a23.813953 23.813953 0 1 1 0-47.627907h119.069768V190.511628H83.348837a23.813953 23.813953 0 0 1 0-47.627907h119.069768V71.44186a23.813953 23.813953 0 0 1 47.627907 0V142.883721h523.906976V71.44186a23.813953 23.813953 0 0 1 47.627907 0V142.883721H940.651163a23.813953 23.813953 0 0 1 0 47.627907z m-166.697675 0h-523.906976v619.162791h523.906976V190.511628z',
    );
    this.addChild(path2);
  }
}
