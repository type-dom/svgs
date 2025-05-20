import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdModuleSvg extends TypeSvgSvg {
  className: 'TdModuleSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'TdModuleSvg';
    this.attr.addObj({
      name: 'TdModuleSvg',
      title: 'TdModuleSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M85.344 0v1024h853.344V0H85.344z m768 938.656H170.688V85.312h682.656v853.344z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M256 170.656h512v170.656H256V170.656zM426.656 426.656H768V512H426.656v-85.344zM426.656 597.344H768v85.344H426.656v-85.344zM426.656 768H768v85.344H426.656V768zM256 426.656h85.344v426.656H256V426.656z',
    );
    this.addChild(path1);
    this.useParams(params);
  }
}
