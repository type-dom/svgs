import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdImageSvg extends TypeSvgSvg {
  className: 'TdImageSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdImageSvg';
    this.addAttrObj({
      name: 'TdImageSvg',
      title: 'TdImageSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M368 480c-62.4 0-112-49.6-112-112s49.6-112 112-112 112 49.6 112 112-49.6 112-112 112z m0-160c-27.2 0-48 20.8-48 48s20.8 48 48 48 48-20.8 48-48-20.8-48-48-48z m464 608H192c-52.8 0-96-43.2-96-96V192c0-52.8 43.2-96 96-96h640c52.8 0 96 43.2 96 96v640c0 52.8-43.2 96-96 96zM192 160c-17.6 0-32 14.4-32 32v640c0 17.6 14.4 32 32 32h640c17.6 0 32-14.4 32-32V192c0-17.6-14.4-32-32-32H192z m259.2 556.8c-25.6 0-51.2-11.2-70.4-30.4l-38.4-40c-12.8-12.8-33.6-12.8-46.4 0l-49.6 52.8c-12.8 12.8-32 12.8-44.8 1.6s-12.8-32-1.6-44.8l49.6-52.8c17.6-19.2 43.2-30.4 68.8-30.4s51.2 11.2 70.4 30.4l38.4 40c12.8 12.8 33.6 12.8 46.4 0l160-168c17.6-19.2 43.2-30.4 70.4-30.4s51.2 11.2 70.4 30.4L920 628.8c12.8 12.8 11.2 33.6-1.6 44.8-12.8 12.8-33.6 11.2-44.8-1.6L728 518.4c-12.8-12.8-33.6-12.8-46.4 0L521.6 688c-19.2 17.6-44.8 28.8-70.4 28.8z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
