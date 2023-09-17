import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdSdTagSvg extends TypeSvgSvg {
  className: 'TdSdTagSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdSdTagSvg';
    this.addAttrObj({
      name: 'sd-tag',
      title: 'sd-tag'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M255.330877 2.679053a63.960224 63.960224 0 0 1 7.659907 127.665118H127.665758v765.990711h765.990711V66.511612a63.960224 63.960224 0 0 1 127.665118-7.659907V896.334882a127.665118 127.665118 0 0 1-118.090234 127.665118H127.665758a127.665118 127.665118 0 0 1-127.665118-118.090235V130.344171a127.665118 127.665118 0 0 1 118.090235-127.665118H255.330877z m482.574148 0a63.832559 63.832559 0 0 1 63.832559 63.832559v462.786054a26.171349 26.171349 0 0 1-39.576187 21.70307l-116.813583-77.875722a63.832559 63.832559 0 0 0-70.854141 0L458.318415 551.000736a24.894698 24.894698 0 0 1-35.107907-7.659907 21.70307 21.70307 0 0 1-4.46828-14.043163V66.511612a63.832559 63.832559 0 0 1 63.83256-63.832559z',
    );
    this.childNodes.push(path0);
  }
}
