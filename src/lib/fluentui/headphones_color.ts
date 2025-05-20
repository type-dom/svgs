import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlHeadphonesColorSvg extends TypeSvgSvg {
  className: 'FlHeadphonesColorSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlHeadphonesColorSvg';
    this.attr.addObj({
      name: 'FlHeadphonesColorSvg',
      title: 'FlHeadphonesColorSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3 13L2 12V10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10V12L17 13L16 12V10C16 6.68629 13.3137 4 10 4C6.68629 4 4 6.68629 4 10V12L3 13Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M4.5 11H2V16C2 17.1046 2.89543 18 4 18H5V11.5C5 11.2239 4.77614 11 4.5 11Z',
    );
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path2.setData(
      'M17.5 11H15V18H16C17.1046 18 18 17.1046 18 16V11.5C18 11.2239 17.7761 11 17.5 11Z',
    );
    this.addChild(path2);
    const path3 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path3.setData(
      'M7 11H4V18H7C7.55228 18 8 17.5523 8 17V12C8 11.4477 7.55228 11 7 11Z',
    );
    this.addChild(path3);
    const path4 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path4.setData(
      'M13 11H16V18H13C12.4477 18 12 17.5523 12 17V12C12 11.4477 12.4477 11 13 11Z',
    );
    this.addChild(path4);
    this.useParams(params);
  }
}
