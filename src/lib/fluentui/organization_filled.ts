import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlOrganizationFilledSvg extends TypeSvgSvg {
  className: 'FlOrganizationFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlOrganizationFilledSvg';
    this.attr.addObj({
      name: 'FlOrganizationFilledSvg',
      title: 'FlOrganizationFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M6.99927 5.00066C6.99927 3.34344 8.34271 2 9.99992 2C11.6571 2 13.0006 3.34344 13.0006 5.00066C13.0006 6.48749 11.9192 7.72176 10.5 7.95983V9.5H13.5C14.3284 9.5 15 10.1716 15 11V12.0414C16.4195 12.2791 17.5013 13.5136 17.5013 15.0007C17.5013 16.6579 16.1579 18.0013 14.5007 18.0013C12.8434 18.0013 11.5 16.6579 11.5 15.0007C11.5 13.514 12.5811 12.2799 14 12.0416V11C14 10.7239 13.7761 10.5 13.5 10.5H6.5C6.22386 10.5 6 10.7239 6 11V12.0414C7.41954 12.2791 8.50131 13.5136 8.50131 15.0007C8.50131 16.6579 7.15787 18.0013 5.50066 18.0013C3.84344 18.0013 2.5 16.6579 2.5 15.0007C2.5 13.514 3.5811 12.2799 5 12.0416V11C5 10.1716 5.67157 9.5 6.5 9.5H9.49999V7.95985C8.08073 7.72183 6.99927 6.48754 6.99927 5.00066Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
