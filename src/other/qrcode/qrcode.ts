import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class QrcodeSvg extends TypeSvgSvg {
  className: 'QrcodeSvg';
  childNodes: [SvgPath];
  constructor(config?: ITypeConfig) {
    super();
    this.className = 'QrcodeSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
      name: 'qrcode-svg',
    });
    this.resetSize(24, 24);
    const path = new SvgPath({ parent: this });
    path.setData('M477.098667 546.901333V896H128v-349.098667h349.098667z',
      ' m279.253333 279.253334V896H686.506667v-69.845333h69.845333z',
      ' m139.648 0V896h-69.845333v-69.845333H896z',
      ' m-139.648-279.253334v69.802667h69.802667v-69.802667H896v209.450667h-209.493333v-69.802667h-69.802667V896h-69.802667v-349.098667h209.450667z',
      ' m-349.098667 69.802667H197.802667v208.938667h209.493333v-208.938667z',
      'M337.493333 686.549333v69.802667H267.648v-69.802667h69.802667zM477.098667 128v349.098667H128V128h349.098667z',
      'M896 128v349.098667h-349.098667V128H896zM407.253333 197.802667H197.802667v209.493333h209.493333v-209.493333z',
      ' m418.901334 0h-209.450667v209.493333h209.493333v-209.493333zM337.493333 267.648v69.802667H267.648V267.648h69.802667z',
      ' m418.901334 0v69.802667H686.506667V267.648h69.845333z');
    this.childNodes = [path];
    this.setConfig(config);
  }
}
