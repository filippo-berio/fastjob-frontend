import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { TaskInterface } from '../../../../../../core/task/data/task.interface';

@Component({
    selector: 'fj-task-photos-slider',
    templateUrl: './task-photos-slider.component.html',
    styleUrls: ['./task-photos-slider.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskPhotosSliderComponent implements OnInit {
    @Input() task: TaskInterface;
    index = 0;
    fadeEffectOptions = {
        crossFade: true
    };
    swiperOptions: SwiperOptions = {
        fadeEffect: {
            crossFade: true,
        }
    };
    slideWidth = 96;
    // swipesPerView = (window.innerWidth - 30) / 100;
    swipesPerView = 2;

    constructor() {
    }

    ngOnInit() {
        this.task.photos = [
            'http://192.168.1.29:6050/storage/profile-photo1.jpg',
            'http://192.168.1.29:6050/storage/profile-photo1.jpg',
            'http://192.168.1.29:6050/storage/profile-photo1.jpg',
            'http://192.168.1.29:6050/storage/profile-photo1.jpg',
            'http://192.168.1.29:6050/storage/profile-photo1.jpg',
            'http://192.168.1.29:6050/storage/profile-photo1.jpg',
            'http://192.168.1.29:6050/storage/profile-photo1.jpg',
            'http://192.168.1.29:6050/storage/profile-photo1.jpg',
            'http://192.168.1.29:6050/storage/profile-photo1.jpg',
            'http://192.168.1.29:6050/storage/profile-photo1.jpg',
            'http://192.168.1.29:6050/storage/profile-photo1.jpg',
        ];
    }

}
