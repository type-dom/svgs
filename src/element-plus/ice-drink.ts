import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElIceDrinkSvg extends TypeSvgSvg {
  className: 'ElIceDrinkSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElIceDrinkSvg';
    this.addAttrObj({
      name: 'ElIceDrinkSvg',
      title: 'ElIceDrinkSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M512 448v128h239.68l16.064-128H512zm-64 0H256.256l16.064 128H448V448zm64-255.36V384h247.744A256.128 256.128 0 0 0 512 192.64zm-64 8.064A256.448 256.448 0 0 0 264.256 384H448V200.704zm64-72.064A320.128 320.128 0 0 1 825.472 384H896a32 32 0 1 1 0 64h-64v1.92l-56.96 454.016A64 64 0 0 1 711.552 960H312.448a64 64 0 0 1-63.488-56.064L192 449.92V448h-64a32 32 0 0 1 0-64h70.528A320.384 320.384 0 0 1 448 135.04V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H544a32 32 0 0 0-32 32v32.64zM743.68 640H280.32l32.128 256h399.104l32.128-256z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
