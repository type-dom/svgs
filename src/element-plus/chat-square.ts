import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class ElChatSquareSvg extends TypeSvgSvg {
  className: 'ElChatSquareSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElChatSquareSvg';
    this.addAttrObj({
      name: 'ElChatSquareSvg',
      title: 'ElChatSquareSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z',
    );
    this.childNodes.push(path0);
  }
}
