import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlChevronDoubleDownRegularSvg extends TypeSvgSvg {
  className: 'FlChevronDoubleDownRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlChevronDoubleDownRegularSvg';
    this.attr.addObj({
      name: 'FlChevronDoubleDownRegularSvg',
      title: 'FlChevronDoubleDownRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M15.8537 8.64582C16.0493 8.84073 16.0499 9.15731 15.855 9.35292L10.39 14.8374C10.1751 15.0531 9.82574 15.0531 9.6108 14.8374L4.14582 9.35292C3.9509 9.15731 3.95147 8.84073 4.14708 8.64582C4.34269 8.4509 4.65927 8.45147 4.85418 8.64708L10.0004 13.8117L15.1466 8.64708C15.3415 8.45147 15.6581 8.4509 15.8537 8.64582ZM15.8537 4.64582C16.0493 4.84073 16.0499 5.15731 15.855 5.35292L10.39 10.8374C10.1751 11.0531 9.82574 11.0531 9.6108 10.8374L4.14582 5.35292C3.9509 5.15731 3.95147 4.84073 4.14708 4.64582C4.34269 4.4509 4.65927 4.45147 4.85418 4.64708L10.0004 9.81166L15.1466 4.64708C15.3415 4.45147 15.6581 4.4509 15.8537 4.64582Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
