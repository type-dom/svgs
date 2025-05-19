import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlJoystickFilledSvg extends TypeSvgSvg {
  className: 'FlJoystickFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlJoystickFilledSvg';
    this.attr.addObj({
      name: 'FlJoystickFilledSvg',
      title: 'FlJoystickFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M10.5 7.95852C11.9189 7.72048 13 6.4865 13 5C13 3.34315 11.6569 2 10 2C8.34315 2 7 3.34315 7 5C7 6.4865 8.08114 7.72048 9.5 7.95852V11H7.5C6.67157 11 6 11.6716 6 12.5V13H14V12.5C14 11.6716 13.3284 11 12.5 11H10.5V7.95852ZM3 16C3 14.8954 3.89543 14 5 14H15C16.1046 14 17 14.8954 17 16V17.5C17 17.7761 16.7761 18 16.5 18H3.5C3.22386 18 3 17.7761 3 17.5V16Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
