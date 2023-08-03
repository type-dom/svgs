import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdIconVerticalAlignMiddlSvg extends TypeSvgSvg {
  className: 'TdIconVerticalAlignMiddlSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdIconVerticalAlignMiddlSvg';
    this.addAttrObj({
      viewBox: '0 0 1068 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M948.855172 523.034483H181.075862c-4.965517 0-8.937931 3.972414-8.937931 8.827586v66.206897c0 4.855172 3.972414 8.827586 8.937931 8.827586h767.77931c4.965517 0 8.937931-3.972414 8.937931-8.827586v-66.206897c0-4.855172-3.972414-8.827586-8.937931-8.827586z m-390.17931-82.427586c3.2 4.082759 9.37931 4.082759 12.468966 0l111.227586-140.689656c4.082759-5.186207 0.441379-12.910345-6.289655-12.910344H606.896552V114.758621c0-4.855172-3.972414-8.827586-8.827586-8.827587h-66.206897c-4.855172 0-8.827586 3.972414-8.827586 8.827587v172.137931h-69.296552c-6.62069 0-10.372414 7.724138-6.289655 12.910345l111.227586 140.8z m12.57931 248.717241c-3.2-4.082759-9.37931-4.082759-12.468965 0L447.558621 830.124138c-4.082759 5.186207-0.441379 12.910345 6.289655 12.910345H523.034483v172.137931c0 4.855172 3.972414 8.827586 8.827586 8.827586h66.206897c4.855172 0 8.827586-3.972414 8.827586-8.827586V843.034483h69.296551c6.62069 0 10.372414-7.724138 6.289656-12.910345L571.255172 689.324138z',
    );
    this.childNodes.push(path0);
  }
}
