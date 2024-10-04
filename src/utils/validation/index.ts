import * as Yup from 'yup';

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

export default validationSchema;