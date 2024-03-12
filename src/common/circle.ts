import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdCircleSvg extends TypeSvgSvg {
  className: 'TdCircleSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdCircleSvg';
    this.addAttrObj({
      name: 'TdCircleSvg',
      title: 'TdCircleSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M62 512c0 248.528 201.472 450 450 450s450-201.472 450-450c0-248.528-201.472-450-450-450-248.528 0-450 201.472-450 450z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
