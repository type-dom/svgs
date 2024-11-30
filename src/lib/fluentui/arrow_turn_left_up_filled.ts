import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlArrowTurnLeftUpFilledSvg extends TypeSvgSvg {
  className: 'FlArrowTurnLeftUpFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlArrowTurnLeftUpFilledSvg';
    this.attr.addObj({
      name: 'FlArrowTurnLeftUpFilledSvg',
      title: 'FlArrowTurnLeftUpFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3.21967 9.28033C2.92678 8.98744 2.92678 8.51256 3.21967 8.21967L7.21967 4.21967C7.51256 3.92678 7.98744 3.92678 8.28033 4.21967L12.2803 8.21967C12.5732 8.51256 12.5732 8.98744 12.2803 9.28033C11.9874 9.57322 11.5126 9.57322 11.2197 9.28033L8.5 6.56066V13C8.5 13.8284 9.17157 14.5 10 14.5H16.25C16.6642 14.5 17 14.8358 17 15.25C17 15.6642 16.6642 16 16.25 16H10C8.34315 16 7 14.6569 7 13L7 6.56066L4.28033 9.28033C3.98744 9.57322 3.51256 9.57322 3.21967 9.28033Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
