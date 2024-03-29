import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdPaginationSvg extends TypeSvgSvg {
  className: 'TdPaginationSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdPaginationSvg';
    this.addAttrObj({
      name: 'TdPaginationSvg',
      title: 'TdPaginationSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M998.4 256v768H25.6V0h768v51.2h51.2v51.2h-51.2v102.4h102.4V153.6h51.2v51.2h51.2v51.2z m-204.8 0h-51.2V51.2H76.8v921.6h870.4V256h-153.6z m-136.5504 409.6H691.2v102.4h-42.6496L640 870.4h-102.4l8.5504-102.4h-102.4L435.2 870.4H332.8l8.5504-102.4H281.6v-102.4h68.2496l17.1008-204.8H332.8V358.4h42.6496L384 256h102.4l-8.5504 102.4h102.4L588.8 256h102.4l-8.5504 102.4H742.4v102.4h-68.2496zM469.3504 460.8l-17.1008 204.8h102.4l17.1008-204.8h-102.4zM844.8 102.4h51.2v51.2h-51.2V102.4z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
