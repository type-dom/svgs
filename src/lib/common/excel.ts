import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class TdExcelSvg extends TypeSvgSvg {
  className: 'TdExcelSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'TdExcelSvg';
    addAttrObj(this, {
      name: 'TdExcelSvg'
    });
    addAttrObj(this, {
      viewBox: '0 0 128 128',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M78.208 16.576v8.384h38.72v5.376h-38.72v8.704h38.72v5.376h-38.72v8.576h38.72v5.376h-38.72v8.576h38.72v5.376h-38.72v8.576h38.72v5.376h-38.72v8.512h38.72v5.376h-38.72v11.136H128v-94.72H78.208zM0 114.368L72.128 128V0L0 13.632v100.736z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M28.672 82.56h-11.2l14.784-23.488-14.08-22.592h11.52l8.192 14.976 8.448-14.976h11.136l-14.08 22.208L58.368 82.56H46.656l-8.768-15.68z',
    );
    this.addChild(path1);
  }
}
