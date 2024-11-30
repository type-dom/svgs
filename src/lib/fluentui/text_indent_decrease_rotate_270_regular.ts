import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlTextIndentDecreaseRotate270RegularSvg extends TypeSvgSvg {
  className: 'FlTextIndentDecreaseRotate270RegularSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlTextIndentDecreaseRotate270RegularSvg';
    this.attr.addObj({
      name: 'FlTextIndentDecreaseRotate270RegularSvg',
      title: 'FlTextIndentDecreaseRotate270RegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M10 2C10.2761 2 10.5 2.22386 10.5 2.5V12.5C10.5 12.7761 10.2761 13 10 13C9.72386 13 9.5 12.7761 9.5 12.5V2.5C9.5 2.22386 9.72386 2 10 2ZM6 5.5C6 5.22386 5.77614 5 5.5 5C5.22386 5 5 5.22386 5 5.5V12.5C5 12.7761 5.22386 13 5.5 13C5.77614 13 6 12.7761 6 12.5V5.5ZM15 5.5C15 5.22386 14.7761 5 14.5 5C14.2239 5 14 5.22386 14 5.5V12.5C14 12.7761 14.2239 13 14.5 13C14.7761 13 15 12.7761 15 12.5V5.5ZM8.85355 15.1464C8.65829 14.9512 8.34171 14.9512 8.14645 15.1464C7.95118 15.3417 7.95118 15.6583 8.14645 15.8536L9.64645 17.3536C9.84171 17.5488 10.1583 17.5488 10.3536 17.3536L11.8536 15.8536C12.0488 15.6583 12.0488 15.3417 11.8536 15.1464C11.6583 14.9512 11.3417 14.9512 11.1464 15.1464L10 16.2929L8.85355 15.1464Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
