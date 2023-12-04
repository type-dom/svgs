import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class RectangleSvg extends TypeSvgSvg {
  className: 'RectangleSvg';
  childNodes: [SvgPath];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'RectangleSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
      name: 'rectangle-svg',
    });
    this.resetSize(24, 24);
    const path = new SvgPath(this);
    path.setData('M841.34 959.36H182.66c-65.06 0-117.99-52.94-117.99-118.02V182.69c0-65.08 52.94-118.04 117.99-118.04h658.68c65.06 0 117.99 52.96 117.99 118.04v658.65c0 65.08-52.93 118.02-117.99 118.02z',
      'M182.66 142.17c-22.31 0-40.51 18.18-40.51 40.51v658.65c0 22.34 18.2 40.49 40.51 40.49h658.68c22.31 0 40.51-18.15 40.51-40.49V182.69c0-22.34-18.2-40.51-40.51-40.51H182.66z');
    this.childNodes = [path];
  }
}
