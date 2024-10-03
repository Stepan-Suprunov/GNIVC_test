import React from 'react';
import {useState} from 'react';
import * as Yup from 'yup';
import {NameInput, Select} from '../inputs/index';
import {DoubleInputLayout} from "../layouts/index";
import {Button} from "../index";

type FormDataType = {
    lasttName: string
    firstName: string
    patronymic: string
    gender: string
    birthDate: string
    phoneNumber: string
    email: string
    registrationAdress: string
    employer: string
};

export function YupForm() {

    const [formData, setFormData] = useState({
        lastName: '',
        firstName: '',
        patronymic: '',
        gender: '',
        birthDate: '',
        phoneNumber: '',
        email: '',
        registrationAdress: '',
        employer: ''
    });

    const [errors, setErrors] = useState({
        lastName: '',
        firstName: '',
        patronymic: '',
        gender: '',
        birthDate: '',
        phoneNumber: '',
        email: '',
        registrationAdress: '',
        employer: ''
    });

    const validationSchema = Yup.object({
        lastName: Yup.string().required('Поле является обязательным'),
        firstName: Yup.string().required('Поле является обязательным'),
        patronymic: Yup.string(),
        gender: Yup.string(),
        birthDate: Yup.date().required('Поле является обязательным'),
        phoneNumber: Yup.string()
            .matches(/^\d{11}$/, 'Номер телефона должен состоять из 11 цифр')
            .required('Поле является обязательным'),
        email: Yup.string()
            .email('Введен некорректный адрес почты')
            .required('Поле является обязательным'),
        registrationAdress: Yup.string(),
        employer: Yup.string()
    });

    const onSubmitHandler = async (e: any) => {
        e.preventDefault();
        try {
            await validationSchema.validate(formData, {abortEarly: false});
            alert('Форма валидна, отправляется запрос')
        } catch (error: any) {
            const newError: any = {};
            error.inner.forEach((err: any) => {
                newError[err.path] = err.message;
            });
            setErrors(newError);
        }
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <>
            {/*<div>*/}
            <form onSubmit={onSubmitHandler}>
                <NameInput label='Фамилия'
                           type='text'
                           name='lastName'
                           value={formData.lastName}
                           onChange={onChangeHandler}
                           error={errors.lastName}
                />
                {/*<div>*/}
                {/*    <label>Фамилия</label>*/}
                {/*    <input type="text"*/}
                {/*           name='lastName'*/}
                {/*           value={formData.lastName}*/}
                {/*           onChange={onChangeHandler}*/}
                {/*    />*/}
                {/*    {errors.lastName && <span>{errors.lastName}</span>}*/}
                {/*</div>*/}
                <NameInput label='Имя'
                           type='text'
                           name='firstName'
                           value={formData.firstName}
                           onChange={onChangeHandler}
                           error={errors.firstName}
                />
                {/*<div>*/}
                {/*    <label>Имя</label>*/}
                {/*    <input type="text"*/}
                {/*           name='firstName'*/}
                {/*           value={formData.firstName}*/}
                {/*           onChange={onChangeHandler}*/}
                {/*    />*/}
                {/*    {errors.firstName && <span>{errors.firstName}</span>}*/}
                {/*</div>*/}
                <NameInput label='Отчество'
                           type='text'
                           name='patronymic'
                           value={formData.patronymic}
                           onChange={onChangeHandler}
                           error={errors.patronymic}
                />
                {/*<div>*/}
                {/*    <label>Отчество</label>*/}
                {/*    <input type="text"*/}
                {/*           name='patronymic'*/}
                {/*           value={formData.patronymic}*/}
                {/*           onChange={onChangeHandler}*/}
                {/*    />*/}
                {/*</div>*/}
                <DoubleInputLayout>
                    <Select label='Пол'
                            name='gender'
                            value={formData.gender}
                            onChange={onChangeHandler}
                            options={[
                                {
                                    value: 'male',
                                    label: 'Мужской'
                                },
                                {
                                    value: 'female',
                                    label: 'Женский'
                                }
                            ]}
                    />
                    {/*<div>*/}
                    {/*    <label>Пол</label>*/}
                    {/*    <select name='gender' value={formData.gender} onChange={onChangeHandler}>*/}
                    {/*        <option value='male'>Мужской</option>*/}
                    {/*        <option value='female'>Женский</option>*/}
                    {/*    </select>*/}
                    {/*</div>*/}
                    <NameInput label='Дата рождения'
                               type='date'
                               name='birthDate'
                               value={formData.birthDate}
                               onChange={onChangeHandler}
                               error={errors.birthDate}
                    />
                    {/*<div>*/}
                    {/*    <label>Дата рождения</label>*/}
                    {/*    <input type="date"*/}
                    {/*           name='birthDate'*/}
                    {/*           value={formData.birthDate}*/}
                    {/*           onChange={onChangeHandler}*/}
                    {/*    />*/}
                    {/*    {errors.birthDate && <span>{errors.birthDate}</span>}*/}
                    {/*</div>*/}
                </DoubleInputLayout>
                <DoubleInputLayout>
                    <NameInput label='Мобильный телефон'
                               type='text'
                               name='phoneNumber'
                               value={formData.phoneNumber}
                               onChange={onChangeHandler}
                               placeholder='89998887766'
                               error={errors.phoneNumber}
                    />
                    {/*<div>*/}
                    {/*    <label>Мобильный телефон</label>*/}
                    {/*    <input type="text"*/}
                    {/*           name='phoneNumber'*/}
                    {/*           value={formData.phoneNumber}*/}
                    {/*           onChange={onChangeHandler}*/}
                    {/*           placeholder='89998887766'*/}
                    {/*    />*/}
                    {/*    {errors.phoneNumber && <span>{errors.phoneNumber}</span>}*/}
                    {/*</div>*/}
                    <NameInput label='Email (необязательно)'
                               type='email'
                               name='email'
                               value={formData.email}
                               onChange={onChangeHandler}
                               error={errors.email}
                    />
                    {/*<div>*/}
                    {/*    <label>Email (необязательно)</label>*/}
                    {/*    <input type="email"*/}
                    {/*           name='email'*/}
                    {/*           value={formData.email}*/}
                    {/*           onChange={onChangeHandler}*/}
                    {/*    />*/}
                    {/*    {errors.email && <span>{errors.email}</span>}*/}
                    {/*</div>*/}
                </DoubleInputLayout>
                <NameInput label='Адрес постоянной регистрации'
                           type='text'
                           name='registrationAdress'
                           value={formData.registrationAdress}
                           onChange={onChangeHandler}
                           error={errors.registrationAdress}
                />
                {/*<div>*/}
                {/*    <label>Адрес постоянной регистрации</label>*/}
                {/*    <input type="text"*/}
                {/*           name='registrationAdress'*/}
                {/*           value={formData.registrationAdress}*/}
                {/*           onChange={onChangeHandler}*/}
                {/*    />*/}
                {/*</div>*/}
                <NameInput label='Название работодателя'
                           type='text'
                           name='employer'
                           value={formData.employer}
                           onChange={onChangeHandler}
                           error={errors.employer}
                />
                {/*<div>*/}
                {/*    <label>Название работодателя</label>*/}
                {/*    <input type="text"*/}
                {/*           name='employer'*/}
                {/*           value={formData.employer}*/}
                {/*           onChange={onChangeHandler}*/}
                {/*    />*/}
                {/*</div>*/}
                <Button title={'СОХРАНИТЬ'}
                        type='submit'
                />
                {/*<button type='submit'>Сохранить</button>*/}
            </form>
            {/*</div>*/}
        </>
    );
};