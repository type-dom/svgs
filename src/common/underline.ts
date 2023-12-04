import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class TdUnderlineSvg extends TypeSvgSvg {
  className: 'TdUnderlineSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdUnderlineSvg';
    this.addAttrObj({
      name: 'TdUnderlineSvg',
      title: 'TdUnderlineSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M244.80391196 930.26336805v-53.30830343l534.39217608-4.84906561v53.29783023L244.80391196 930.26336805zM753.79871378 521.41276965q0 273.50615719-248.10878291 273.50615797-237.74037025 0-237.74037027-263.92323078V139.30010844h83.26149514v387.93572969q0 193.57512211 162.33373288 193.5751221 156.94006385 0 156.94006386-187.3331282V139.24774305H753.79871378z',
    );
    this.childNodes.push(path0);
  }
}
