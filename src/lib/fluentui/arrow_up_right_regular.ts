import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlArrowUpRightRegularSvg extends TypeSvgSvg {
  className: 'FlArrowUpRightRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlArrowUpRightRegularSvg';
    this.attr.addObj({
      name: 'FlArrowUpRightRegularSvg',
      title: 'FlArrowUpRightRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M8.50005 4C8.2239 4 8.00005 3.77614 8.00005 3.5C8.00005 3.22386 8.2239 3 8.50005 3H16.5C16.7761 3 17 3.22386 17 3.5V11.5C17 11.7761 16.7761 12 16.5 12C16.2239 12 16 11.7761 16 11.5V4.7071L3.85355 16.8536C3.65829 17.0488 3.34171 17.0488 3.14645 16.8536C2.95118 16.6583 2.95119 16.3417 3.14645 16.1464L15.2929 4H8.50005Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
