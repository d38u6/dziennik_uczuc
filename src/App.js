import React, { Component, Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { setRecords, setSelectionOptions } from "./store/actions";
import {
  fetchRecords,
  fetchSelectionOpts,
} from "./utility/localStorageManager/localStorageManager";

import classes from "./App.module.css";
import Layout from "./components/Layout/Layout";
import Alerts from "./containers/Alerts/Alerts";
import LoadingSpinner from "./components/Utility/LoadingSpinner/LoadingSpinner";
import ErrorBundary from "./components/Utility/ErrorBoundary/ErrorBoundary";

import InstallBanner from "./components/InstallBanner/InstallBanner";
import defaultSelectionOptions from "./data/defaultSelectionOptions";

const AddRecord = lazy(() => import("./containers/AddRecord/AddRecord"));
const MyRecords = lazy(() => import("./containers/MyRecords/MyRecords"));
const Analitics = lazy(() => import("./containers/Analitics/Analitics"));
const Options = lazy(() => import("./components/Options/Options"));

class App extends Component {
  constructor(props) {
    super(props);
    props.setSelectionOptions(fetchSelectionOpts() || defaultSelectionOptions);
    props.setRecords(fetchRecords() || []);
  }

  render() {
    return (
      <ErrorBundary>
        <Suspense fallback={<LoadingSpinner />}>
          <div className={classes.App}>
            <Layout>
              <Alerts />
              <InstallBanner />
              <Route exact path={["/", "/dodaj-wpis"]} component={AddRecord} />
              <Route exact path={"/moje-wpisy"} component={MyRecords} />
              <Route exact path={"/analiza"} component={Analitics} />
              <Route exact path={"/opcje"} component={Options} />
            </Layout>
          </div>
        </Suspense>
      </ErrorBundary>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setRecords: (records) => dispatch(setRecords(records)),
  setSelectionOptions: (opts) => dispatch(setSelectionOptions(opts)),
});

export default connect(null, mapDispatchToProps)(App);
