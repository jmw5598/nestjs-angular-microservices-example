import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input, ChangeDetectorRef, inject } from '@angular/core';
import { AbstractControl, ControlContainer, ReactiveFormsModule, UntypedFormArray, UntypedFormGroup } from '@angular/forms';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Observable, Observer } from 'rxjs';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { TemplateModulePermissionName, EnvironmentService } from '@vsp/core';
import { VspAutoFocusControlDirective } from '@vsp/forms';

@Component({
  selector: 'vsp-user-account-update-form',
  templateUrl: './user-account-update-form.component.html',
  styleUrls: ['./user-account-update-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    NgFor,
    NgIf,
    NzButtonModule,
    NzCheckboxModule,
    NzCollapseModule,
    NzDropDownModule,
    NzDividerModule,
    NzFormModule,
    NzGridModule,
    NzIconModule,
    NzInputModule,
    NzListModule,
    NzSwitchModule,
    NzUploadModule,
    VspAutoFocusControlDirective,
    ReactiveFormsModule
  ]
})
export class UserAccountUpdateFormComponent implements OnInit {
  private readonly _controlContainer: ControlContainer = inject(ControlContainer);
  private readonly _environmentService: EnvironmentService = inject(EnvironmentService);
  private readonly _changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  @Input()
  public templateModulePermissionNames: TemplateModulePermissionName[] | null = [];

  @Output()
  public selectTemplateModulePermissionName: EventEmitter<TemplateModulePermissionName | null> = 
    new EventEmitter<TemplateModulePermissionName | null>();

  @Output()
  public issuePasswordResetRequest: EventEmitter<boolean> = new EventEmitter<boolean>();

  public userAccountForm!: UntypedFormGroup;

  public hasIssuedPasswordResetRequest: boolean = false;
  public isLoadingTemplate: boolean = false;

  ngOnInit(): void {
    this.userAccountForm = this._controlContainer.control as UntypedFormGroup;
  }

  public get uploadAvatarUrl(): string {
    return `${this._environmentService.getBaseApiUrl()}/files/avatar`;
  }

  public get userModulePermissions(): UntypedFormArray {
    return this.userAccountForm.get('userModulePermissions') as UntypedFormArray;
  }

  public getUserPermissionsFormArray(control: AbstractControl): UntypedFormArray {
    const formGroup: UntypedFormGroup = control as UntypedFormGroup;
    return formGroup.get('userPermissions') as UntypedFormArray;
  }

  public onIssuePasswordResetRequest(shouldIssue: boolean): void {
    this.hasIssuedPasswordResetRequest = true;
    this.issuePasswordResetRequest.emit(shouldIssue);
  }

  public onApplyTemplateModulerPermissionName(templateModulePermissionName: TemplateModulePermissionName | null): void {
    // @TODO load template module permissions and patch to form
    this.isLoadingTemplate = true;
    this.selectTemplateModulePermissionName.emit(templateModulePermissionName);
    setTimeout(() => {
      this.isLoadingTemplate = false;
      this._changeDetectorRef.markForCheck();
    }, 500);
  }

  public onUserModulePermissionAccessChange(event: any, control: AbstractControl): void {
    control?.patchValue({
      canCreateAll: event,
      canReadAll: event,
      canUpdateAll: event,
      canDeleteAll: event
    });
  }

  public onUserModulePermissionCanCreateAllChange(event: any, control: AbstractControl): void {
    const formGroup = control as UntypedFormGroup;
    const userPermissionFormArray: UntypedFormArray = formGroup?.get('userPermissions') as UntypedFormArray;

    if (userPermissionFormArray) {
      userPermissionFormArray?.controls?.forEach(control => {
        const childUserPermissionFormGroup: UntypedFormGroup = control as UntypedFormGroup;
        childUserPermissionFormGroup?.patchValue({
          canCreate: event
        })
      });
    }
  }

  public onUserModulePermissionCanReadAllChange(event: any, control: AbstractControl): void {
    const formGroup = control as UntypedFormGroup;
    const userPermissionFormArray: UntypedFormArray = formGroup?.get('userPermissions') as UntypedFormArray;

    if (userPermissionFormArray) {
      userPermissionFormArray?.controls?.forEach(control => {
        const userPermissionFormGroup: UntypedFormGroup = control as UntypedFormGroup;
        userPermissionFormGroup?.patchValue({
          canRead: event
        })
      });
    }
  }

  public onUserModulePermissionCanUpdateAllChange(event: any, control: AbstractControl): void {
    const formGroup = control as UntypedFormGroup;
    const userPermissionFormArray: UntypedFormArray = formGroup?.get('userPermissions') as UntypedFormArray;

    if (userPermissionFormArray) {
      userPermissionFormArray?.controls?.forEach(control => {
        const userPermissionFormGroup: UntypedFormGroup = control as UntypedFormGroup;
        userPermissionFormGroup?.patchValue({
          canUpdate: event
        })
      });
    }
  }

  public onUserModulePermissionCanDeleteAllChange(event: any, control: AbstractControl): void {
    const formGroup = control as UntypedFormGroup;
    const userPermissionFormArray: UntypedFormArray = formGroup?.get('userPermissions') as UntypedFormArray;

    if (userPermissionFormArray) {
      userPermissionFormArray?.controls?.forEach(control => {
        const userPermissionFormGroup: UntypedFormGroup = control as UntypedFormGroup;
        userPermissionFormGroup?.patchValue({
          canDelete: event
        })
      });
    }
  }

  // @TODO clean up
  loading = false;
  avatarUrl?: string;

  beforeUpload = (file: NzUploadFile, _fileList: NzUploadFile[]): Observable<boolean> =>
    new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        console.log('You can only upload JPG file!')
        observer.complete();
        return;
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        console.log('Image must smaller than 2MB!');
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        break;
      case 'error':
        console.log('Network error');
        this.loading = false;
        break;
    }
  }
}
