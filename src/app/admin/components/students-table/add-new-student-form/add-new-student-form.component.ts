import { ManagePopupService } from './../../../../core/services/manage-popup.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/core/user.service';
import { PopupState } from 'src/app/shared/types/PopupState';

@Component({
  selector: 'app-add-new-student-form',
  templateUrl: './add-new-student-form.component.html',
  styleUrls: ['./add-new-student-form.component.scss'],
})
export class AddNewStudentFormComponent {
  myForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private popupService: ManagePopupService,
    private userService: UserService
  ) {
    this.myForm = this.formBuilder.group({
      nr_albumu: '',
      surname: '',
      firstname: '',
      email: '',
      practiseMonth: '',
      practiseDateRange: '',
      company: '',
      address: '',
      phone: '',
      passed: false,
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.myForm.value);
    this.http
      .post('http://localhost:8000/users', {
        ...this.myForm.value,
        adminId: this.userService.user.getValue()?.id,
      })
      .subscribe(() => {
        this.popupService.openDialog(PopupState.OK, 'User was added');
      });
  }
}
