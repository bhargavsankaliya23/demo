import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, ThemePalette, MAT_DATE_LOCALE } from '@angular/material/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.css']
})
export class FormElementComponent implements OnInit {

  l: number;
  p: number = 1;
  itemsPage: any;
  collection: any[] = []
  itemsPerPage: number
  userFile: any;
  filedocument: any;
  @ViewChild('filedocument') fileDocument: ElementRef;
  imgURLlogo: any;
  listData = [
    {name: "Option 1" , value :1},
    {name: "Option 2" , value :2},
    {name: "Option 3" , value :3}
  ]
  constructor() { 
    for (let i = 1; i <= 100; i++) {
      this.collection.push({name:"Name"+i});
    }
  }

  ngOnInit() {
    this.l = this.itemsPerPage = 10;
    
    
  }

  onDocumentChange(event) {

    this.userFile = event.target.files[0];
    // if (!!this.userFile) {
    //   this.documentError = false;
    // }
    // else {
    //   this.documentError = true
    // }
    this.filedocument = this.userFile.name;
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imgURLlogo = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
    this.fileDocument.nativeElement.value = "";
  }
  removeDocument() {
    this.userFile = null;
  }

}
