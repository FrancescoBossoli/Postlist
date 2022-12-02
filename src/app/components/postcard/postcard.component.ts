import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/post';

@Component({
    selector: 'app-postcard',
    templateUrl: './postcard.component.html',
    styleUrls: ['./postcard.component.scss']
})

export class PostcardComponent implements OnInit {

    @Input() p!:Post;


    constructor() { }

    ngOnInit(): void { }

}
