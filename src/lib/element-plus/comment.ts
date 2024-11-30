import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElCommentSvg extends TypeSvgSvg {
  className: 'ElCommentSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'ElCommentSvg';
    this.attr.addObj({
      name: 'ElCommentSvg',
      title: 'ElCommentSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M736 504a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zM128 128v640h192v160l224-160h352V128H128z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
