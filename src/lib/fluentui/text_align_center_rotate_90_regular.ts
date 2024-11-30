import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlTextAlignCenterRotate90RegularSvg extends TypeSvgSvg {
  className: 'FlTextAlignCenterRotate90RegularSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlTextAlignCenterRotate90RegularSvg';
    this.attr.addObj({
      name: 'FlTextAlignCenterRotate90RegularSvg',
      title: 'FlTextAlignCenterRotate90RegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M15.5 4C15.7761 4 16 4.22386 16 4.5V15.5C16 15.7761 15.7761 16 15.5 16C15.2239 16 15 15.7761 15 15.5V4.5C15 4.22386 15.2239 4 15.5 4ZM10.5 2C10.7761 2 11 2.22386 11 2.5V17.5C11 17.7761 10.7761 18 10.5 18C10.2239 18 10 17.7761 10 17.5V2.5C10 2.22386 10.2239 2 10.5 2ZM6 6.5C6 6.22386 5.77614 6 5.5 6C5.22386 6 5 6.22386 5 6.5V13.5C5 13.7761 5.22386 14 5.5 14C5.77614 14 6 13.7761 6 13.5V6.5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
