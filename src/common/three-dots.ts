import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class TdThreeDotsSvg extends TypeSvgSvg {
  className: 'TdThreeDotsSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdThreeDotsSvg';
    this.addAttrObj({
      name: 'TdThreeDotsSvg',
      title: 'TdThreeDotsSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M0 512c0-59.733333 46.933333-106.666667 106.666667-106.666667s106.666667 46.933333 106.666666 106.666667-46.933333 106.666667-106.666666 106.666667-106.666667-46.933333-106.666667-106.666667zM810.666667 512c0-59.733333 46.933333-106.666667 106.666666-106.666667s106.666667 46.933333 106.666667 106.666667-46.933333 106.666667-106.666667 106.666667-106.666667-46.933333-106.666666-106.666667zM405.333333 512c0-59.733333 46.933333-106.666667 106.666667-106.666667s106.666667 46.933333 106.666667 106.666667-46.933333 106.666667-106.666667 106.666667-106.666667-46.933333-106.666667-106.666667z',
    );
    this.childNodes.push(path0);
  }
}
