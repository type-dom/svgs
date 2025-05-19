import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlAlignLeftFilledSvg extends TypeSvgSvg {
  className: 'FlAlignLeftFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlAlignLeftFilledSvg';
    this.attr.addObj({
      name: 'FlAlignLeftFilledSvg',
      title: 'FlAlignLeftFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3.5 2C3.22386 2 3 2.22386 3 2.5V17.5C3 17.7761 3.22386 18 3.5 18C3.77614 18 4 17.7761 4 17.5V2.5C4 2.22386 3.77614 2 3.5 2ZM7 11C5.89543 11 5 11.8954 5 13L5 14C5 15.1046 5.89543 16 7 16H12C13.1046 16 14 15.1046 14 14V13C14 11.8954 13.1046 11 12 11H7ZM5 6C5 4.89543 5.89543 4 7 4L15 4C16.1046 4 17 4.89543 17 6V7C17 8.10457 16.1046 9 15 9L7 9C5.89543 9 5 8.10457 5 7L5 6Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
