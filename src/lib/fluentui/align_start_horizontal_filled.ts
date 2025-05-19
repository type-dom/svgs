import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlAlignStartHorizontalFilledSvg extends TypeSvgSvg {
  className: 'FlAlignStartHorizontalFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlAlignStartHorizontalFilledSvg';
    this.attr.addObj({
      name: 'FlAlignStartHorizontalFilledSvg',
      title: 'FlAlignStartHorizontalFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3 17.5C3 17.7761 3.22386 18 3.5 18C3.77614 18 4 17.7761 4 17.5V2.5C4 2.22386 3.77614 2 3.5 2C3.22386 2 3 2.22386 3 2.5V17.5Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M8 4C6.89543 4 6 4.89543 6 6V14C6 15.1046 6.89543 16 8 16H10C11.1046 16 12 15.1046 12 14V6C12 4.89543 11.1046 4 10 4H8Z',
    );
    this.addChild(path1);
    this.useParams(params);
  }
}
