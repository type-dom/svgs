import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElCaretBottomSvg extends TypeSvgSvg {
  className: 'ElCaretBottomSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'ElCaretBottomSvg';
    this.attr.addObj({
      name: 'ElCaretBottomSvg',
      title: 'ElCaretBottomSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'm192 384 320 384 320-384z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
