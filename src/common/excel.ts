import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdExcelSvg extends TypeSvgSvg {
  className: 'TdExcelSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdExcelSvg';
    this.addAttrObj({
      viewBox: '0 0 128 128',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M78.208 16.576v8.384h38.72v5.376h-38.72v8.704h38.72v5.376h-38.72v8.576h38.72v5.376h-38.72v8.576h38.72v5.376h-38.72v8.576h38.72v5.376h-38.72v8.512h38.72v5.376h-38.72v11.136H128v-94.72H78.208zM0 114.368L72.128 128V0L0 13.632v100.736z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData(
      'M28.672 82.56h-11.2l14.784-23.488-14.08-22.592h11.52l8.192 14.976 8.448-14.976h11.136l-14.08 22.208L58.368 82.56H46.656l-8.768-15.68z',
    );
    this.childNodes.push(path1);
  }
}
