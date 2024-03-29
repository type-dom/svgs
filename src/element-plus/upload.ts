import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElUploadSvg extends TypeSvgSvg {
  className: 'ElUploadSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElUploadSvg';
    this.addAttrObj({
      name: 'ElUploadSvg',
      title: 'ElUploadSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
