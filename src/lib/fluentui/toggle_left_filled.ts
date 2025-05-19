import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlToggleLeftFilledSvg extends TypeSvgSvg {
  className: 'FlToggleLeftFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlToggleLeftFilledSvg';
    this.attr.addObj({
      name: 'FlToggleLeftFilledSvg',
      title: 'FlToggleLeftFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M14 6C16.2091 6 18 7.79086 18 10C18 12.2091 16.2091 14 14 14H6C3.79086 14 2 12.2091 2 10C2 7.79086 3.79086 6 6 6H14ZM6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
