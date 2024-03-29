import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElMagicStickSvg extends TypeSvgSvg {
  className: 'ElMagicStickSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElMagicStickSvg';
    this.addAttrObj({
      name: 'ElMagicStickSvg',
      title: 'ElMagicStickSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M512 64h64v192h-64V64zm0 576h64v192h-64V640zM160 480v-64h192v64H160zm576 0v-64h192v64H736zM249.856 199.04l45.248-45.184L430.848 289.6 385.6 334.848 249.856 199.104zM657.152 606.4l45.248-45.248 135.744 135.744-45.248 45.248L657.152 606.4zM114.048 923.2 68.8 877.952l316.8-316.8 45.248 45.248-316.8 316.8zM702.4 334.848 657.152 289.6l135.744-135.744 45.248 45.248L702.4 334.848z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
