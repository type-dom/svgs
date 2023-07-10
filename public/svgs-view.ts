import { fromEvent } from 'rxjs';
import { SVGSRoot } from './svgs-root';
// ui components 展示页面
fromEvent(document, 'DOMContentLoaded').subscribe(() => {
  // console.log('form mode document DOMContentLoaded, e is ', e);
  const uiEl = document.querySelector('#svg-view-ref') as HTMLElement;
  console.log('uiEl is ', uiEl);
  if (uiEl) {
    const view = new SVGSRoot(uiEl);
    console.log('view is ', view);
  }
});
