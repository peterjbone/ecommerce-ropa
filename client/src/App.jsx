import { Route, Routes } from 'react-router-dom';
import { Home, Form } from './views';

function App() {

	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/form' element={<Form />} />
		</Routes>
	);
}

export default App;
