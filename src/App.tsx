import { Layout } from './components/layout';
import { Bracket } from './components/bracket';
import { Items } from './components/items';

import './App.scss';

function App() {

	return (
		<Layout>
			<Bracket />
			<Items />
		</Layout>
	)
}

export default App
