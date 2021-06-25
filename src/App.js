import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { lazy, Suspense } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import * as ROUTES from "./constants/routes";
import Loading from "./components/loading";

import { Provider } from "react-redux";
import { store } from "./app/store";

const Login = lazy(() => import("./pages/account/Login"));
const Register = lazy(() => import("./pages/account/CreateAccount"));
const Cart = lazy(() => import("./pages/Cart"));
const Product = lazy(() => import("./pages/Product"));
const Home = lazy(() => import("./pages/Home"));
const Responsibility = lazy(() => import("./pages/Responsibility"));
const AllProducts = lazy(() => import("./pages/collections/AllProducts"));
const Blackmoon = lazy(() => import("./pages/collections/Blackmoon"));
const SukiSpace = lazy(() => import("./pages/collections/SukiSpace"));
const AnimalCrossing = lazy(() => import("./pages/AnimalCrossing"));
const NotFound = lazy(() => import("./pages/notFound"));

function App() {
  const history = createBrowserHistory();
  return (
    <Provider store={store}>
      <Router history={history}>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.REGISTER} component={Register} />
            <Route path={ROUTES.PRODUCT} component={Product} />
            <Route path={ROUTES.RESPONSIBILITY} component={Responsibility} />
            <Route path={ROUTES.ALL_PRODUCTS} component={AllProducts} />
            <Route path={ROUTES.BLACK_MOON} component={Blackmoon} />
            <Route path={ROUTES.SPACE} component={SukiSpace} />
            <Route path={ROUTES.ANIMAL_CROSSING} component={AnimalCrossing} />
            <Route path={ROUTES.CART} component={Cart} />
            <Route path={ROUTES.HOME} component={Home} exact />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
