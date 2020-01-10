import React from 'react';
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './error-boundary.styles';

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		};
	}

	static getDerivedStateFromError(error) {
		// Process the error
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		console.log(error);
	}

	render() {
		if (this.state.hasError) {
			return (
				<ErrorImageOverlay>
					<ErrorImageContainer imageUrl={'https://i.imgur.com/qIufhof.png'}/>
					<ErrorImageText> Oops! Something went wrong! </ErrorImageText>
				</ErrorImageOverlay>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
