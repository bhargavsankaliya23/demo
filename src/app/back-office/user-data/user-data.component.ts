import { Component, OnInit } from '@angular/core';
import { AdminLayoutService } from 'app/layouts/admin-layout/admin-layout.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
declare const $: any;

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  l: number;
  p: number = 1;
  itemsPage: any;
  itemsPerPage: number;
  totalItems: number;
  organizationList: any[] = [];
  allOrganizationList: any[] = [];
  OrganizationList: any[] = [];

  organizationForm: FormGroup;
  submittedOrganization: boolean;
  isEdit: boolean;
  isDelete: boolean = false;
  isSaved: boolean = false;
  isUpdated: boolean = false;
  editIndex: any;

  constructor(public adminLayoutService: AdminLayoutService, public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.defaultForm();
    this.l = this.itemsPerPage = 5;
  }

  itemsPerPageChange(val: any) {
    this.l = this.itemsPerPage = parseInt(val);
    this.p = 1;
  }

  industryList = ["Pharma", "Information Technology", "Chemical & Agricutural"]

  defaultForm() {
    this.organizationForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      employees: ['', [Validators.required]],
      industry: [null, [Validators.required]],
      lineOfBusiness: [''],
      dataDomain: [''],
      businessFunction: [''],
      region: [''],
    })
  }

  createOrganization() {
    this.defaultForm();
    this.submittedOrganization = false;
    this.isEdit = false;
    $("#add-organization").modal("show");
  }

  closeOrganizationModal() {
    this.defaultForm();
    this.submittedOrganization = false;
    this.isEdit = false;
    $("#add-organization").modal("hide");
  }

  saveOrganizationDetails() {
    if (this.organizationForm.invalid) {
      this.submittedOrganization = true;
      return;
    }
    let obj = {
      name: this.organizationForm.value.name,
      employees: this.organizationForm.value.employees,
      industry: this.organizationForm.value.industry,
      lineOfBusiness: this.organizationForm.value.lineOfBusiness,
      dataDomain: this.organizationForm.value.dataDomain,
      businessFunction: this.organizationForm.value.businessFunction,
      region: this.organizationForm.value.region,
    }
    this.allOrganizationList.push(obj);
    this.OrganizationList = this.allOrganizationList;
    this.organizationList = this.OrganizationList;

    this.isSaved = true;
    setTimeout(() => {
      this.isSaved = false;
    }, 1500);
    $("#add-organization").modal("hide");
    this.defaultForm();
    this.submittedOrganization = false;
    this.isEdit = false;

  }

  editOrganization(index) {
    this.editIndex = index;
    this.isEdit = true;
    this.submittedOrganization = false;
    this.organizationForm.patchValue(this.organizationList[index]);
    $("#add-organization").modal("show");
  }


  updateOrganizationDetails() {
    if (this.organizationForm.invalid) {
      this.submittedOrganization = true;
      return;
    }
    let obj = {
      name: this.organizationForm.value.name,
      employees: this.organizationForm.value.employees,
      industry: this.organizationForm.value.industry,
      lineOfBusiness: this.organizationForm.value.lineOfBusiness,
      dataDomain: this.organizationForm.value.dataDomain,
      businessFunction: this.organizationForm.value.businessFunction,
      region: this.organizationForm.value.region,
    };
    this.allOrganizationList[this.editIndex] = obj;
    this.OrganizationList = this.allOrganizationList;
    this.organizationList = this.OrganizationList;
    this.isUpdated = true;
    setTimeout(() => {
      this.isUpdated = false;
    }, 1500);
    $("#add-organization").modal("hide");
    this.defaultForm();
    this.submittedOrganization = false;
    this.isEdit = false;
  }


  deleteOrganizationDetails(index) {
    Swal.fire({
      title: 'Are you sure?',
      text: "want to delete this organization details !",
      icon: 'warning',
      showCancelButton: true,
      //confirmButtonColor: '#3085d6',
      //cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.isDelete = true;
        setTimeout(() => {
          this.isDelete = false
        }, 1500);

        this.allOrganizationList.splice(index);
        this.OrganizationList = this.allOrganizationList;
        this.organizationList = this.OrganizationList;

      }
    })

  }



}
