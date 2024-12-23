import { Outlet, useNavigation } from 'react-router-dom';
import { CartOverview } from '../features';
import { Header, Shimmer } from './index';

const AppLayout = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';
    return (
        <div className='layout'>
            {isLoading && <Shimmer />}
            <Header />
            <main>
                <Outlet />
            </main>
            <CartOverview />
        </div>
    );
};

export default AppLayout;
