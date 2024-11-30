import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdRectangleSvg extends TypeSvgSvg {
  className: 'TdRectangleSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'TdRectangleSvg';
    this.attr.addObj({
      name: 'TdRectangleSvg',
      title: 'TdRectangleSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M920 789H104c0-22.1-17.9-40-40-40V275c22.1 0 40-17.9 40-40h816c0 22.1 17.9 40 40 40v474c-22.1 0-40 17.9-40 40z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
