import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  l: number;
  p: number = 1;
  itemsPage: any;
  collection: any[] = []
  itemsPerPage: number
  constructor() { 
    for (let i = 1; i <= 100; i++) {
      this.collection.push({name:"Name"+i});
    }
  }

  ngOnInit() {
    this.l = this.itemsPerPage = 10;
    
    
  }

  itemsPerPageChange(val:any) {
    this.l = this.itemsPerPage = parseInt(val);
    this.p = 1;
  }

  statusUpdate() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      //confirmButtonColor: '#3085d6',
      //cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
}
