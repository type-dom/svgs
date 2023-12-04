import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class ElPhoneFilledSvg extends TypeSvgSvg {
  className: 'ElPhoneFilledSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElPhoneFilledSvg';
    this.addAttrObj({
      name: 'ElPhoneFilledSvg',
      title: 'ElPhoneFilledSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M199.232 125.568 90.624 379.008a32 32 0 0 0 6.784 35.2l512.384 512.384a32 32 0 0 0 35.2 6.784l253.44-108.608a32 32 0 0 0 10.048-52.032L769.6 633.92a32 32 0 0 0-36.928-5.952l-130.176 65.088-271.488-271.552 65.024-130.176a32 32 0 0 0-5.952-36.928L251.2 115.52a32 32 0 0 0-51.968 10.048z',
    );
    this.childNodes.push(path0);
  }
}
