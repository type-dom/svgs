import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdAlignCenterSvg extends TypeSvgSvg {
  className: 'TdAlignCenterSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdAlignCenterSvg';
    this.addAttrObj({
      name: 'TdAlignCenterSvg',
      title: 'TdAlignCenterSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1462 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M364.15158697 353.04924526h741.54183589c14.61218387 0 27.05619893 5.2050163 37.45916992 15.5232382 10.33234661 10.41709569 15.50911346 22.84698604 15.50911346 37.48741935 0 14.61924623-5.17676685 27.04913656-15.50911346 37.45210753-10.40297098 10.33940898-22.84698604 15.52323819-37.45916992 15.5232382H364.15158697c-14.61924623 0-27.11976093-5.18382922-37.43092046-15.5232382-10.40297098-10.40297098-15.5656131-22.83992366-15.56561237-37.45210753 0-14.64043332 5.16264212-27.07032366 15.56561237-37.48741935 10.31115879-10.31115879 22.8116735-15.52323819 37.43092046-15.5232382m-105.93656602 211.85194421h953.37259302c14.61924623 0 27.07738602 5.15557975 37.48035699 15.55148836 10.31115879 10.33234661 15.50911346 22.82579894 15.50911346 37.43091973 0 14.62630859-5.19089157 27.10563621-15.50911346 37.43091973-10.40297098 10.41003333-22.86817312 15.58680018-37.48035699 15.58680018H258.21502095c-14.61924623 0-27.07738602-5.17676685-37.49448172-15.57973783C210.42350516 644.98923375 205.21142577 632.50990616 205.21142577 617.89065992s5.21207939-27.10563621 15.50911346-37.43091972c10.41709569-10.41003333 22.88229858-15.55855001 37.49448172-15.55855074m105.93656601 211.89431911h741.54183589c14.61218387 0 27.05619893 5.12026722 37.45916992 15.53736293 10.33234661 10.33234661 15.50911346 22.8116735 15.50911346 37.43092044 0 14.6474957-5.17676685 27.13388565-15.50911346 37.43091972-10.40297098 10.41003333-22.84698604 15.57267547-37.45916992 15.57267547H364.15158697c-14.61924623 0-27.11976093-5.16264212-37.43092046-15.5656131-10.40297098-10.30409643-15.5656131-22.7904864-15.56561237-37.43091972 0-14.62630859 5.16264212-27.10563621 15.56561237-37.43091973 10.31115879-10.42415807 22.8116735-15.53736293 37.43092046-15.53736364M258.21502095 141.21142578h953.37259302c14.61924623 0 27.07738602 5.15557975 37.48035699 15.55148764 10.31115879 10.30409643 15.50911346 22.8116735 15.50911346 37.43092045 0 14.62630859-5.19089157 27.11976093-15.50911346 37.43091973-10.40297098 10.42415807-22.86817312 15.55855001-37.48035699 15.55855001H258.21502095c-14.61924623 0-27.07738602-5.13439194-37.49448172-15.55148764C210.42350516 221.32065718 205.21142577 208.82014247 205.21142577 194.20089625c0-14.63337096 5.21207939-27.13388565 15.50911346-37.43092046C231.13763494 146.35288008 243.60283709 141.21142578 258.21502095 141.21142578',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
