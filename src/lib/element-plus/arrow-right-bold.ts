import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElArrowRightBoldSvg extends TypeSvgSvg {
  className: 'ElArrowRightBoldSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'ElArrowRightBoldSvg';
    this.attr.addObj({
      name: 'ElArrowRightBoldSvg',
      title: 'ElArrowRightBoldSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
