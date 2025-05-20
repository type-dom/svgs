import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdAlignLeftSvg extends TypeSvgSvg {
  className: 'TdAlignLeftSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'TdAlignLeftSvg';
    this.attr.addObj({
      name: 'TdAlignLeftSvg',
      title: 'TdAlignLeftSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M162.304 186.88H865.28v63.488H162.304zM162.304 376.832h534.528V440.32H162.304zM162.304 567.296H865.28v63.488H162.304zM162.304 757.248h534.528v63.488H162.304z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
