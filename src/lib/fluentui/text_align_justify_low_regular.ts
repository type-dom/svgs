import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlTextAlignJustifyLowRegularSvg extends TypeSvgSvg {
  className: 'FlTextAlignJustifyLowRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlTextAlignJustifyLowRegularSvg';
    this.attr.addObj({
      name: 'FlTextAlignJustifyLowRegularSvg',
      title: 'FlTextAlignJustifyLowRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M9 4.5C9 4.22386 9.22386 4 9.5 4H17.5C17.7761 4 18 4.22386 18 4.5C18 4.77614 17.7761 5 17.5 5H9.5C9.22386 5 9 4.77614 9 4.5ZM9 9.5C9 9.22386 9.22386 9 9.5 9H17.5C17.7761 9 18 9.22386 18 9.5C18 9.77614 17.7761 10 17.5 10H9.5C9.22386 10 9 9.77614 9 9.5ZM2.5 14C2.22386 14 2 14.2239 2 14.5C2 14.7761 2.22386 15 2.5 15H17.5C17.7761 15 18 14.7761 18 14.5C18 14.2239 17.7761 14 17.5 14H2.5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
