import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdSignatureSvg extends TypeSvgSvg {
  className: 'TdSignatureSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdSignatureSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData('M894.34557 663.043065l-284.129153-46.1419a1019.827981 1019.827981 0 0 1 40.288589-233.370095c32.604582-34.238802 51.516304-80.137155 51.516304-128.74113 0-2.827395-0.073678-5.638417-0.198522-8.435113l0.198522-0.454348h-0.215918C697.164698 146.925281 615.457792 68.104097 515.334443 68.104097S333.505211 146.925281 328.863495 245.900479h-0.215918l0.198521 0.454348c-0.124843 2.796696-0.198521 5.607718-0.198521 8.435113 0 48.599881 18.908652 94.495164 51.508117 128.732943a1019.625366 1019.625366 0 0 1 40.298822 233.379305l-284.131199 46.1419v0.045026c-22.385846 3.62762-38.800701 22.50148-38.810934 44.623313v97.439216c0 24.995277 20.785396 45.257763 46.424332 45.257763h6.91448v11.852956c0 25.148773 9.600659 49.2681 26.688849 67.051115 17.08819 17.783015 40.265052 27.773554 64.432475 27.773554H788.696368c24.166399 0 47.343261-9.990538 64.432475-27.773554 17.08819-17.783015 26.688849-41.902342 26.688849-67.051115v-11.852956h6.91448c25.63996 0 46.424332-20.262486 46.424332-45.257763v-97.439216c0.01228-22.140253-16.407692-41.038672-38.810934-44.669362zM834.258053 862.261339c0 26.185382-20.397562 47.412846-45.560662 47.412846H241.972519c-25.162076 0-45.560662-21.227464-45.560662-47.412846v-11.852956h637.845173v11.852956z');
    this.childNodes.push(path0);
  }
}