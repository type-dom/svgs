import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElCirclePlusFilledSvg extends TypeSvgSvg {
  className: 'ElCirclePlusFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'ElCirclePlusFilledSvg';
    this.attr.addObj({
      name: 'ElCirclePlusFilledSvg',
      title: 'ElCirclePlusFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-38.4 409.6H326.4a38.4 38.4 0 1 0 0 76.8h147.2v147.2a38.4 38.4 0 0 0 76.8 0V550.4h147.2a38.4 38.4 0 0 0 0-76.8H550.4V326.4a38.4 38.4 0 1 0-76.8 0v147.2z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
