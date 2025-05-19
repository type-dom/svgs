import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlLineHorizontal1FilledSvg extends TypeSvgSvg {
  className: 'FlLineHorizontal1FilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlLineHorizontal1FilledSvg';
    this.attr.addObj({
      name: 'FlLineHorizontal1FilledSvg',
      title: 'FlLineHorizontal1FilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M2 9.75C2 9.33579 2.33579 9 2.75 9H17.25C17.6642 9 18 9.33579 18 9.75C18 10.1642 17.6642 10.5 17.25 10.5H2.75C2.33579 10.5 2 10.1642 2 9.75Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
