import axios from 'axios';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			paras: 4,
			html: true,
			text: ''
		}
	}

	componentWillMount() {
		this.getSampleText();
	}

	getSampleText() {
		axios.get('http://hipsterjesus.com/api?paras='+this.state.paras+'&html'+this.state.html)
			.then((response => {
				this.setState=({text: response.data.text}, function() {
					console.log(this.state);
				}))
			})
			.catch((err) => {
				cconsole.log(err);
			}))
	}

	render() {
		return(
			<div className="App">
				Hello
			</div>	

		)
	}

}



export default App;