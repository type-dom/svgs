import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElSuitcaseLineSvg extends TypeSvgSvg {
  className: 'ElSuitcaseLineSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElSuitcaseLineSvg';
    this.addAttrObj({
      name: 'ElSuitcaseLineSvg',
      title: 'ElSuitcaseLineSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M922.5 229.5c-24.32-24.34-54.49-36.84-90.5-37.5H704v-64c-.68-17.98-7.02-32.98-19.01-44.99S658.01 64.66 640 64H384c-17.98.68-32.98 7.02-44.99 19.01S320.66 110 320 128v64H192c-35.99.68-66.16 13.18-90.5 37.5C77.16 253.82 64.66 283.99 64 320v448c.68 35.99 13.18 66.16 37.5 90.5s54.49 36.84 90.5 37.5h640c35.99-.68 66.16-13.18 90.5-37.5s36.84-54.49 37.5-90.5V320c-.68-35.99-13.18-66.16-37.5-90.5zM384 128h256v64H384v-64zM256 832h-64c-17.98-.68-32.98-7.02-44.99-19.01S128.66 786.01 128 768V448h128v384zm448 0H320V448h384v384zm192-64c-.68 17.98-7.02 32.98-19.01 44.99S850.01 831.34 832 832h-64V448h128v320zm0-384H128v-64c.69-17.98 7.02-32.98 19.01-44.99S173.99 256.66 192 256h640c17.98.69 32.98 7.02 44.99 19.01S895.34 301.99 896 320v64z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
