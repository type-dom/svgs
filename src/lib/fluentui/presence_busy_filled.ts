import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlPresenceBusyFilledSvg extends TypeSvgSvg {
  className: 'FlPresenceBusyFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlPresenceBusyFilledSvg';
    this.attr.addObj({
      name: 'FlPresenceBusyFilledSvg',
      title: 'FlPresenceBusyFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
