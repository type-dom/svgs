import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdThumbnailPageSvg extends TypeSvgSvg {
  className: 'TdThumbnailPageSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdThumbnailPageSvg';
    this.addAttrObj({
      name: 'TdThumbnailPageSvg',
      title: 'TdThumbnailPageSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M853.062621 218.924138a63.558621 63.558621 0 0 1 63.55862 63.558621v670.190344a63.558621 63.558621 0 0 1-63.55862 63.558621H370.758621a63.558621 63.558621 0 0 1-63.558621-63.558621V282.482759A63.558621 63.558621 0 0 1 370.758621 218.924138z m0 56.496552H370.758621a7.062069 7.062069 0 0 0-7.062069 7.062069v670.190344c0 3.884138 3.177931 7.062069 7.062069 7.062069h482.304a7.062069 7.062069 0 0 0 7.062069-7.062069V282.482759a7.062069 7.062069 0 0 0-7.062069-7.062069z m-75.281655-157.378207a28.248276 28.248276 0 0 1 3.531034 56.249379l-3.531034 0.247172H297.030621A42.372414 42.372414 0 0 0 254.870069 212.568276l-0.211862 4.343172v691.023449a28.248276 28.248276 0 0 1-56.28469 3.531034l-0.211862-3.531034V216.911448a98.868966 98.868966 0 0 1 92.866207-98.692414l6.002759-0.176551h480.750345z m-105.931035-105.931035a28.248276 28.248276 0 0 1 3.531035 56.24938l-3.531035 0.247172H191.099586A42.372414 42.372414 0 0 0 148.939034 106.637241l-0.211862 4.343173v691.023448a28.248276 28.248276 0 0 1-56.284689 3.531035l-0.211862-3.531035V110.980414A98.868966 98.868966 0 0 1 185.096828 12.288l6.002758-0.176552h480.750345z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
