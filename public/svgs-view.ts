import { fromEvent } from 'rxjs';
import { AppElement } from './app-element';
// ui components 展示页面
fromEvent(document, 'DOMContentLoaded').subscribe(() => {
  // console.log('form mode document DOMContentLoaded, e is ', e);
  const uiEl = document.querySelector('#svg-view-ref') as HTMLElement;
  console.log('uiEl is ', uiEl);
  if (uiEl) {
    const app = new AppElement({ el: uiEl });
    app.render();
    console.log('app is ', app);
  }
});
