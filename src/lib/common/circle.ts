import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdCircleSvg extends TypeSvgSvg {
  className: 'TdCircleSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'TdCircleSvg';
    this.attr.addObj({
      name: 'TdCircleSvg',
      title: 'TdCircleSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M62 512c0 248.528 201.472 450 450 450s450-201.472 450-450c0-248.528-201.472-450-450-450-248.528 0-450 201.472-450 450z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
