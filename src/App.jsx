import { Routes, Route, Navigate } from "react-router";
import { observer } from "mobx-react-lite";

import "./App.css";

//pages
import LoginPage from "./pages/loginPage/loginPage.jsx";
import UserPage from "./pages/userPage/userPage.jsx";
import Store from "./store/Store.js";
import Layout from "./shared/Layout.jsx";
import ShopPage from "./pages/shopPage/ShopPage.jsx";
import UserSettingPage from "./pages/userSettingPage/UserSettingPage.jsx";

import ShopSettingPage from "./pages/shopSettingPage/ShopSettingPage.jsx";
const user = Store.User;
const shop = Store.Shop;
const orders = Store.Orders;

import { Context } from "./store/Context.js";

function AppComponent() {
	return (
		<Context.Provider value={{ user, shop, orders }}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route
						index
						element={
							user.isAuth ? <Navigate to="/logIn" /> : <Navigate to="/me" />
						}
					/>

					<Route
						path="/me"
						element={!user.isAuth ? <Navigate to="/logIn" /> : <UserPage />}
					/>

					<Route
						path="/settings"
						element={
							!user.isAuth ? <Navigate to="/logIn" /> : <UserSettingPage />
						}
					/>

					<Route
						path="/logIn"
						element={!user.isAuth ? <LoginPage /> : <Navigate to="/me" />}
					/>

					<Route
						path="/shop"
						element={!shop.isChosen ? <Navigate to="/me" /> : <ShopPage />}
					/>

					<Route
						path="/shopSettings"
						element={
							shop.isChosen && shop.pages["shop_settings"] ? (
								<ShopSettingPage />
							) : (
								<Navigate to="/me" />
							)
						}
					/>
				</Route>
			</Routes>
		</Context.Provider>
	);
}

const App = observer(AppComponent);

export default App;
