function YelpResults(props) {

	console.log(props);

	return(
		<div>It's working!</div>
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
