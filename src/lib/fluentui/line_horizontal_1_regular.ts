import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlLineHorizontal1RegularSvg extends TypeSvgSvg {
  className: 'FlLineHorizontal1RegularSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlLineHorizontal1RegularSvg';
    this.attr.addObj({
      name: 'FlLineHorizontal1RegularSvg',
      title: 'FlLineHorizontal1RegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M2 9.5C2 9.22386 2.22386 9 2.5 9H17.5C17.7761 9 18 9.22386 18 9.5C18 9.77614 17.7761 10 17.5 10H2.5C2.22386 10 2 9.77614 2 9.5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
