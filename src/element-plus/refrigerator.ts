import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElRefrigeratorSvg extends TypeSvgSvg {
  className: 'ElRefrigeratorSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElRefrigeratorSvg';
    this.addAttrObj({
      name: 'ElRefrigeratorSvg',
      title: 'ElRefrigeratorSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M256 448h512V160a32 32 0 0 0-32-32H288a32 32 0 0 0-32 32v288zm0 64v352a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V512H256zm32-448h448a96 96 0 0 1 96 96v704a96 96 0 0 1-96 96H288a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96zm32 224h64v96h-64v-96zm0 288h64v96h-64v-96z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
