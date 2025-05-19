import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElMoreFilledSvg extends TypeSvgSvg {
  className: 'ElMoreFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'ElMoreFilledSvg';
    this.attr.addObj({
      name: 'ElMoreFilledSvg',
      title: 'ElMoreFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
