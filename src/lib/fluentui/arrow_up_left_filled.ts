import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlArrowUpLeftFilledSvg extends TypeSvgSvg {
  className: 'FlArrowUpLeftFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlArrowUpLeftFilledSvg';
    this.attr.addObj({
      name: 'FlArrowUpLeftFilledSvg',
      title: 'FlArrowUpLeftFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M12 3.75C12 3.33579 11.6642 3 11.25 3H3.75C3.33579 3 3 3.33579 3 3.75V11.25C3 11.6642 3.33579 12 3.75 12C4.16421 12 4.5 11.6642 4.5 11.25V5.56064L15.7186 16.7791C16.0115 17.072 16.4864 17.072 16.7793 16.7791C17.0722 16.4862 17.0722 16.0113 16.7793 15.7184L5.56068 4.5H11.25C11.6642 4.5 12 4.16421 12 3.75Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
