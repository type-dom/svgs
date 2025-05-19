import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlTableStackLeftRegularSvg extends TypeSvgSvg {
  className: 'FlTableStackLeftRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlTableStackLeftRegularSvg';
    this.attr.addObj({
      name: 'FlTableStackLeftRegularSvg',
      title: 'FlTableStackLeftRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3.5 17C3.22386 17 3 16.7761 3 16.5L3 3.5C3 3.22386 3.22386 3 3.5 3C3.77614 3 4 3.22386 4 3.5L4 16.5C4 16.7761 3.77614 17 3.5 17ZM8.5 17C8.22386 17 8 16.7761 8 16.5L8 3.5C8 3.22386 8.22386 3 8.5 3L15 3C16.1046 3 17 3.89543 17 5L17 15C17 16.1046 16.1046 17 15 17H8.5ZM13 16H15C15.5523 16 16 15.5523 16 15L16 13H13L13 16ZM16 8H13V12H16V8ZM16 7V5C16 4.44771 15.5523 4 15 4L13 4V7H16ZM12 7V4L9 4V7L12 7ZM9 8L9 12H12V8L9 8ZM9 16H12L12 13H9V16Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
