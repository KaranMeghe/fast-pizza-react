import { Outlet } from 'react-router-dom';
import { CartOverview } from '../features';
import { Header } from './index';

const AppLayout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <CartOverview />
        </div>
    );
};

export default AppLayout;