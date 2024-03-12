import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElCommentSvg extends TypeSvgSvg {
  className: 'ElCommentSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElCommentSvg';
    this.addAttrObj({
      name: 'ElCommentSvg',
      title: 'ElCommentSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M736 504a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zM128 128v640h192v160l224-160h352V128H128z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
