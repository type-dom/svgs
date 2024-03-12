import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdUnfoldSvg extends TypeSvgSvg {
  className: 'TdUnfoldSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdUnfoldSvg';
    this.addAttrObj({
      name: 'TdUnfoldSvg',
      title: 'TdUnfoldSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M877.714286 768c0 21.942857-14.628571 36.571429-36.571429 36.571429h-585.142857c-21.942857 0-36.571429-14.628571-36.571429-36.571429v-585.142857c0-21.942857 14.628571-36.571429 36.571429-36.571429h585.142857c21.942857 0 36.571429 14.628571 36.571429 36.571429v585.142857zM841.142857 73.142857h-585.142857C197.485714 73.142857 146.285714 124.342857 146.285714 182.857143v585.142857c0 58.514286 51.2 109.714286 109.714286 109.714286h585.142857c58.514286 0 109.714286-51.2 109.714286-109.714286v-585.142857c0-58.514286-51.2-109.714286-109.714286-109.714286z m-146.285714 365.714286H585.142857V329.142857c0-21.942857-14.628571-36.571429-36.571428-36.571428s-36.571429 14.628571-36.571429 36.571428V438.857143H402.285714c-21.942857 0-36.571429 14.628571-36.571428 36.571428s14.628571 36.571429 36.571428 36.571429H512v109.714286c0 21.942857 14.628571 36.571429 36.571429 36.571428s36.571429-14.628571 36.571428-36.571428V512h109.714286c21.942857 0 36.571429-14.628571 36.571428-36.571429S716.8 438.857143 694.857143 438.857143z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
