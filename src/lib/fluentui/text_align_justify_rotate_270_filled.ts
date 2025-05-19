import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlTextAlignJustifyRotate270FilledSvg extends TypeSvgSvg {
  className: 'FlTextAlignJustifyRotate270FilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlTextAlignJustifyRotate270FilledSvg';
    this.attr.addObj({
      name: 'FlTextAlignJustifyRotate270FilledSvg',
      title: 'FlTextAlignJustifyRotate270FilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M4.25 18C3.83579 18 3.5 17.6642 3.5 17.25V2.75C3.5 2.33579 3.83579 2 4.25 2C4.66421 2 5 2.33579 5 2.75V17.25C5 17.6642 4.66421 18 4.25 18ZM9.25 18C8.83579 18 8.5 17.6642 8.5 17.25V2.75C8.5 2.33579 8.83579 2 9.25 2C9.66421 2 10 2.33579 10 2.75V17.25C10 17.6642 9.66421 18 9.25 18ZM13.5 17.25C13.5 17.6642 13.8358 18 14.25 18C14.6642 18 15 17.6642 15 17.25V2.75C15 2.33579 14.6642 2 14.25 2C13.8358 2 13.5 2.33579 13.5 2.75V17.25Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
