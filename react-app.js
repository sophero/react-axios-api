class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			businesses: []
		}
		this.getData = this.getData.bind(this);
	}

	render() {
		return(
			<div>
				<UserInput searchFunc={this.getData} />
				<YelpResults results={this.state.businesses} />

			</div>
		)
	}

	getData(keywords, location) {
		axios.get("https://yelp-search.herokuapp.com/search", {
			params: {
				location: location,
				term: keywords
			}
		}).then((response) => {
			this.setState({businesses: response.data.businesses})
		});

	}

}

class UserInput extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			keywords: "",
			location: ""
		}

		this.handleSearch = this.handleSearch.bind(this);
		this.updateKeywords = this.updateKeywords.bind(this);
		this.updateLocation = this.updateLocation.bind(this);
	}

	render() {
		return(
			<div className="user-input__container">
				<input onChange={this.updateLocation} type="text" placeholder="Enter location" />
				<input onChange={this.updateKeywords} type="text" placeholder="Enter keywords" />
				<button onClick={this.handleSearch}>Search Yelp</button>
			</div>
		)
	}

	updateKeywords(event) {
		this.setState({keywords: event.target.value});
	}

	updateLocation(event) {
		this.setState({location: event.target.value});
	}

	handleSearch() {
		this.props.searchFunc(this.state.keywords, this.state.location);
	}
}


function YelpResults(props) {

	console.log(props);

	let businesses = props.results.map(function(result, index) {
		return(
			<div key={index}>
				<div>{result.name}</div>
				<img src={result.image_url} alt=""/>
			</div>
		)
	});

	return(
		<div>{businesses}</div>

	)
}

ReactDOM.render(
	<App />,
	document.getElementById("react")
)
