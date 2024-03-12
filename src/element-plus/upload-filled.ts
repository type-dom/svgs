import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElUploadFilledSvg extends TypeSvgSvg {
  className: 'ElUploadFilledSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElUploadFilledSvg';
    this.addAttrObj({
      name: 'ElUploadFilledSvg',
      title: 'ElUploadFilledSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
