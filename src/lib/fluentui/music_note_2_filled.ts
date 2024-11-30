import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlMusicNote2FilledSvg extends TypeSvgSvg {
  className: 'FlMusicNote2FilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlMusicNote2FilledSvg';
    this.attr.addObj({
      name: 'FlMusicNote2FilledSvg',
      title: 'FlMusicNote2FilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M15.9867 3.01576C15.8908 2.43018 15.2919 2.04148 14.7017 2.2259L7.70173 4.4134C7.28425 4.54387 7 4.9305 7 5.36788V13.5001C6.58217 13.1863 6.0628 13.0003 5.5 13.0003C4.11929 13.0003 3 14.1196 3 15.5003C3 16.881 4.11929 18.0003 5.5 18.0003C6.88071 18.0003 8 16.881 8 15.5003V8.36793L15 6.18043V11.5001C14.5822 11.1863 14.0628 11.0003 13.5 11.0003C12.1193 11.0003 11 12.1196 11 13.5003C11 14.881 12.1193 16.0003 13.5 16.0003C14.8807 16.0003 16 14.881 16 13.5003V3.18043C16 3.18044 16 3.18041 16 3.18043C16 3.12411 15.9954 3.06909 15.9867 3.01576Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
