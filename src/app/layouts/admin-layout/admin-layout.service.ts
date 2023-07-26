import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from 'app/shared/common.service';

@Injectable({
  providedIn: 'root'
})
export class AdminLayoutService {

  constructor(public http: HttpClient, public commonService: CommonService) { }

  getUserList() {
    return this.http.get(this.commonService.rootData.rootUrl)
  }

  deleteUserData(id: any) {
    return this.http.delete(this.commonService.rootData.rootUrl + '/' + id)
  }

}
