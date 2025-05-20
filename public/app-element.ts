import { Br, ITypeRootOption, TypeRoot } from '@type-dom/framework';
import { CommonSvgList } from './common-svg-list';
import { ElementPlusSvgList } from './element-plus-svg-list';
import { OtherSvgList } from './other-svg-list';
export class AppElement extends TypeRoot {
  className: 'SVGSRoot';
  constructor(option: ITypeRootOption) {
    super(option);
    console.log('SVGSView constructor . ');
    this.className = 'SVGSRoot';
    this.addStyleObj({
      padding: '30px'
    });
    this.createItems(this, [
      {
        TypeClass: CommonSvgList,
      },
      {
        TypeClass: ElementPlusSvgList,
      },
      {
        TypeClass: OtherSvgList,
      },
      {
        TypeClass: Br
      }
    ]);
  }
}
