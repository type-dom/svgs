import {SvgPath, TypeHtml, TypeSvgSvg} from "type-dom.ts";
export class TemplatesSvg extends TypeSvgSvg {
  className: 'TemplatesSvg';
  childNodes: [SvgPath];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TemplatesSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
      name: 'thumbnail-svg',
    });
    this.resetSize(24, 24);
    const path = new SvgPath(this);
    path.setData(
      'M866.304 793.6h-60.416v-51.2h60.416c16.384 0 29.696-13.312 29.696-29.696V157.696a29.696 29.696 0 0 0-29.696-29.696H311.296a29.696 29.696 0 0 0-29.696 29.696v60.416h-51.2V157.696c0-44.544 36.352-80.896 80.896-80.896h554.496c44.544 0 80.896 36.352 80.896 80.896v554.496c0.512 45.056-35.84 81.408-80.384 81.408z',
      'M763.904 896h-55.296v-51.2h55.296c16.384 0 29.696-13.312 29.696-29.696V260.096a29.696 29.696 0 0 0-29.696-29.696H208.896a29.696 29.696 0 0 0-29.696 29.696v55.296h-51.2V260.096c0-44.544 36.352-80.896 80.896-80.896h554.496c44.544 0 80.896 36.352 80.896 80.896v554.496c0.512 45.056-35.84 81.408-80.384 81.408z',
      'M661.504 998.4H106.496c-44.544 0-80.896-36.352-80.896-80.896V362.496c0-44.544 36.352-80.896 80.896-80.896h554.496c44.544 0 80.896 36.352 80.896 80.896v554.496c0.512 45.056-35.84 81.408-80.384 81.408zM106.496 332.8a29.696 29.696 0 0 0-29.696 29.696v554.496c0 16.384 13.312 29.696 29.696 29.696h554.496c16.384 0 29.696-13.312 29.696-29.696V362.496a29.696 29.696 0 0 0-29.696-29.696H106.496z'
    );
    this.childNodes = [path];
  }
}