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

axios.get('https://yelp-search.herokuapp.com/search', {
	params: {
		location: "Philadelphia",
		term: "Pizza"
	}
}).then(function(response) {
	let businesses = response.data.businesses;

	ReactDOM.render(
		<YelpResults results={businesses} />,
		document.getElementById("react")
	)

});
