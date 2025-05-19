import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlColorLineAccentRegularSvg extends TypeSvgSvg {
  className: 'FlColorLineAccentRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlColorLineAccentRegularSvg';
    this.attr.addObj({
      name: 'FlColorLineAccentRegularSvg',
      title: 'FlColorLineAccentRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M4.09464 13C4.34056 13.6844 5.07294 14.1477 5.8667 13.9521L8.97882 13.1853L9.18815 13.1214L9.21386 13.112C9.30244 13.0795 9.389 13.0421 9.47313 13H16C16.5523 13 17 13.4477 17 14V16C17 16.5523 16.5523 17 16 17H4C3.44772 17 3 16.5523 3 16V14C3 13.4477 3.44772 13 4 13H4.09464Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
