import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElBicycleSvg extends TypeSvgSvg {
  className: 'ElBicycleSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElBicycleSvg';
    this.addAttrObj({
      name: 'ElBicycleSvg',
      title: 'ElBicycleSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M256 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath({ parent: this });
    path1.setData(
      'M288 672h320q32 0 32 32t-32 32H288q-32 0-32-32t32-32z',
    );
    this.childNodes.push(path1);
    const path2 = new SvgPath({ parent: this });
    path2.setData(
      'M768 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z',
    );
    this.childNodes.push(path2);
    const path3 = new SvgPath({ parent: this });
    path3.setData(
      'M480 192a32 32 0 0 1 0-64h160a32 32 0 0 1 31.04 24.256l96 384a32 32 0 0 1-62.08 15.488L615.04 192H480zM96 384a32 32 0 0 1 0-64h128a32 32 0 0 1 30.336 21.888l64 192a32 32 0 1 1-60.672 20.224L200.96 384H96z',
    );
    this.childNodes.push(path3);
    const path4 = new SvgPath({ parent: this });
    path4.setData(
      'm373.376 599.808-42.752-47.616 320-288 42.752 47.616z',
    );
    this.childNodes.push(path4);
    this.setConfig(config);
  }
}
