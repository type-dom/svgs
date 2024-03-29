import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElFilterSvg extends TypeSvgSvg {
  className: 'ElFilterSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElFilterSvg';
    this.addAttrObj({
      name: 'ElFilterSvg',
      title: 'ElFilterSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M384 523.392V928a32 32 0 0 0 46.336 28.608l192-96A32 32 0 0 0 640 832V523.392l280.768-343.104a32 32 0 1 0-49.536-40.576l-288 352A32 32 0 0 0 576 512v300.224l-128 64V512a32 32 0 0 0-7.232-20.288L195.52 192H704a32 32 0 1 0 0-64H128a32 32 0 0 0-24.768 52.288L384 523.392z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
