import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlAlignEndVerticalFilledSvg extends TypeSvgSvg {
  className: 'FlAlignEndVerticalFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlAlignEndVerticalFilledSvg';
    this.attr.addObj({
      name: 'FlAlignEndVerticalFilledSvg',
      title: 'FlAlignEndVerticalFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M4 10C4 8.89543 4.89543 8 6 8H14C15.1046 8 16 8.89543 16 10V12C16 13.1046 15.1046 14 14 14H6C4.89543 14 4 13.1046 4 12V10Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M2 16.5C2 16.2239 2.22386 16 2.5 16H17.5C17.7761 16 18 16.2239 18 16.5C18 16.7761 17.7761 17 17.5 17H2.5C2.22386 17 2 16.7761 2 16.5Z',
    );
    this.addChild(path1);
    this.useParams(params);
  }
}
