import React from 'react';

import Spinner from '../spinner/spinner.component';

// const hocSpinner = (WrappedComponent: any) => {
// 	({ isLoading, ...otherProps }: any) => {
// 		return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
//     };
// };

const hocSpinner = (WrappedComponent: any) => ({isLoading, ...otherProps}: any) => {
    return isLoading ? <Spinner /> : <WrappedComponent {...otherProps}/>
}

export default hocSpinner;