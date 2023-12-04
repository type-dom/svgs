import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdLockSvg extends TypeSvgSvg {
  className: 'TdLockSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdLockSvg';
    this.addAttrObj({
      name: 'TdLockSvg',
      title: 'TdLockSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 128 128',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M119.88 49.674h-7.987V39.52C111.893 17.738 90.45.08 63.996.08 37.543.08 16.1 17.738 16.1 39.52v10.154H8.113c-4.408 0-7.987 2.94-7.987 6.577v65.13c0 3.637 3.57 6.577 7.987 6.577H119.88c4.407 0 7.987-2.94 7.987-6.577v-65.13c-.008-3.636-3.58-6.577-7.987-6.577zm-23.953 0H32.065V39.52c0-14.524 14.301-26.295 31.931-26.295 17.63 0 31.932 11.777 31.932 26.295v10.153z',
    );
    this.childNodes.push(path0);
  }
}
