import {Component, OnInit} from '@angular/core';
import {FormioEmbedModule} from '@formio/angular/embed';
import {editType, FormEditComponent} from '../../form-edit/form-edit.component';
import {formType} from '../../../app.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-tab',
  imports: [
    FormioEmbedModule,
    FormEditComponent
  ],
  templateUrl: './edit-tab.component.html',
  styleUrl: './edit-tab.component.css',
})
export class EditTabComponent implements OnInit {
  formType: formType | undefined

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.formType = this.activatedRoute.parent!.snapshot.paramMap.get('formType') as formType;
  }

  protected readonly editType = editType;
}
