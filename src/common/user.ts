import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdUserSvg extends TypeSvgSvg {
  className: 'TdUserSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdUserSvg';
    this.addAttrObj({
      name: 'TdUserSvg',
      title: 'TdUserSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 130 130',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M63.444 64.996c20.633 0 37.359-14.308 37.359-31.953 0-17.649-16.726-31.952-37.359-31.952-20.631 0-37.36 14.303-37.358 31.952 0 17.645 16.727 31.953 37.359 31.953zM80.57 75.65H49.434c-26.652 0-48.26 18.477-48.26 41.27v2.664c0 9.316 21.608 9.325 48.26 9.325H80.57c26.649 0 48.256-.344 48.256-9.325v-2.663c0-22.794-21.605-41.271-48.256-41.271z',
    );
    this.childNodes.push(path0);
  }
}
