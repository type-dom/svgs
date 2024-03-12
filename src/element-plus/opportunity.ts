import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElOpportunitySvg extends TypeSvgSvg {
  className: 'ElOpportunitySvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElOpportunitySvg';
    this.addAttrObj({
      name: 'ElOpportunitySvg',
      title: 'ElOpportunitySvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M384 960v-64h192.064v64H384zm448-544a350.656 350.656 0 0 1-128.32 271.424C665.344 719.04 640 763.776 640 813.504V832H320v-14.336c0-48-19.392-95.36-57.216-124.992a351.552 351.552 0 0 1-128.448-344.256c25.344-136.448 133.888-248.128 269.76-276.48A352.384 352.384 0 0 1 832 416zm-544 32c0-132.288 75.904-224 192-224v-64c-154.432 0-256 122.752-256 288h64z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
