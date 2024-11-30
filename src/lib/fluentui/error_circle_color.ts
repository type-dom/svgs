import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlErrorCircleColorSvg extends TypeSvgSvg {
  className: 'FlErrorCircleColorSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlErrorCircleColorSvg';
    this.attr.addObj({
      name: 'FlErrorCircleColorSvg',
      title: 'FlErrorCircleColorSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M10.5 6.5C10.5 6.22386 10.2761 6 10 6C9.72386 6 9.5 6.22386 9.5 6.5V11C9.5 11.2761 9.72386 11.5 10 11.5C10.2761 11.5 10.5 11.2761 10.5 11V6.5ZM10 14C10.4142 14 10.75 13.6642 10.75 13.25C10.75 12.8358 10.4142 12.5 10 12.5C9.58579 12.5 9.25 12.8358 9.25 13.25C9.25 13.6642 9.58579 14 10 14Z',
    );
    this.addChild(path1);
    this.useParams(params);
  }
}
