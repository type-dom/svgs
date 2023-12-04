import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class BarcodeSvg extends TypeSvgSvg {
  className: 'BarcodeSvg';
  childNodes: [SvgPath];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'BarcodeSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
      name: 'barcode-svg',
    });
    this.resetSize(24, 24);
    const path = new SvgPath(this);
    path.setData('M64 127.808l115.84 0 0 768.384-115.84 0 0-768.384Z',
      'M217.6 127.808l54.464 0 0 768.384-54.464 0 0-768.384Z',
      'M342.912 127.808l68.544 0 0 768.384-68.544 0 0-768.384Z',
      'M539.136 127.808l118.272 0 0 768.384-118.272 0 0-768.384Z',
      'M688.064 127.808l44.992 0 0 768.384-44.992 0 0-768.384Z',
      'M803.968 127.808l156.032 0 0 768.384-156.032 0 0-768.384Z');
    this.childNodes = [path];
  }
}
