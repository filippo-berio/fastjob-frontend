import { ComponentType } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProfileInterface } from '../../../../../core/profile/core/data/profile.interface';
import { getProfileRepresentation } from '../../../../../core/profile/core/util/profile-representation';
import { ProfileSettingsFacade } from '../../../../../core/profile/facade/profile-settings-facade.service';
import { CategoryPickerComponent } from '../../../category/components/category-picker/category-picker.component';
import { ModalInputComponent } from '../../../shared/components/modal-input/modal-input.component';
import { ModalTextareaComponent } from '../../../shared/components/modal-textarea/modal-textarea.component';

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
    ) {
    }

    ngOnInit() {
        this.facade.profile$().subscribe(profile => {
            this.profile = profile;
            this.form = this.facade.buildForm();
            this.profileRepresentation = getProfileRepresentation(profile);
        });
    }

    editName() {
        const modalRef = this.openModal(ModalInputComponent);
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
        const modalRef = this.openModal(ModalTextareaComponent);
        modalRef.componentInstance.control = this.form.get('description') as FormControl;
        modalRef.componentInstance.label = 'Введите описание';
        modalRef.componentInstance.valueEmitter.subscribe(() => {
            modalRef.close();
            this.facade.update();
        });
    }

    editCategories() {
        const modalRef = this.modalOpener.open(CategoryPickerComponent, {
            width: '100%',
            maxWidth: '100vw',
            height: '100%',
            maxHeight: '100vh',
        });
        modalRef.componentInstance.checked = this.profile.categories;
        modalRef.componentInstance.select.subscribe(selected => {
            modalRef.close();
            this.facade.updateCategories(selected);
        })
    }

    private openModal<T>(component: ComponentType<T>): MatDialogRef<T> {
        return this.modalOpener.open(component, {
            width: '95%',
            maxWidth: '100vw',
        });
    }
}
