import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlCone16FilledSvg extends TypeSvgSvg {
  className: 'FlCone16FilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlCone16FilledSvg';
    this.attr.addObj({
      name: 'FlCone16FilledSvg',
      title: 'FlCone16FilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 16 16',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M8.00001 14.9999C5.77101 14.9999 2.00001 14.5789 2.00001 12.9999C1.99973 12.9604 2.00443 12.9211 2.01401 12.8829L2.06101 12.6829C2.06947 12.6484 2.08153 12.6148 2.09701 12.5829L7.55001 1.28286C7.5957 1.20397 7.66132 1.13847 7.7403 1.09294C7.81928 1.04741 7.90885 1.02344 8.00001 1.02344C8.09118 1.02344 8.18074 1.04741 8.25972 1.09294C8.3387 1.13847 8.40433 1.20397 8.45001 1.28286L13.903 12.5829C13.9185 12.6148 13.9306 12.6484 13.939 12.6829L13.986 12.8829C13.9956 12.9211 14.0003 12.9604 14 12.9999C14 14.5789 10.229 14.9999 8.00001 14.9999Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
