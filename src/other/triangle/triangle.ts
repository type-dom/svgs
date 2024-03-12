import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TriangleSvg extends TypeSvgSvg {
  className: 'TriangleSvg';
  childNodes: [SvgPath];

  constructor(config?: ITypeConfig) {
    super();
    this.className = 'TriangleSvg';
    this.addAttrObj({
      viewBox: '0 0 1638 1024',
      width: '24',
      height: '30',
      fill: '#000',
    });
    // this.addStyleObj({
    //   color: '#fff',
    //   verticalAlign: 'middle',
    //   marginTop: '3px',
    //   marginBottom: '6px',
    //   marginRight: '10px',
    // });
    const path = new SvgPath({ parent: this });
    // path.addAttrObj({
    //   fill: '#000'
    // });
    path.setData('M819.2 955.6992L1547.3664 45.4656H91.136z');
    this.childNodes = [path];
    this.setConfig(config);
  }
}
