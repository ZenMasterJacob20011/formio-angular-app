import { Component } from '@angular/core';
import {FormioForm, FormioModule} from '@formio/angular';

@Component({
  selector: 'app-access-tab',
  imports: [
    FormioModule
  ],
  templateUrl: './access-tab.component.html',
  styleUrl: './access-tab.component.css'
})
export class AccessTabComponent {
  accessForm: FormioForm
  constructor() {
    this.accessForm = this.getAccessForm();
  }


  getAccessForm(): FormioForm{
    return {
      components: [
        {
          type: "container",
          key: "submissionAccess",
          components: [
            {
              label: "<b>Read Own Submissions</b>",
              labelPosition: "left-left",
              widget: "choicesjs",
              tableView: true,
              multiple: true,
              dataSrc: "values",
              data: {

              },
              idPath: "_id",
              template: "<span>{{ item.label }}</span>",
              key: "read_own",
              type: "select",
              disableLimit: false,
              noRefreshOnScroll: false,
              input: true,
            },
            {
              label: "<b>Update Own Submissions</b>",
              labelPosition: "left-left",
              widget: "choicesjs",
              tableView: true,
              multiple: true,
              dataSrc: "values",
              data: {

              },
              key: "update_own",
              template: "<span>{{ item.label }}</span>",
              type: "select",
              disableLimit: false,
              noRefreshOnScroll: false,
              input: true,
            },
            {
              label: "<b>Delete Own Submissions</b>",
              labelPosition: "left-left",
              widget: "choicesjs",
              tableView: true,
              multiple: true,
              dataSrc: "values",
              template: "<span>{{ item.label }}</span>",
              data: {

              },
              key: "delete_own",
              type: "select",
              disableLimit: false,
              noRefreshOnScroll: false,
              input: true,
            },
            {
              label: "<b>Read All Submissions</b>",
              labelPosition: "left-left",
              widget: "choicesjs",
              tableView: true,
              multiple: true,
              dataSrc: "values",
              template: "<span>{{ item.label }}</span>",
              data: {

              },
              key: "read_all",
              type: "select",
              disableLimit: false,
              noRefreshOnScroll: false,
              input: true,
            },
            {
              label: "<b>Update All Submissions</b>",
              labelPosition: "left-left",
              widget: "choicesjs",
              tableView: true,
              multiple: true,
              dataSrc: "values",
              template: "<span>{{ item.label }}</span>",
              data: {

              },
              key: "update_all",
              type: "select",
              disableLimit: false,
              noRefreshOnScroll: false,
              input: true,
            },
            {
              label: "<b>Delete All Submissions</b>",
              labelPosition: "left-left",
              widget: "choicesjs",
              template: "<span>{{ item.label }}</span>",
              tableView: true,
              multiple: true,
              dataSrc: "values",
              data: {

              },
              key: "delete_all",
              type: "select",
              disableLimit: false,
              noRefreshOnScroll: false,
              input: true,
            },
          ],
        },
        {
          type: "container",
          key: "access",
          components: [
            {
              label: "<b>Read Own Forms</b>",
              labelPosition: "left-left",
              widget: "choicesjs",
              tableView: true,
              multiple: true,
              dataSrc: "values",
              data: {

              },
              idPath: "_id",
              template: "<span>{{ item.label }}</span>",
              key: "read_own",
              type: "select",
              disableLimit: false,
              noRefreshOnScroll: false,
              input: true,
            },
            {
              label: "<b>Update Own Forms</b>",
              labelPosition: "left-left",
              widget: "choicesjs",
              tableView: true,
              multiple: true,
              dataSrc: "values",
              data: {

              },
              template: "<span>{{ item.label }}</span>",
              key: "update_own",
              type: "select",
              disableLimit: false,
              noRefreshOnScroll: false,
              input: true,
            },
            {
              label: "<b>Delete Own Forms</b>",
              labelPosition: "left-left",
              widget: "choicesjs",
              tableView: true,
              multiple: true,
              dataSrc: "values",
              data: {

              },
              template: "<span>{{ item.label }}</span>",
              key: "delete_own",
              type: "select",
              disableLimit: false,
              noRefreshOnScroll: false,
              input: true,
            },
            {
              label: "<b>Read All Forms</b>",
              labelPosition: "left-left",
              widget: "choicesjs",
              tableView: true,
              multiple: true,
              dataSrc: "values",
              data: {

              },
              template: "<span>{{ item.label }}</span>",
              key: "read_all",
              type: "select",
              disableLimit: false,
              noRefreshOnScroll: false,
              input: true,
            },
            {
              label: "<b>Update All Forms</b>",
              labelPosition: "left-left",
              widget: "choicesjs",
              tableView: true,
              multiple: true,
              dataSrc: "values",
              data: {

              },
              template: "<span>{{ item.label }}</span>",
              key: "update_all",
              type: "select",
              disableLimit: false,
              noRefreshOnScroll: false,
              input: true,
            },
            {
              label: "<b>Delete All Forms</b>",
              labelPosition: "left-left",
              widget: "choicesjs",
              tableView: true,
              multiple: true,
              dataSrc: "values",
              data: {

              },
              template: "<span>{{ item.label }}</span>",
              key: "delete_all",
              type: "select",
              disableLimit: false,
              noRefreshOnScroll: false,
              input: true,
            },
          ],
        },
        {
          type: "button",
          label: "Save Settings",
          key: "saveSettings",
          input: true,
          tableView: false,
          customClass: "button save-access",
          action: "event",
          event: "saveSettings",
        },
      ]
    }
  }
}
