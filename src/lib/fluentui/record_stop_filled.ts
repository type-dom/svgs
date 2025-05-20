import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlRecordStopFilledSvg extends TypeSvgSvg {
  className: 'FlRecordStopFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlRecordStopFilledSvg';
    this.attr.addObj({
      name: 'FlRecordStopFilledSvg',
      title: 'FlRecordStopFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM8 7H12C12.5523 7 13 7.44772 13 8V12C13 12.5523 12.5523 13 12 13H8C7.44772 13 7 12.5523 7 12V8C7 7.44772 7.44772 7 8 7Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
