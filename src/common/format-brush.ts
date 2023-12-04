import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class TdFormatBrushSvg extends TypeSvgSvg {
  className: 'TdFormatBrushSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdFormatBrushSvg';
    this.addAttrObj({
      name: 'TdFormatBrushSvg',
      title: 'TdFormatBrushSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M701.248 177.6l175.104-113.024 83.456 114.88-131.136 162.304-127.424-164.16z m-133.376-61.568c51.264 6.976 300.608 346.624 294.272 384.704s-145.536 143.68-145.536 143.68L400.64 238.592s116.032-129.6 167.232-122.56zM370.368 288.448l305.024 396.672-187.136 272L65.664 359.04s83.776-3.84 153.536-24.32c45.632-13.504 151.232-46.272 151.168-46.272z',
    );
    this.childNodes.push(path0);
  }
}
