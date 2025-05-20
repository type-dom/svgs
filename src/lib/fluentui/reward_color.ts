import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlRewardColorSvg extends TypeSvgSvg {
  className: 'FlRewardColorSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlRewardColorSvg';
    this.attr.addObj({
      name: 'FlRewardColorSvg',
      title: 'FlRewardColorSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M12.3671 9.80431L15.663 8.12071C16.4993 7.69347 17.0257 6.83353 17.0257 5.89435V4.5C17.0257 3.67157 16.3541 3 15.5257 3H12.3889L12 6.5L12.3671 9.80431Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M7.61068 3.00049H4.5C3.67157 3.00049 3 3.67206 3 4.50049V5.89484L3.00695 6.08152C3.07156 6.94675 3.58213 7.72244 4.36274 8.1212L7.63372 9.7921L7.99951 6.5L7.61068 3.00049Z',
    );
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path2.setData(
      'M7.5 9.72355V3.00049H12.5V9.73718L11.4748 10.2609L10 11L7.5 9.72355Z',
    );
    this.addChild(path2);
    const path3 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path3.setData(
      'M6.5 13.5C6.5 11.567 8.067 10 10 10C11.933 10 13.5 11.567 13.5 13.5C13.5 15.433 11.933 17 10 17C8.067 17 6.5 15.433 6.5 13.5Z',
    );
    this.addChild(path3);
    this.useParams(params);
  }
}
