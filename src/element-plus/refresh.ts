import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElRefreshSvg extends TypeSvgSvg {
  className: 'ElRefreshSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElRefreshSvg';
    this.addAttrObj({
      name: 'ElRefreshSvg',
      title: 'ElRefreshSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
