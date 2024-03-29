import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FileSvg extends TypeSvgSvg {
  className: 'FileSvg';
  childNodes: [SvgPath];
  path: SvgPath;
  constructor(config?: ITypeConfig) {
    super();
    this.className = 'FileSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
      name: 'file-svg',
    });
    this.resetSize(18, 18);
    this.path = new SvgPath({ parent: this });
    this.path.setData(
      'M834.6624 409.6a40.8576 40.8576 0 0 0-13.7728-30.63808l-254.32064-254.32064a40.87296 40.87296 0 0 0-31.1552-11.84768c-0.97792-0.07168-1.9456-0.1536-2.93376-0.1536H230.4a40.96 40.96 0 0 0-40.96 40.96v716.8a40.96 40.96 0 0 0 40.96 40.96h563.2a40.96 40.96 0 0 0 40.96-40.96V419.84c0-1.62304-0.11776-3.21536-0.3072-4.79232a40.6528 40.6528 0 0 0 0.4096-5.44768zM578.56 252.48256L694.71744 368.64H578.56V252.48256zM271.36 829.44V194.56h225.28v215.04a40.96 40.96 0 0 0 40.96 40.96h215.04v378.88H271.36z',
      'M371.2 660.48h133.12a40.96 40.96 0 0 0 0-81.92h-133.12a40.96 40.96 0 0 0 0 81.92zM650.24 696.32H363.52a40.96 40.96 0 0 0 0 81.92h286.72a40.96 40.96 0 0 0 0-81.92z',
    );
    this.childNodes = [this.path];
    this.setConfig(config);
  }
}
