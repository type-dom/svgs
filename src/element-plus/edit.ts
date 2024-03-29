import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElEditSvg extends TypeSvgSvg {
  className: 'ElEditSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElEditSvg';
    this.addAttrObj({
      name: 'ElEditSvg',
      title: 'ElEditSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath({ parent: this });
    path1.setData(
      'm469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z',
    );
    this.childNodes.push(path1);
    this.setConfig(config);
  }
}
