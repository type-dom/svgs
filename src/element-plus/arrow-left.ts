import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElArrowLeftSvg extends TypeSvgSvg {
  className: 'ElArrowLeftSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElArrowLeftSvg';
    this.addAttrObj({
      name: 'ElArrowLeftSvg',
      title: 'ElArrowLeftSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
