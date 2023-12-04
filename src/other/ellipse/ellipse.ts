import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class EllipseSvg extends TypeSvgSvg {
  className: 'EllipseSvg';
  childNodes: [SvgPath];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'EllipseSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
      name: 'ellipse-svg',
    });
    this.resetSize(24, 24);
    const path = new SvgPath(this);
    path.setData('M512 199.6c53.5 0 105.3 8.7 153.9 25.8 46.4 16.4 88 39.7 123.5 69.3 70.5 58.7 109.3 135.9 109.3 217.3s-38.8 158.5-109.3 217.3c-35.5 29.6-77.1 52.9-123.5 69.3-48.6 17.1-100.4 25.8-153.9 25.8s-105.3-8.7-153.9-25.8c-46.4-16.4-88-39.7-123.5-69.3-70.5-58.8-109.4-135.9-109.4-217.3S164 353.5 234.5 294.7c35.5-29.6 77.1-52.9 123.5-69.3 48.7-17.1 100.5-25.8 154-25.8m0-59.5C265.5 140.1 65.7 306.6 65.7 512c0 205.4 199.8 371.9 446.3 371.9S958.3 717.4 958.3 512c0-205.4-199.8-371.9-446.3-371.9z');
    this.childNodes = [path];
  }
}
