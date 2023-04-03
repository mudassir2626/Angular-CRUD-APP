import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private _http:HttpClient) { }

  AddStudent(data:any):Observable<any>{
    return this._http.post('http://localhost:3000/students',data);
  }
 
  GetStudentData():Observable<any>{
    return this._http.get('http://localhost:3000/students');
  }
  DeleteStudent(id:number):Observable<any>{
    return this._http.delete(`http://localhost:3000/students/${id}`);
  }
  UpdateStudentForm(id:number,data:any){
    return this._http.put(`http://localhost:3000/students/${id}`,data);
  }
}
