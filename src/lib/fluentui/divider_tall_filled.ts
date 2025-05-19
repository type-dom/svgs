import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlDividerTallFilledSvg extends TypeSvgSvg {
  className: 'FlDividerTallFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlDividerTallFilledSvg';
    this.attr.addObj({
      name: 'FlDividerTallFilledSvg',
      title: 'FlDividerTallFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M9.75 1C10.1642 1 10.5 1.33579 10.5 1.75V18.25C10.5 18.6642 10.1642 19 9.75 19C9.33579 19 9 18.6642 9 18.25V1.75C9 1.33579 9.33579 1 9.75 1Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
