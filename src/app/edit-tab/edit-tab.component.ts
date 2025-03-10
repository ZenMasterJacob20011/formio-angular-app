import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormioForm} from '@formio/angular';
import {FormioEmbedModule} from '@formio/angular/embed';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-edit-tab',
  imports: [
    FormioEmbedModule
  ],
  templateUrl: './edit-tab.component.html',
  styleUrl: './edit-tab.component.css'
})
export class EditTabComponent implements AfterViewInit, OnInit, OnChanges {
  @Input() form!: FormioForm
  constructor() {

  }

  ngAfterViewInit() {
    console.log(this.form);
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
