import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './hoc-spinner.styles';

const hocSpinner = (WrappedComponent: any) => {
    return ({ isLoading, ...otherProps }: any) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer/>
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps} />
        );
    };
};

export default hocSpinner;
