import { Component } from '@angular/core';
import {NzSpinModule} from 'ng-zorro-antd/spin';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { error } from 'console';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NzLayoutModule,
            NzButtonModule,
           NzFormModule,
           NzSpinModule,
           NzInputModule,
           ReactiveFormsModule,
           CommonModule,
          ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  isSpinning: boolean = false
  signUpForm !:FormGroup;

  constructor(private fb:FormBuilder) {
  
  }

  ngOnInit(){
    this.signUpForm = this.fb.group({
      name:[null,[Validators.required]],
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required]],
      checkPassword:[null,[Validators.required,this.comfirmationValidaton]],

    })
  }

  comfirmationValidaton=(control:FormControl):{[s:string]:boolean} =>{
    if(!control.value){
      return{required:true};
    }else if(control.value !== this.signUpForm.controls['password'].value){
      return{comfirm:true,error:true};
   
      
    }
    return{};
    };
  
  

  register(){
    console.log(this.signUpForm.value)
  }
}
