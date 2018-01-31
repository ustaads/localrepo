import { Component, OnInit } from '@angular/core';


@Component({

selector: 'app-successalert',
templateUrl:'./successalert.component.html',
styleUrls: ['./success.component.css']
})

export class SuccessAlertComponent implements OnInit{
name ='';



constructor()
{


}
ngOnInit()
{}

onUpdateName(event: Event)
{

this.name= (<HTMLInputElement>event.target).value;



}

onButtonClick()
{


}

}
