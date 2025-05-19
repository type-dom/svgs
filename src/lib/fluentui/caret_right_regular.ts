import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlCaretRightRegularSvg extends TypeSvgSvg {
  className: 'FlCaretRightRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlCaretRightRegularSvg';
    this.attr.addObj({
      name: 'FlCaretRightRegularSvg',
      title: 'FlCaretRightRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M8.62834 14.9816C7.97434 15.5098 7 15.0444 7 14.2037L7 5.79681C7 4.95613 7.97434 4.49063 8.62834 5.01887L13.351 8.83333C14.0943 9.43371 14.0943 10.5668 13.351 11.1672L8.62834 14.9816ZM8 5.79681L8 14.2037L12.7227 10.3892C12.9704 10.1891 12.9704 9.81139 12.7227 9.61127L8 5.79681Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
