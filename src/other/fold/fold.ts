import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class FoldSvg extends TypeSvgSvg {
  className: 'FoldSvg';
  childNodes: [SvgPath];
  path: SvgPath;
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'FoldSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
      name: 'fold-svg',
    });
    this.resetSize(16, 16);
    this.path = new SvgPath(this);
    this.path.setData(
      'M848 128A48 48 0 0 1 896 176v672a48 48 0 0 1-48 48h-672A48 48 0 0 1 128 848v-672A48 48 0 0 1 176 128h672z',
      'M832 192H192v640h640V192z m-128 288a32 32 0 0 1 0 64H320a32 32 0 0 1 0-64h384z',
    );
    this.childNodes = [this.path];
  }
}
