import React from 'react';
import {useState} from 'react';
import {DateInput, Input, Select} from '../inputs/index';
import {DoubleInputLayout} from '../layouts/index';
import {Button} from '../index';
import validationSchema from '../../utils/validation';

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

    const [formData, setFormData] = useState<FormDataType>({
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

    const [errors, setErrors] = useState<FormDataType>({
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

    const onSubmitHandler = async (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await validationSchema.validate(formData, {abortEarly: false});
            alert('Форма валидна, отправляется запрос');
        } catch (error: any) {
            const newError: any = {};
            error.inner.forEach((err: any) => {
                newError[err.path] = err.message;
            });
            setErrors(newError);
        };
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