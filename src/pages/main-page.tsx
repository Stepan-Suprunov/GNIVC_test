import {MainLayout} from '../components/layouts/index';
import {Heading} from '../components/index';
import {Form} from '../components/index';

export function MainPage() {
    return (
        <MainLayout>
            <Heading title='Информация о сотруднике'/>
            <Form/>
        </MainLayout>
    );
};