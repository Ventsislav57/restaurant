import { cleanup, render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BurgerItem from './BurgerItem';

import { AuthProvider } from '../../../../context/AuthContext';

const burger = {
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qE8KdXYFQ-lngakf9ncI3AHaE2%26pid%3DApi&f=1',
    title: "Bacon",
    price: 10,
    descriptiom: 'asdasdasd'
}

afterEach(cleanup);

beforeEach(() => {
    jest.spyOn(global, "fetch").mockImplementation(() => {
        Promise.resolve({
            json: () => Promise.resolve(burger)
        })
    })
})

it('Show fetched burger', async () => {
    render(
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path='*' element={<BurgerItem burger={burger} />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
    const title = await screen.findByText(burger.title);
    expect(title).toBeInTheDocument();

})

