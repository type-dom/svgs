import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlAlignEndHorizontalFilledSvg extends TypeSvgSvg {
  className: 'FlAlignEndHorizontalFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlAlignEndHorizontalFilledSvg';
    this.attr.addObj({
      name: 'FlAlignEndHorizontalFilledSvg',
      title: 'FlAlignEndHorizontalFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M16 17.5C16 17.7761 16.2239 18 16.5 18C16.7761 18 17 17.7761 17 17.5V2.5C17 2.22386 16.7761 2 16.5 2C16.2239 2 16 2.22386 16 2.5V17.5Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M10 4C8.89543 4 8 4.89543 8 6V14C8 15.1046 8.89543 16 10 16H12C13.1046 16 14 15.1046 14 14V6C14 4.89543 13.1046 4 12 4H10Z',
    );
    this.addChild(path1);
    this.useParams(params);
  }
}
