import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdHistorySvg extends TypeSvgSvg {
  className: 'TdHistorySvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdHistorySvg';
    this.addAttrObj({
      name: 'TdHistorySvg',
      title: 'TdHistorySvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M489.216 254.464l1.024 306.944 182.016 133.12 29.184-39.936-163.328-116.736V254.464h-48.896z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData(
      'M919.808 668.672h-2.304l-3.072 7.168A420.096 420.096 0 0 1 691.2 898.56a420.352 420.352 0 0 1-326.656 0A419.584 419.584 0 0 1 230.4 215.296 419.584 419.584 0 0 1 691.2 125.44a412.928 412.928 0 0 1 133.376 89.856c9.984 10.24 19.2 20.224 27.904 30.976l10.496 12.8-57.6 44.544 148.992 43.008-6.912-153.6-51.2 39.168-9.984-12.288a463.104 463.104 0 1 0-358.4 755.456 467.968 467.968 0 0 0 430.08-290.304v-2.56z',
    );
    this.childNodes.push(path1);
  }
}
