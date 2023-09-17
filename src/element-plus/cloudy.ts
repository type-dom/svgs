import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElCloudySvg extends TypeSvgSvg {
  className: 'ElCloudySvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElCloudySvg';
    this.addAttrObj({
      name: 'cloudy',
      title: 'cloudy'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M598.4 831.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 831.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 381.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z',
    );
    this.childNodes.push(path0);
  }
}
