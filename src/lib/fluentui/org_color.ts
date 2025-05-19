import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlOrgColorSvg extends TypeSvgSvg {
  className: 'FlOrgColorSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlOrgColorSvg';
    this.attr.addObj({
      name: 'FlOrgColorSvg',
      title: 'FlOrgColorSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M9.25 9.25H6.75C5.7835 9.25 5 10.0335 5 11V13.5H6.5V11C6.5 10.8619 6.61193 10.75 6.75 10.75H13.25C13.3881 10.75 13.5 10.8619 13.5 11V13.5H15V11C15 10.0335 14.2165 9.25 13.25 9.25H10.75V7H9.25V9.25Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M9.25 9.25H6.75C5.7835 9.25 5 10.0335 5 11V13.5H6.5V11C6.5 10.8619 6.61193 10.75 6.75 10.75H13.25C13.3881 10.75 13.5 10.8619 13.5 11V13.5H15V11C15 10.0335 14.2165 9.25 13.25 9.25H10.75V7H9.25V9.25Z',
    );
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path2.setData(
      'M9.25 9.25H6.75C5.7835 9.25 5 10.0335 5 11V13.5H6.5V11C6.5 10.8619 6.61193 10.75 6.75 10.75H13.25C13.3881 10.75 13.5 10.8619 13.5 11V13.5H15V11C15 10.0335 14.2165 9.25 13.25 9.25H10.75V7H9.25V9.25Z',
    );
    this.addChild(path2);
    const path3 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path3.setData(
      'M9.25 9.25H6.75C5.7835 9.25 5 10.0335 5 11V13.5H6.5V11C6.5 10.8619 6.61193 10.75 6.75 10.75H13.25C13.3881 10.75 13.5 10.8619 13.5 11V13.5H15V11C15 10.0335 14.2165 9.25 13.25 9.25H10.75V7H9.25V9.25Z',
    );
    this.addChild(path3);
    const path4 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path4.setData(
      'M8.75 15C8.75 16.6569 7.40685 18 5.75 18C4.09315 18 2.75 16.6569 2.75 15C2.75 13.3431 4.09315 12 5.75 12C7.40685 12 8.75 13.3431 8.75 15Z',
    );
    this.addChild(path4);
    const path5 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path5.setData(
      'M17.25 15C17.25 16.6569 15.9069 18 14.25 18C12.5931 18 11.25 16.6569 11.25 15C11.25 13.3431 12.5931 12 14.25 12C15.9069 12 17.25 13.3431 17.25 15Z',
    );
    this.addChild(path5);
    const path6 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path6.setData(
      'M13 5C13 6.65685 11.6569 8 10 8C8.34315 8 7 6.65685 7 5C7 3.34315 8.34315 2 10 2C11.6569 2 13 3.34315 13 5Z',
    );
    this.addChild(path6);
    this.useParams(params);
  }
}
