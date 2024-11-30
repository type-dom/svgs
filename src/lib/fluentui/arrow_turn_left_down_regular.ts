import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlArrowTurnLeftDownRegularSvg extends TypeSvgSvg {
  className: 'FlArrowTurnLeftDownRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlArrowTurnLeftDownRegularSvg';
    this.attr.addObj({
      name: 'FlArrowTurnLeftDownRegularSvg',
      title: 'FlArrowTurnLeftDownRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3.14645 11.1464C2.95118 11.3417 2.95118 11.6583 3.14645 11.8536L7.14645 15.8536C7.34171 16.0488 7.65829 16.0488 7.85355 15.8536L11.8536 11.8536C12.0488 11.6583 12.0488 11.3417 11.8536 11.1464C11.6583 10.9512 11.3417 10.9512 11.1464 11.1464L8 14.2929V8C8 6.89543 8.89543 6 10 6L16.5 6C16.7761 6 17 5.77614 17 5.5C17 5.22386 16.7761 5 16.5 5L10 5C8.34315 5 7 6.34315 7 8L7 14.2929L3.85355 11.1464C3.65829 10.9512 3.34171 10.9512 3.14645 11.1464Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
