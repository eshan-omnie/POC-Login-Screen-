import React, {useContext, useState, useEffect}from 'react';
import { useHistory} from 'react-router-dom';
import { AuthContext } from '../App';
import { database } from './Database';


import styled from 'styled-components';
import {useFormik} from 'formik';


function Login(){

    const [data, setData]= useState([]);
    const [Type, setType] =useState('password');

    useEffect(()=>{
        setData(database);
    },[]);

    
    


    const formik= useFormik({
        initialValues: {
            email:'',
            password:''
        },

        onSubmit: values=>{
            data.map((dat,index)=>{
                if(dat.email==values.email && dat.password== values.password){
                    authContext.Dispatch('Tru')
                    history.push('/profile');
                }
            })
        },

        validate: values=>{
            let errors= {}

            if(!values.email){
                errors.email= '*Required'
            }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
                errors.email= '*Invalid email format'
            }
            if(!values.password){
                errors.password= '*Required'
            }

            return errors;
        }


           
    })

    const authContext= useContext(AuthContext);
    let history= useHistory();

    console.log('visited fields', formik.touched);

   
    return(
        <>
            <FormWrapper>
                <form onSubmit={formik.handleSubmit}>
                    <FormItem>
                        <Label htmlFor='email'>Email</Label>
                        <Input 
                            type='email' 
                            id='email' 
                            name='email' 
                            placeholder='example@email.com'
                            onChange={formik.handleChange}
                            onBlur= {formik.handleBlur}
                            value={formik.values.email}
                            />
                        {
                            formik.touched.email && formik.errors.email?<Errors>{formik.errors.email}</Errors>:null
                        }
                    </FormItem>

                    <FormItem>
                        <Label htmlFor='password'>Password</Label>
                        <Input 
                            type={Type} 
                            id='password' 
                            name='password' 
                            placeholder='password'
                            onChange={formik.handleChange}
                            onBlur= {formik.handleBlur}
                            value={formik.values.password}
                        />
                        <Span>
                        <input type='radio' placeholder='show ' onClick={()=>setType('text')} /> 
                        <label>show password</label>
                        </Span>
                        {
                            formik.touched.password && formik.errors.password?
                            <Errors>{formik.errors.password}</Errors>:null
                        }
                    </FormItem>

                    <FormItem>
                        <Button type='submit'>Login</Button>
                    </FormItem>

                </form>
            </FormWrapper>

            <Wrapper>
                <h5>Only registered ids are allowed so, use these ids and password to login</h5>
                {
                    data.map((dat,index)=>{
                        return(
                            <div>
                                {dat.email}-----{dat.password}
                            </div>
                        )
                    })
                }
            </Wrapper>

        </>
    );
}


const Wrapper= styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin-left:555px;
    margin-right: auto;
    height: 210px;
    width: 400px;
    padding: 6px 20px;
    border: 0.5px solid grey;
`;



const FormWrapper= styled.div`
    display: flex;
    justify-content: center;
    
`;
const Label= styled.label`
    font-weight: bold;
    display: flex;
    margin-bottom: 5px;
`;
const Input= styled.input`
    display: block;
    width: 400px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.5;
    color: #555;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    
`;

const FormItem= styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
`;

const Errors= styled.div`
    color: red;
    font-size: 12px;
    margin-left: 12px;
`;

const Button= styled.button`
    display: block;
    font-weight: bold;
    font-size: 20px;
    width: 426px;
    color: white;
    padding: 6px 12px;
    border: 1px solid palevioletred;
    background-color: palevioletred;
    border-radius: 4px;

`;

const Span=styled.div`
    font-size: 14px;
    color: grey;

`;


export default Login;