import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdStaticHorizontalLineSvg extends TypeSvgSvg {
  className: 'TdStaticHorizontalLineSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdStaticHorizontalLineSvg';
    this.addAttrObj({
      name: 'TdStaticHorizontalLineSvg',
      title: 'TdStaticHorizontalLineSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
