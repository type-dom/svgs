import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlIosChevronRightRegularSvg extends TypeSvgSvg {
  className: 'FlIosChevronRightRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlIosChevronRightRegularSvg';
    this.attr.addObj({
      name: 'FlIosChevronRightRegularSvg',
      title: 'FlIosChevronRightRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M12.6464 5.85355C12.4512 5.65829 12.4512 5.34171 12.6464 5.14645C12.8417 4.95118 13.1583 4.95118 13.3536 5.14645L17.8536 9.64645C18.0488 9.84171 18.0488 10.1583 17.8536 10.3536L13.3536 14.8536C13.1583 15.0488 12.8417 15.0488 12.6464 14.8536C12.4512 14.6583 12.4512 14.3417 12.6464 14.1464L16.7929 10L12.6464 5.85355Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
