import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElTopRightSvg extends TypeSvgSvg {
  className: 'ElTopRightSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElTopRightSvg';
    this.addAttrObj({
      name: 'ElTopRightSvg',
      title: 'ElTopRightSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath({ parent: this });
    path1.setData(
      'M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z',
    );
    this.childNodes.push(path1);
    this.setConfig(config);
  }
}
