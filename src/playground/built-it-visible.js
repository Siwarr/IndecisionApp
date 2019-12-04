class VisibilityToggle extends React.Component {
	constructor(props){
		super(props);
		this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
		this.state = {
			visibility: false
		};
	}

	handleToggleVisibility() {
		this.setState((prevState) => {
			return {
				visibility: !prevState.visibility
			};
		});
	}
	render() {
		return (
		<div>
			<h1>Visibility Toggle</h1>
			<button onclick={this.handleToggleVisibility}>
				{this.state.visibility ? 'Hide details' : 'show details'}
			</button>
				{this.state.visibility && (
					<div>
						<p>hey. there are some details u can now see! <p>
					<div>
					)}
		</div>
	);
	}
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));