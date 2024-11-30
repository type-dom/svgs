import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlRecordFilledSvg extends TypeSvgSvg {
  className: 'FlRecordFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlRecordFilledSvg';
    this.attr.addObj({
      name: 'FlRecordFilledSvg',
      title: 'FlRecordFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10ZM10 14.5C12.4853 14.5 14.5 12.4853 14.5 10C14.5 7.51472 12.4853 5.5 10 5.5C7.51472 5.5 5.5 7.51472 5.5 10C5.5 12.4853 7.51472 14.5 10 14.5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
