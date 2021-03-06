import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {PlaceholderDirective} from "./form/placeholder.directive";
import {FormComponent} from "./form/form.component";
import {BoxOption} from "./pmt-fast-report-box/pmt-fast-report-box.interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  @ViewChild(PlaceholderDirective, {static: true}) addHost : PlaceholderDirective | undefined;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(FormComponent);
    this.addHost?.viewContainerRef.clear();
    const component = this.addHost?.viewContainerRef.createComponent(componentFactory);
    if(component?.instance){
      component.instance.form = {
        "title": "My Test Form",
        "components": [
          {
            "type": "textfield",
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "First Name",
            "key": "firstName",
            "placeholder": "Enter your first name",
            "prefix": "",
            "suffix": "",
            "multiple": false,
            "defaultValue": "",
            "protected": false,
            "unique": false,
            "persistent": true,
            "validate": {
              "required": true,
              "minLength": 2,
              "maxLength": 10,
              "pattern": "",
              "custom": "",
              "customPrivate": false
            },
            "conditional": {
              "eq": ""
            }
          },
          {
            "type": "textfield",
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "Last Name",
            "key": "lastName",
            "placeholder": "Enter your last name",
            "prefix": "",
            "suffix": "",
            "multiple": false,
            "defaultValue": "",
            "protected": true,
            "unique": false,
            "persistent": true,
            "validate": {
              "required": true,
              "minLength": 2,
              "maxLength": 10,
              "pattern": "",
              "custom": "",
              "customPrivate": false
            },
            "conditional": {
              "eq": ""
            }
          },
          {
            "type": "email",
            "input": true,
            "tableView": true,
            "inputType": "email",
            "inputMask": "",
            "label": "email",
            "key": "email",
            "placeholder": "Enter your email",
            "prefix": "",
            "suffix": "",
            "multiple": false,
            "defaultValue": "",
            "protected": true,
            "unique": false,
            "persistent": true,
            "validate": {
              "required": true ,
              "minLength":"",
              "maxLength": "",
              "pattern": "",
              "custom": "",
              "customPrivate": false
            },
            "conditional": {
              "eq": ""
            }
          },
          {
            "input": true,
            "label": "Submit",
            "tableView": false,
            "key": "submit",
            "size": "md",
            "leftIcon": "",
            "rightIcon": "",
            "block": false,
            "action": "submit",
            "disableOnInvalid": true,
            "theme": "primary",
            "type": "button"
          }
        ],

      };
      component.instance.renderOptions =  {
        "language": "ir",
        "i18n": {
          "ir": {
            'First Name': '??????',
            'Last Name': '?????? ????????????????',
            'Enter your first name': '???????? ?????? ?????? ???? ???????? ????????',
            'Enter your last name': '???????? ?????? ???????????????? ?????? ???? ???????? ????????',
            'email': '??????????',
            'Enter your email': '?????????? ?????? ???? ???????? ????????',
            'Submit': '??????????',
            minLength : ".{{field}} ???????? ???????????? ????  {{length}} ?????? ???????? ",
            error : "???????? ???????? ?????? ???? ?????????? ???????? ?????? ?????????? ????????",
            invalid_date :"{{field}} ?????????? ?????????? ????????",
            invalid_email : "{{field}}  ???????????? ????????",
            invalid_regex : "{{field}} does not match the pattern {{regex}}.",
            mask : "{{field}} does not match the mask.",
            max : "{{field}} ?????????? ????????????  {{max}}????????",
            maxLength : "{{field}} ???????? ???????? ????  {{length}} characters???????? ",
            min : "{{field}} ???????????????? ????????  {{min}}???????? ",
            next : "??????",
            pattern : "{{field}} ???? ???????? ???? ?????????? ??????????{{pattern}}",
            previous : "??????",
            required : "{{field}} ???????????? ??????"
          }
        }
      }
    }
    component?.instance.formSubmit.subscribe(value => {
      console.log(value.data)
    })

  }

  successBox: BoxOption = {
    title: 'accepted',
    subtitle: '125',
    class: 'bg-success',
    avatar: {
      icon: 'done',
      class: 'bg-light'
    },
    actions:[
      {
        title: 'more detail',
        icon: 'info',
        url: ''
      }
    ]
  }

}
