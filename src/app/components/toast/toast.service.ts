import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: any[] = [];

  constructor() { }

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  success(textOrTpl: string) {
    this.toasts.push({ textOrTpl, ...{ classname: 'bg-success text-light', delay: 5000 } });
  }

  error(textOrTpl: string, delay: number = 15000) {
    this.toasts.push({ textOrTpl, ...{ classname: 'bg-danger text-light', delay: delay } });
  }

  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
