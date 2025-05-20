import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElDCaretSvg extends TypeSvgSvg {
  className: 'ElDCaretSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'ElDCaretSvg';
    this.attr.addObj({
      name: 'ElDCaretSvg',
      title: 'ElDCaretSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'm512 128 288 320H224l288-320zM224 576h576L512 896 224 576z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
