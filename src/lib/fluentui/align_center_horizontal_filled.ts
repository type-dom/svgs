import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlAlignCenterHorizontalFilledSvg extends TypeSvgSvg {
  className: 'FlAlignCenterHorizontalFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlAlignCenterHorizontalFilledSvg';
    this.attr.addObj({
      name: 'FlAlignCenterHorizontalFilledSvg',
      title: 'FlAlignCenterHorizontalFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M18 9.5C18 9.77614 17.7761 10 17.5 10H16V12C16 13.1046 15.1046 14 14 14H13C11.8954 14 11 13.1046 11 12V10H9V14C9 15.1046 8.10457 16 7 16H6C4.89543 16 4 15.1046 4 14V10H2.5C2.22386 10 2 9.77614 2 9.5C2 9.22386 2.22386 9 2.5 9H4V5C4 3.89543 4.89543 3 6 3H7C8.10457 3 9 3.89543 9 5V9H11V7C11 5.89543 11.8954 5 13 5H14C15.1046 5 16 5.89543 16 7V9H17.5C17.7761 9 18 9.22386 18 9.5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
