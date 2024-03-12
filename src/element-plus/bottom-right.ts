import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElBottomRightSvg extends TypeSvgSvg {
  className: 'ElBottomRightSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElBottomRightSvg';
    this.addAttrObj({
      name: 'ElBottomRightSvg',
      title: 'ElBottomRightSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M352 768a32 32 0 1 0 0 64h448a32 32 0 0 0 32-32V352a32 32 0 0 0-64 0v416H352z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath({ parent: this });
    path1.setData(
      'M777.344 822.656a32 32 0 0 0 45.312-45.312l-544-544a32 32 0 0 0-45.312 45.312l544 544z',
    );
    this.childNodes.push(path1);
    this.setConfig(config);
  }
}
