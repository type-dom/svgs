import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ShapeSvg extends TypeSvgSvg {
  className: 'ShapeSvg';
  childNodes: [SvgPath];
  constructor(config?: ITypeConfig) {
    super();
    this.className = 'ShapeSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
      name: 'shape-svg',
    });
    this.resetSize(24, 24);
    const path = new SvgPath({ parent: this });
    path.setData(
      'M832 337.6 832 106.688C832 83.072 812.864 64 789.376 64L106.688 64C83.072 64 64 83.072 64 106.688l0 682.688C64 812.928 83.072 832 106.688 832l251.456 0c62.912 96.192 171.328 160 294.592 160 194.112 0 352-157.952 352-352C1004.736 511.424 935.232 399.04 832 337.6z',
      'M128 768 128 128l640 0 0 179.776C731.776 295.168 693.12 288 652.736 288 458.688 288 300.8 445.952 300.8 640c0 45.184 8.896 88.256 24.448 128L128 768z',
      'M652.736 928C494.016 928 364.8 798.784 364.8 640s129.216-288 287.936-288 288 129.216 288 288S811.52 928 652.736 928z');
    this.childNodes = [path];
    this.setConfig(config);
  }
}
