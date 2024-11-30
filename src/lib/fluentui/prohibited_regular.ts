import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlProhibitedRegularSvg extends TypeSvgSvg {
  className: 'FlProhibitedRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlProhibitedRegularSvg';
    this.attr.addObj({
      name: 'FlProhibitedRegularSvg',
      title: 'FlProhibitedRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM17 10C17 8.24696 16.3556 6.64442 15.2907 5.41636L5.41636 15.2907C6.64442 16.3556 8.24696 17 10 17C13.866 17 17 13.866 17 10ZM4.70925 14.5836L14.5836 4.70925C13.3556 3.6444 11.753 3 10 3C6.13401 3 3 6.13401 3 10C3 11.753 3.6444 13.3556 4.70925 14.5836Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
