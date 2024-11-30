import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlLineFilledSvg extends TypeSvgSvg {
  className: 'FlLineFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlLineFilledSvg';
    this.attr.addObj({
      name: 'FlLineFilledSvg',
      title: 'FlLineFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M17.7803 2.21967C18.0732 2.51256 18.0732 2.98744 17.7803 3.28033L3.28033 17.7803C2.98744 18.0732 2.51256 18.0732 2.21967 17.7803C1.92678 17.4874 1.92678 17.0126 2.21967 16.7197L16.7197 2.21967C17.0126 1.92678 17.4874 1.92678 17.7803 2.21967Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
