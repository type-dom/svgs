import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlTextAlignLeftRotate270RegularSvg extends TypeSvgSvg {
  className: 'FlTextAlignLeftRotate270RegularSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlTextAlignLeftRotate270RegularSvg';
    this.attr.addObj({
      name: 'FlTextAlignLeftRotate270RegularSvg',
      title: 'FlTextAlignLeftRotate270RegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M4.5 18C4.22386 18 4 17.7761 4 17.5V6.5C4 6.22386 4.22386 6 4.5 6C4.77614 6 5 6.22386 5 6.5V17.5C5 17.7761 4.77614 18 4.5 18ZM9.5 18C9.22386 18 9 17.7761 9 17.5V2.5C9 2.22386 9.22386 2 9.5 2C9.77614 2 10 2.22386 10 2.5V17.5C10 17.7761 9.77614 18 9.5 18ZM14 17.5C14 17.7761 14.2239 18 14.5 18C14.7761 18 15 17.7761 15 17.5V8.5C15 8.22386 14.7761 8 14.5 8C14.2239 8 14 8.22386 14 8.5V17.5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
