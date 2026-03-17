import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlPresenceAwayRegularSvg extends TypeSvgSvg {
  className: 'FlPresenceAwayRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlPresenceAwayRegularSvg';
   addAttrObj(this, {
      name: 'FlPresenceAwayRegularSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M10 9.58622V6.0083C10 5.45602 9.55229 5.0083 9 5.0083C8.44771 5.0083 8 5.45602 8 6.0083V10.0004C8 10.2656 8.10536 10.52 8.29289 10.7075L11.2929 13.7075C11.6834 14.0981 12.3166 14.0981 12.7071 13.7075C13.0976 13.317 13.0976 12.6838 12.7071 12.2933L10 9.58622ZM0 9.99538C0 4.47508 4.47508 0 9.99538 0C15.5157 0 19.9908 4.47508 19.9908 9.99538C19.9908 15.5157 15.5157 19.9908 9.99538 19.9908C4.47508 19.9908 0 15.5157 0 9.99538ZM9.99538 2C5.57965 2 2 5.57965 2 9.99538C2 14.4111 5.57965 17.9908 9.99538 17.9908C14.4111 17.9908 17.9908 14.4111 17.9908 9.99538C17.9908 5.57965 14.4111 2 9.99538 2Z',
    );
    this.addChild(path0);
  }
}
