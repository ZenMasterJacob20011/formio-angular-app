import {Component, Input, OnInit} from '@angular/core';
import {FormioForm, FormioService} from '@formio/angular';
import {FormioEmbedModule} from '@formio/angular/embed';

@Component({
  selector: 'app-edit-tab',
  imports: [
    FormioEmbedModule
  ],
  templateUrl: './edit-tab.component.html',
  styleUrl: './edit-tab.component.css'
})
export class EditTabComponent implements OnInit{
  @Input() form!: FormioForm & {_id?: string}
  formioService: FormioService | undefined
  constructor() {

  }

  ngOnInit(): void {
    this.formioService = new FormioService(`http://localhost:3001/form/${this.form._id}`);
  }

  saveForm(){
    this.formioService?.saveForm(this.form).subscribe({
      next(value){
      }
    });
  }

}
