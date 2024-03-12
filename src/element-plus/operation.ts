import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElOperationSvg extends TypeSvgSvg {
  className: 'ElOperationSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElOperationSvg';
    this.addAttrObj({
      name: 'ElOperationSvg',
      title: 'ElOperationSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64h261.44zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64h453.44zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64h133.44z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
