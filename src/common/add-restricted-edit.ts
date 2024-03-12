import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdAddRestrictedEditSvg extends TypeSvgSvg {
  className: 'TdAddRestrictedEditSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdAddRestrictedEditSvg';
    this.addAttrObj({
      name: 'TdAddRestrictedEditSvg',
      title: 'TdAddRestrictedEditSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M435.556 516.331l-36.055 108.169 108.169-36.055c3.938-1.294 7.594-3.545 10.519-6.525l414.281-414.281c21.038-21.037 21.038-55.125 0-76.162s-55.125-21.038-76.163 0l-414.225 414.337c-2.981 2.925-5.23 6.525-6.525 10.519zM935.056 399.5h-58.669c-14.85 0-26.887 12.038-26.887 26.944v396.169c0 14.85-12.037 26.887-26.944 26.887h-621.113c-14.906 0-26.944-12.037-26.944-26.944v-621.113c0-14.906 12.037-26.944 26.944-26.944h396.169c14.85 0 26.887-12.037 26.887-26.944v-58.612c0-14.906-12.038-26.944-26.944-26.944h-508.613c-14.906 0-26.944 12.037-26.944 26.944v846.169c0 14.85 12.037 26.887 26.944 26.887h846.169c14.85 0 26.887-12.037 26.887-26.944v-508.613c0-14.906-12.037-26.944-26.944-26.944z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
