import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlMaximizeFilledSvg extends TypeSvgSvg {
  className: 'FlMaximizeFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlMaximizeFilledSvg';
    this.attr.addObj({
      name: 'FlMaximizeFilledSvg',
      title: 'FlMaximizeFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3 5.25C3 4.00736 4.00736 3 5.25 3H14.75C15.9926 3 17 4.00736 17 5.25V14.75C17 15.9926 15.9926 17 14.75 17H5.25C4.00736 17 3 15.9926 3 14.75V5.25ZM5.25 4.5C4.83579 4.5 4.5 4.83579 4.5 5.25V14.75C4.5 15.1642 4.83579 15.5 5.25 15.5H14.75C15.1642 15.5 15.5 15.1642 15.5 14.75V5.25C15.5 4.83579 15.1642 4.5 14.75 4.5H5.25Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
