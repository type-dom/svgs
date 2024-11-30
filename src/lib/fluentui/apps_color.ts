import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlAppsColorSvg extends TypeSvgSvg {
  className: 'FlAppsColorSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlAppsColorSvg';
    this.attr.addObj({
      name: 'FlAppsColorSvg',
      title: 'FlAppsColorSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3 4.5C3 3.67157 3.67157 3 4.5 3H9C9.82843 3 10.5 3.67157 10.5 4.5V9C10.5 9.55228 10.0523 10 9.5 10H4C3.44772 10 3 9.55228 3 9V4.5Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M15.5 9.5C16.3284 9.5 17 10.1716 17 11V15.5C17 16.3284 16.3284 17 15.5 17H11C10.4477 17 10 16.5523 10 16L10 10.5C10 9.94772 10.4477 9.5 11 9.5L15.5 9.5Z',
    );
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path2.setData(
      'M10.5 16C10.5 16.5523 10.0523 17 9.5 17L4.5 17C3.67157 17 3 16.3284 3 15.5L3 10.5C3 9.94772 3.44772 9.5 4 9.5L9.5 9.5C10.0523 9.5 10.5 9.94772 10.5 10.5L10.5 16Z',
    );
    this.addChild(path2);
    const path3 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path3.setData(
      'M12.9382 2.43934C13.524 1.85355 14.4737 1.85355 15.0595 2.43934L17.5584 4.93819C18.1441 5.52398 18.1441 6.47372 17.5584 7.05951L15.0595 9.55836C14.4737 10.1441 13.524 10.1441 12.9382 9.55836L10.4393 7.05951C9.85355 6.47372 9.85355 5.52398 10.4393 4.93819L12.9382 2.43934Z',
    );
    this.addChild(path3);
    this.useParams(params);
  }
}
