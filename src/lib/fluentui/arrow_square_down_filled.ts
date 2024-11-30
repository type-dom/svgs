import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlArrowSquareDownFilledSvg extends TypeSvgSvg {
  className: 'FlArrowSquareDownFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlArrowSquareDownFilledSvg';
    this.attr.addObj({
      name: 'FlArrowSquareDownFilledSvg',
      title: 'FlArrowSquareDownFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M5 3C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17H15C16.1046 17 17 16.1046 17 15V5C17 3.89543 16.1046 3 15 3H5ZM10.5 6.5V12.2929L13.1464 9.64645C13.3417 9.45118 13.6583 9.45118 13.8536 9.64645C14.0488 9.84171 14.0488 10.1583 13.8536 10.3536L10.3536 13.8536C10.1583 14.0488 9.84171 14.0488 9.64645 13.8536L6.14645 10.3536C5.95118 10.1583 5.95118 9.84171 6.14645 9.64645C6.34171 9.45118 6.65829 9.45118 6.85355 9.64645L9.5 12.2929V6.5C9.5 6.22386 9.72386 6 10 6C10.2761 6 10.5 6.22386 10.5 6.5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
