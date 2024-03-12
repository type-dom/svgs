import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdSkillSvg extends TypeSvgSvg {
  className: 'TdSkillSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdSkillSvg';
    this.addAttrObj({
      name: 'TdSkillSvg',
      title: 'TdSkillSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 128 128',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M31.652 93.206h33.401c1.44 2.418 3.077 4.663 4.93 6.692h-38.33v-6.692zm0-10.586h28.914a44.8 44.8 0 0 1-1.264-6.688h-27.65v6.688zm0-17.27H59.39c.288-2.286.714-4.532 1.34-6.687H31.65v6.687h.003zm53.913 44.84v5.85c0 2.798-2.095 5.075-4.667 5.075h-70.07c-2.576 0-4.663-2.277-4.663-5.075V31.26l23.22-20.96v22.25H17.16v6.688h18.39V6.688h45.348c2.576 0 4.667 2.277 4.667 5.066v20.009c1.987-.675 4.053-1.128 6.17-1.445v-18.56C91.738 5.28 86.874 0 80.902 0H31.15L0 28.118v87.917c0 6.48 4.859 11.759 10.832 11.759h70.07c5.974 0 10.837-5.27 10.837-11.759v-4.41c-2.117-.312-4.183-.765-6.17-1.435h-.004zM23.279 58.667h-7.96v6.688h7.96v-6.688zm-7.956 41.23h7.96v-6.691h-7.96v6.692zm7.956-23.96h-7.96v6.687h7.96v-6.688zm89.718-15.042l-4.896-4.07-12.447 17.613-11.19-9.305-3.762 5.311 16.091 13.38 16.204-22.929zM128 70.978c0-18.632-13.97-33.782-31.147-33.782-17.168 0-31.135 15.155-31.135 33.782 0 18.628 13.97 33.783 31.135 33.783 17.172 0 31.143-15.15 31.143-33.783H128zm-6.17 0c0 14.933-11.203 27.1-24.981 27.1-13.77 0-24.987-12.158-24.987-27.1 0-14.941 11.195-27.099 24.987-27.099 13.778 0 24.982 12.158 24.982 27.1z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
