import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlCaretUpFilledSvg extends TypeSvgSvg {
  className: 'FlCaretUpFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlCaretUpFilledSvg';
    this.attr.addObj({
      name: 'FlCaretUpFilledSvg',
      title: 'FlCaretUpFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M5.79681 13.9082C4.95612 13.9082 4.49064 12.9339 5.01887 12.2799L8.83333 7.5572C9.43371 6.81387 10.5668 6.81387 11.1672 7.5572L14.9816 12.2799C15.5098 12.9339 15.0444 13.9082 14.2037 13.9082H5.79681Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
