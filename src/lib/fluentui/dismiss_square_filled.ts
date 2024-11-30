import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlDismissSquareFilledSvg extends TypeSvgSvg {
  className: 'FlDismissSquareFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlDismissSquareFilledSvg';
    this.attr.addObj({
      name: 'FlDismissSquareFilledSvg',
      title: 'FlDismissSquareFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3 6C3 4.34315 4.34315 3 6 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H6C4.34315 17 3 15.6569 3 14V6ZM7.14645 7.14645C6.95118 7.34171 6.95118 7.65829 7.14645 7.85355L9.29289 10L7.14645 12.1464C6.95118 12.3417 6.95118 12.6583 7.14645 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L10 10.7071L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L10.7071 10L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645C12.6583 6.95118 12.3417 6.95118 12.1464 7.14645L10 9.29289L7.85355 7.14645C7.65829 6.95118 7.34171 6.95118 7.14645 7.14645Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
