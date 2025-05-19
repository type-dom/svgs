import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlCircleLineRegularSvg extends TypeSvgSvg {
  className: 'FlCircleLineRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlCircleLineRegularSvg';
    this.attr.addObj({
      name: 'FlCircleLineRegularSvg',
      title: 'FlCircleLineRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3.01758 9.5H16.9824C16.726 5.86736 13.6979 3 10 3C6.30212 3 3.27396 5.86736 3.01758 9.5ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10ZM16.9824 10.5H3.01758C3.27396 14.1326 6.30212 17 10 17C13.6979 17 16.726 14.1326 16.9824 10.5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
