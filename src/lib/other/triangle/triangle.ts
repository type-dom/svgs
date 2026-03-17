import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';

export class TriangleSvg extends TypeSvgSvg {
  className: 'TriangleSvg';
  path: SvgPath;
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'TriangleSvg';
    addAttrObj(this, {
      viewBox: '0 0 1638 1024',
      width: '24',
      height: '30',
      fill: '#000',
    });
    // this.style.addObj({
    //   color: '#fff',
    //   verticalAlign: 'middle',
    //   marginTop: '3px',
    //   marginBottom: '6px',
    //   marginRight: '10px',
    // });
    this.path = new SvgPath();
    // addAttrObj(path, {
    //   fill: '#000'
    // });
    this.path.setData('M819.2 955.6992L1547.3664 45.4656H91.136z');
    this.addChild(this.path);
  }
}
