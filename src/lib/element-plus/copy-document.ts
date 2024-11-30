import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElCopyDocumentSvg extends TypeSvgSvg {
  className: 'ElCopyDocumentSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'ElCopyDocumentSvg';
    this.attr.addObj({
      name: 'ElCopyDocumentSvg',
      title: 'ElCopyDocumentSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64z',
    );
    this.addChild(path1);
    this.useParams(params);
  }
}
