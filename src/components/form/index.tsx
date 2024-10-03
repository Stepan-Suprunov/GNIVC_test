import React from "react";
import {useState} from "react";

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

    const validateForm = () => {
        return true
    };

    const onSubmitHandler = (e:any) => {
        e.preventDefault();

        const isValid:boolean = validateForm();
        if (isValid) {
            alert('Форма валидна, отправляется запрос')
        } else {
            alert('Ошибка')
        }
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>Фамилия</label>
                    <input type="text"
                           name='lastName'
                           value={formData.lastName}
                           onChange={onChangeHandler}
                    />
                </div>
                <div>
                    <label>Имя</label>
                    <input type="text"
                           name='firstName'
                           value={formData.firstName}
                           onChange={onChangeHandler}
                    />
                </div>
                <div>
                    <label>Отчество</label>
                    <input type="text"
                           name='patronymic'
                           value={formData.patronymic}
                           onChange={onChangeHandler}
                    />
                </div>
                <div>
                    <label>Пол</label>
                    <select name='gender' value={formData.gender} onChange={onChangeHandler}>
                        <option value='male'>Мужской</option>
                        <option value='female'>Женский</option>
                    </select>

                </div>
                <div>
                    <label>Дата рождения</label>
                    <input type="date"
                           name='birthDate'
                           value={formData.birthDate}
                           onChange={onChangeHandler}
                    />
                </div>
                <div>
                    <label>Мобильный телефон</label>
                    <input type="text"
                           name='phoneNumber'
                           value={formData.phoneNumber}
                           onChange={onChangeHandler}
                    />
                </div>
                <div>
                    <label>Email (необязательно)</label>
                    <input type="email"
                           name='email'
                           value={formData.email}
                           onChange={onChangeHandler}
                    />
                </div>
                <div>
                    <label>Адрес постоянной регистрации</label>
                    <input type="text"
                           name='registrationAdress'
                           value={formData.registrationAdress}
                           onChange={onChangeHandler}
                    />
                </div>
                <div>
                    <label>Название работодателя</label>
                    <input type="text"
                           name='employer'
                           value={formData.employer}
                           onChange={onChangeHandler}
                    />
                </div>
                <button type='submit'>Сохранить</button>
            </form>
        </div>
    );
};