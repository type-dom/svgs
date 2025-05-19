import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlPreviousFrameRegularSvg extends TypeSvgSvg {
  className: 'FlPreviousFrameRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlPreviousFrameRegularSvg';
    this.attr.addObj({
      name: 'FlPreviousFrameRegularSvg',
      title: 'FlPreviousFrameRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M15.5002 3C15.2241 3 15.0002 3.22386 15.0002 3.5V16.5C15.0002 16.7761 15.2241 17 15.5002 17C15.7764 17 16.0002 16.7761 16.0002 16.5V3.5C16.0002 3.22386 15.7764 3 15.5002 3ZM10.0534 3.21436C10.8838 2.65676 12.0002 3.25186 12.0002 4.25211V15.7521C12.0002 16.7562 10.876 17.3505 10.0462 16.785L1.54698 10.9921C0.815925 10.4938 0.819658 9.41464 1.55415 8.92144L10.0534 3.21436ZM11.0002 4.25211C11.0002 4.05206 10.7769 3.93304 10.6109 4.04456L2.11161 9.75164C1.96471 9.85028 1.96397 10.0661 2.11018 10.1658L10.6094 15.9586C10.7754 16.0717 11.0002 15.9529 11.0002 15.7521V4.25211Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
