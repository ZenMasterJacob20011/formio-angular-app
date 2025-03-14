import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPanelService {

  private _open: boolean
  constructor() {
    this._open = false;
  }

  toggleOpen(){
    return this.open = !this.open;
  }

  get open(): boolean {
    return this._open;
  }

  set open(isOpen) {
    this._open = isOpen;
  }
}
