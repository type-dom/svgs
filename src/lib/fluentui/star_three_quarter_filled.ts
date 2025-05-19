import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlStarThreeQuarterFilledSvg extends TypeSvgSvg {
  className: 'FlStarThreeQuarterFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlStarThreeQuarterFilledSvg';
    this.attr.addObj({
      name: 'FlStarThreeQuarterFilledSvg',
      title: 'FlStarThreeQuarterFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M12 5.13253L10.8978 2.89923C10.531 2.15599 9.47114 2.15598 9.10433 2.89923L7.17389 6.81073L2.8573 7.43797C2.03708 7.55715 1.70956 8.56512 2.30308 9.14366L5.4266 12.1883L4.68924 16.4875C4.54913 17.3044 5.40655 17.9274 6.14018 17.5417L10.0011 15.5119L12 16.5628V5.13253Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
