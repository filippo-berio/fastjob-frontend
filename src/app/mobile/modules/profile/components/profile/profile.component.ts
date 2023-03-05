import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ProfileInterface } from '../../../../../core/profile/core/data/profile.interface';
import { getProfileRepresentation } from '../../../../../core/profile/core/util/profile-representation';
import { ProfileSettingsFacade } from '../../../../../core/profile/facade/profile-settings-facade.service';
import { bottomDialogConfig, fullScreenConfig } from '../../../../../core/shared/data/mat-dialog.configs';
import { CategoryPickerComponent } from '../../../category/components/category-picker/category-picker.component';
import { CityPickerComponent } from '../../../location/components/city-picker/city-picker.component';
import { ModalInputComponent } from '../../../shared/components/modal-input/modal-input.component';
import { ModalTextareaComponent } from '../../../shared/components/modal-textarea/modal-textarea.component';
import { LoginFacade } from '../../../../../core/auth/facade/login.facade';

@Component({
    selector: 'fj-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    profile: ProfileInterface;
    profileRepresentation: string;
    form: FormGroup;

    constructor(
        private facade: ProfileSettingsFacade,
        private modalOpener: MatDialog,
        private loginFacade: LoginFacade,
    ) {
    }

    ngOnInit() {
        this.facade.profile$().subscribe(profile => {
            this.profile = profile;
            this.form = this.facade.buildForm();
            this.profileRepresentation = getProfileRepresentation(profile);
        });
        if (window.history.state?.openCategories) {
            setTimeout(() => this.editCategories(), 300);
        }
    }

    editName() {
        const modalRef = this.modalOpener.open(ModalInputComponent, bottomDialogConfig);
        modalRef.componentInstance.form = new FormGroup({
            firstName: this.form.get('firstName')!,
            lastName: this.form.get('lastName')!,
        });
        modalRef.componentInstance.labels = {
            firstName: 'Введите имя',
            lastName: 'Введите фамилию'
        };
        modalRef.componentInstance.onSubmit.subscribe(() => {
            this.facade.update();
            modalRef.close();
        });
    }

    editDescription() {
        const modalRef = this.modalOpener.open(ModalTextareaComponent, bottomDialogConfig);
        modalRef.componentInstance.control = this.form.get('description') as FormControl;
        modalRef.componentInstance.label = 'Введите описание';
        modalRef.componentInstance.valueEmitter.subscribe(() => {
            modalRef.close();
            this.facade.update();
        });
    }

    editCategories() {
        const modalRef = this.modalOpener.open(CategoryPickerComponent, fullScreenConfig);
        modalRef.componentInstance.checked = this.profile.categories;
        modalRef.componentInstance.select.subscribe(selected => {
            modalRef.close();
            this.facade.updateCategories(selected);
        })
    }

    editCity() {
        const modalRef = this.modalOpener.open(CityPickerComponent, fullScreenConfig);
        modalRef.componentInstance.onSelect.subscribe(city => {
            modalRef.close();
            this.facade.updateCity(city);
        })
    }

    logout() {
        this.loginFacade.logout();
    }
}
