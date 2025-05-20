import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlClipboardColorSvg extends TypeSvgSvg {
  className: 'FlClipboardColorSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlClipboardColorSvg';
    this.attr.addObj({
      name: 'FlClipboardColorSvg',
      title: 'FlClipboardColorSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M4 4.50586C4 3.67743 4.67157 3.00586 5.5 3.00586H14.5C15.3284 3.00586 16 3.67743 16 4.50586V16.5059C16 17.3343 15.3284 18.0059 14.5 18.0059H5.5C4.67157 18.0059 4 17.3343 4 16.5059V4.50586Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M4 4.50586C4 3.67743 4.67157 3.00586 5.5 3.00586H14.5C15.3284 3.00586 16 3.67743 16 4.50586V16.5059C16 17.3343 15.3284 18.0059 14.5 18.0059H5.5C4.67157 18.0059 4 17.3343 4 16.5059V4.50586Z',
    );
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path2.setData(
      'M4 4.50586C4 3.67743 4.67157 3.00586 5.5 3.00586H14.5C15.3284 3.00586 16 3.67743 16 4.50586V16.5059C16 17.3343 15.3284 18.0059 14.5 18.0059H5.5C4.67157 18.0059 4 17.3343 4 16.5059V4.50586Z',
    );
    this.addChild(path2);
    const path3 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path3.setData(
      'M7 3.5C7 4.32843 7.67157 5 8.5 5H11.5C12.3284 5 13 4.32843 13 3.5C13 2.67157 12.3284 2 11.5 2H8.5C7.67157 2 7 2.67157 7 3.5Z',
    );
    this.addChild(path3);
    this.useParams(params);
  }
}
