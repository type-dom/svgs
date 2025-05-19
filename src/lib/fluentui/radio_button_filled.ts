import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlRadioButtonFilledSvg extends TypeSvgSvg {
  className: 'FlRadioButtonFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlRadioButtonFilledSvg';
    this.attr.addObj({
      name: 'FlRadioButtonFilledSvg',
      title: 'FlRadioButtonFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
