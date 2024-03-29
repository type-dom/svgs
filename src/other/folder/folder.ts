import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FolderSvg extends TypeSvgSvg {
  className: 'FolderSvg';
  childNodes: [SvgPath];
  constructor(config?: ITypeConfig) {
    super();
    this.className = 'FolderSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
      name: 'folder-svg',
    });
    this.resetSize(20, 20);
    const path = new SvgPath({ parent: this });
    path.setData(
      'M850.3296 374.9888v-45.2096c0-47.4624-38.4-100.5568-89.2416-100.5568h-224.8704l-6.7584-12.4416a62.976 62.976 0 0 0-56.32-33.8944H226.6624A84.6336 84.6336 0 0 0 143.0528 268.8v467.7632a84.6336 84.6336 0 0 0 83.6096 85.8624h578.56a84.6336 84.6336 0 0 0 83.6096-85.8624V449.5872c0-27.136-14.6944-54.2208-38.4-74.5472z m-64.4096-22.5792h-184.32l-30.72-58.7776h190.976c10.24 0 24.8832 19.2 24.8832 36.1472v22.5792z m38.4 96v286.976a21.0944 21.0944 0 0 1-19.2 21.4528h-578.56a20.48 20.48 0 0 1-19.2-21.4528V267.6736a21.0944 21.0944 0 0 1 19.2-21.4528h245.248l81.3568 153.6a33.28 33.28 0 0 0 28.2624 16.9472h209.92c12.4928 0.0512 32.9728 20.3776 32.9728 31.6416z',
    );
    this.childNodes = [path];
    this.setConfig(config);
  }
}
