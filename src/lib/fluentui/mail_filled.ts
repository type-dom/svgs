import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlMailFilledSvg extends TypeSvgSvg {
  className: 'FlMailFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlMailFilledSvg';
    this.attr.addObj({
      name: 'FlMailFilledSvg',
      title: 'FlMailFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M18 7.373V14.5C18 15.8807 16.8807 17 15.5 17H4.5C3.11929 17 1.99992 15.8807 1.99992 14.5V7.373L9.74649 11.931C9.90297 12.023 10.097 12.023 10.2535 11.931L18 7.373ZM15.5 4C16.7871 4 17.847 4.9726 17.9848 6.22293L10 10.9199L2.01518 6.22293C2.15304 4.9726 3.21294 4 4.5 4H15.5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
