import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdSearchSvg extends TypeSvgSvg {
  className: 'TdSearchSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdSearchSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M124.884 109.812L94.256 79.166c-.357-.357-.757-.629-1.129-.914a50.366 50.366 0 0 0 8.186-27.59C101.327 22.689 78.656 0 50.67 0 22.685 0 0 22.688 0 50.663c0 27.989 22.685 50.663 50.656 50.663 10.186 0 19.643-3.03 27.6-8.201.286.385.557.771.9 1.114l30.628 30.632a10.633 10.633 0 0 0 7.543 3.129c2.728 0 5.457-1.043 7.543-3.115 4.171-4.157 4.171-10.915.014-15.073M50.671 85.338C31.557 85.338 16 69.78 16 50.663c0-19.102 15.557-34.661 34.67-34.661 19.115 0 34.657 15.559 34.657 34.675 0 19.102-15.557 34.661-34.656 34.661',
    );
    this.childNodes.push(path0);
  }
}
