import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlLocationFilledSvg extends TypeSvgSvg {
  className: 'FlLocationFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlLocationFilledSvg';
    this.attr.addObj({
      name: 'FlLocationFilledSvg',
      title: 'FlLocationFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M14.9497 13.955C17.6834 11.2201 17.6834 6.78601 14.9497 4.05115C12.2161 1.31628 7.78392 1.31628 5.05025 4.05115C2.31658 6.78601 2.31658 11.2201 5.05025 13.955L6.57128 15.4538L8.61408 17.4389L8.74691 17.5567C9.52168 18.1847 10.6562 18.1455 11.3861 17.4391L13.8223 15.0691L14.9497 13.955ZM10 12C8.34315 12 7 10.6569 7 9C7 7.34315 8.34315 6 10 6C11.6569 6 13 7.34315 13 9C13 10.6569 11.6569 12 10 12Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
