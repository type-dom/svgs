import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlPipelineFilledSvg extends TypeSvgSvg {
  className: 'FlPipelineFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlPipelineFilledSvg';
    this.attr.addObj({
      name: 'FlPipelineFilledSvg',
      title: 'FlPipelineFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M2 5.5C2 4.67157 2.67157 4 3.5 4C4.32829 4 4.99978 4.67135 5 5.49959L5 14.5011C4.99938 15.329 4.32805 16 3.5 16C2.67157 16 2 15.3284 2 14.5V5.5ZM15 5.5V14.5C15 15.3284 15.6716 16 16.5 16C17.3284 16 18 15.3284 18 14.5V5.5C18 4.67157 17.3284 4 16.5 4C15.6716 4 15 4.67157 15 5.5ZM14 14L14 6H6L6 14H14Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
