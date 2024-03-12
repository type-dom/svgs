import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdRowHeightSvg extends TypeSvgSvg {
  className: 'TdRowHeightSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdRowHeightSvg';
    this.addAttrObj({
      name: 'TdRowHeightSvg',
      title: 'TdRowHeightSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M417.849 454.258h582.542v109.227h-582.542v-109.227z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath({ parent: this });
    path1.setData(
      'M417.849 135.397h582.542v109.227h-582.542v-109.227z',
    );
    this.childNodes.push(path1);
    const path2 = new SvgPath({ parent: this });
    path2.setData(
      'M417.849 794.452h582.542v109.227h-582.542v-109.227z',
    );
    this.childNodes.push(path2);
    const path3 = new SvgPath({ parent: this });
    path3.setData(
      'M235.805 308.622h109.227l-163.84-182.045-163.84 182.045h109.227v400.498h-109.227l163.84 182.045 163.84-182.045h-109.227z',
    );
    this.childNodes.push(path3);
    this.setConfig(config);
  }
}
