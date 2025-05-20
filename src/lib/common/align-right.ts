import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdAlignRightSvg extends TypeSvgSvg {
  className: 'TdAlignRightSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'TdAlignRightSvg';
    this.attr.addObj({
      name: 'TdAlignRightSvg',
      title: 'TdAlignRightSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M162.304 186.88H865.28v63.488H162.304zM330.752 376.832H865.28V440.32H330.752zM162.304 567.296H865.28v63.488H162.304zM330.752 757.248H865.28v63.488H330.752z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
