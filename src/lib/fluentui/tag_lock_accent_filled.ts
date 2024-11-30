import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlTagLockAccentFilledSvg extends TypeSvgSvg {
  className: 'FlTagLockAccentFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlTagLockAccentFilledSvg';
    this.attr.addObj({
      name: 'FlTagLockAccentFilledSvg',
      title: 'FlTagLockAccentFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M17.5065 4.03375C17.5053 3.21003 16.84 2.5414 16.0163 2.536L11.1259 2.50394C10.7254 2.50131 10.3404 2.65901 10.0568 2.9419L3.37526 9.60643C2.7882 10.192 2.7876 11.1428 3.37391 11.7291L8.32231 16.6775C8.77595 17.1311 9.44788 17.2335 10 16.9845V13.9999C10 13.068 10.6374 12.2849 11.5 12.0629V11.9999C11.5 10.343 12.8431 8.99988 14.5 8.99988C15.4869 8.99988 16.3625 9.4764 16.9092 10.2119L17.0744 10.0467C17.3563 9.76484 17.5144 9.38241 17.5138 8.98381L17.5065 4.03375Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
