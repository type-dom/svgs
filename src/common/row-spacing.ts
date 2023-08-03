import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdRowSpacingSvg extends TypeSvgSvg {
  className: 'TdRowSpacingSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdRowSpacingSvg';
    this.addAttrObj({
      viewBox: '0 0 1097 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M37.888 155.355429v-109.714286h1024.219429v109.714286H37.888zM476.891429 445.952v-109.714286h584.265142v109.714286H476.891429z m0.877714 225.718857v-109.714286h582.656v109.714286H477.622857zM40.228571 958.025143v-109.714286h1018.587429v109.714286H40.228571z m-40.301714-514.925714l181.833143-172.690286L363.52 443.172571H-0.073143z m1.974857 148.772571h363.300572L183.588571 762.660571 1.901714 591.872z',
    );
    this.childNodes.push(path0);
  }
}
