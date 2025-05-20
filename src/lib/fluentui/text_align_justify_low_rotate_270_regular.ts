import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlTextAlignJustifyLowRotate270RegularSvg extends TypeSvgSvg {
  className: 'FlTextAlignJustifyLowRotate270RegularSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlTextAlignJustifyLowRotate270RegularSvg';
    this.attr.addObj({
      name: 'FlTextAlignJustifyLowRotate270RegularSvg',
      title: 'FlTextAlignJustifyLowRotate270RegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M4.5 11C4.22386 11 4 10.7761 4 10.5V2.5C4 2.22386 4.22386 2 4.5 2C4.77614 2 5 2.22386 5 2.5V10.5C5 10.7761 4.77614 11 4.5 11ZM9.5 11C9.22386 11 9 10.7761 9 10.5V2.5C9 2.22386 9.22386 2 9.5 2C9.77614 2 10 2.22386 10 2.5V10.5C10 10.7761 9.77614 11 9.5 11ZM14 17.5C14 17.7761 14.2239 18 14.5 18C14.7761 18 15 17.7761 15 17.5V2.5C15 2.22386 14.7761 2 14.5 2C14.2239 2 14 2.22386 14 2.5V17.5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
