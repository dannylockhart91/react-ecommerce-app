import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from "reselect";

import { AppState } from '../../store/root.reducer';
import { getIsAuthenticating } from '../../store/user/user.selectors';
import hocSpinner from "../../components/withSpinner/hoc-spinner.components";
import Authentication from "./authentication.component";

interface AuthenticationSelectors {
    isLoading: any;
}

const mapStateToProps = createStructuredSelector<AppState, AuthenticationSelectors>({
    isLoading: getIsAuthenticating
});

const AuthenticationContainer = compose(
    connect(mapStateToProps),
    hocSpinner
)(Authentication) as React.ComponentType<any>;

export default AuthenticationContainer;
