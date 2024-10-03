import {DoubleInputLayout, MainLayout} from '../components/layouts/index';
import {Button, Heading} from '../components/index';
import {NameInput} from '../components/inputs/index';

export function MainPage() {
    return (
        <MainLayout>
            <Heading title='Информация о сотруднике'/>
            <NameInput placeholder='Фамилия'/>
            <NameInput placeholder='Имя'/>
            <NameInput placeholder='Отчество'/>
            <DoubleInputLayout>
                <NameInput placeholder='Пол'/>
                <NameInput placeholder='Дата рождения'/>
            </DoubleInputLayout>
            <DoubleInputLayout>
                <NameInput placeholder='Мобильный телефон'/>
                <NameInput placeholder='Email (необязательно)'/>
            </DoubleInputLayout>
            <NameInput placeholder='Адрес постоянной регистрации'/>
            <NameInput placeholder='Название работодателя'/>
            <Button title={'СОХРАНИТЬ'}/>
        </MainLayout>
    );
};