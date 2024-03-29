import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdLinkSvg extends TypeSvgSvg {
  className: 'TdLinkSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdLinkSvg';
    this.addAttrObj({
      name: 'TdLinkSvg',
      title: 'TdLinkSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 128 128',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M115.625 127.937H.063V12.375h57.781v12.374H12.438v90.813h90.813V70.156h12.374z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath({ parent: this });
    path1.setData(
      'M116.426 2.821l8.753 8.753-56.734 56.734-8.753-8.745z',
    );
    this.childNodes.push(path1);
    const path2 = new SvgPath({ parent: this });
    path2.setData(
      'M127.893 37.982h-12.375V12.375H88.706V0h39.187z',
    );
    this.childNodes.push(path2);
    this.setConfig(config);
  }
}
