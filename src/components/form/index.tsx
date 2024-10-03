import React from 'react';
import {useState} from 'react';
import * as Yup from 'yup';
import {DateInput, Input, Select} from '../inputs/index';
import {DoubleInputLayout} from '../layouts/index';
import {Button} from '../index';

type FormDataType = {
    lastName: string
    firstName: string
    patronymic: string
    gender: string
    birthDate: string
    phoneNumber: string
    email: string
    registrationAdress: string
    employer: string
};

export function Form() {

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
            .matches(/^\d{11}$/, 'Номер телефона введен не корректно')
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
            <form onSubmit={onSubmitHandler}>
                <Input label='Фамилия'
                       type='text'
                       name='lastName'
                       value={formData.lastName}
                       onChange={onChangeHandler}
                       error={errors.lastName}
                />
                <Input label='Имя'
                       type='text'
                       name='firstName'
                       value={formData.firstName}
                       onChange={onChangeHandler}
                       error={errors.firstName}
                />
                <Input label='Отчество'
                       type='text'
                       name='patronymic'
                       value={formData.patronymic}
                       onChange={onChangeHandler}
                       error={errors.patronymic}
                />
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
                    <DateInput label='Дата рождения'
                               name='birthDate'
                               value={formData.birthDate}
                               onChange={onChangeHandler}
                               error={errors.birthDate}
                    />
                </DoubleInputLayout>
                <DoubleInputLayout>
                    <Input label='Мобильный телефон'
                           type='text'
                           name='phoneNumber'
                           value={formData.phoneNumber}
                           onChange={onChangeHandler}
                           error={errors.phoneNumber}
                    />
                    <Input label='Email (необязательно)'
                           type='email'
                           name='email'
                           value={formData.email}
                           onChange={onChangeHandler}
                           error={errors.email}
                    />
                </DoubleInputLayout>
                <Input label='Адрес постоянной регистрации'
                       type='text'
                       name='registrationAdress'
                       value={formData.registrationAdress}
                       onChange={onChangeHandler}
                       error={errors.registrationAdress}
                />
                <Input label='Название работодателя'
                       type='text'
                       name='employer'
                       value={formData.employer}
                       onChange={onChangeHandler}
                       error={errors.employer}
                />
                <Button title={'СОХРАНИТЬ'}
                        type='submit'
                />
            </form>
        </>
    );
};