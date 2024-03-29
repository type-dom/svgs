import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElRefreshRightSvg extends TypeSvgSvg {
  className: 'ElRefreshRightSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElRefreshRightSvg';
    this.addAttrObj({
      name: 'ElRefreshRightSvg',
      title: 'ElRefreshRightSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
