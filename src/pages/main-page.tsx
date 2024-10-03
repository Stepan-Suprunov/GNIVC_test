import {DoubleInputLayout, MainLayout} from '../components/layouts/index';
import {Button, Heading} from '../components/index';
import {NameInput} from '../components/inputs/index';
import {Form} from "../components/form";
import {YupForm} from "../components/form/yup";

export function MainPage() {
    return (
        <MainLayout>
            <Heading title='Информация о сотруднике'/>
            {/*<NameInput label='Фамилия'/>*/}
            {/*<NameInput label='Имя'/>*/}
            {/*<NameInput label='Отчество'/>*/}
            {/*<DoubleInputLayout>*/}
            {/*    <NameInput label='Пол'/>*/}
            {/*    <NameInput label='Дата рождения'/>*/}
            {/*</DoubleInputLayout>*/}
            {/*<DoubleInputLayout>*/}
            {/*    <NameInput label='Мобильный телефон'/>*/}
            {/*    <NameInput label='Email (необязательно)'/>*/}
            {/*</DoubleInputLayout>*/}
            {/*<NameInput label='Адрес постоянной регистрации'/>*/}
            {/*<NameInput label='Название работодателя'/>*/}
            {/*<Button title={'СОХРАНИТЬ'}/>*/}
            <YupForm/>
        </MainLayout>
    );
};