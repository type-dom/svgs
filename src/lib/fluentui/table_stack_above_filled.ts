import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlTableStackAboveFilledSvg extends TypeSvgSvg {
  className: 'FlTableStackAboveFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlTableStackAboveFilledSvg';
    this.attr.addObj({
      name: 'FlTableStackAboveFilledSvg',
      title: 'FlTableStackAboveFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4H16.5C16.7761 4 17 3.77614 17 3.5C17 3.22386 16.7761 3 16.5 3H3.5ZM15 17H13V13H17V15C17 16.1046 16.1046 17 15 17ZM17 12H13V8H16.5C16.7761 8 17 8.22386 17 8.5V12ZM12 12V8H8V12H12ZM8 17H12V13H8V17ZM7 8V12H3V8.5C3 8.22386 3.22386 8 3.5 8H7ZM7 17H5C3.89543 17 3 16.1046 3 15V13H7V17Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
