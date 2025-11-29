import {render, screen, fireEvent} from '@testing-library/react';
import {vi} from 'vitest';
import CitySearchForm from './searchForm.jsx';

test('calls handlesubmit with search terms when the search button is clicked', ()=>{
	screen.debug();
	const mockSubmit = vi.fn();
	const props = {
		currentCityText:null,
		handleTextChange:null,
		handleSubmit: mockSubmit
	}

	render(<CitySearchForm {...props} />)

		screen.debug();


	const searchInput = screen.getByRole('textbox');
	const searchButton = screen.getByRole('button', {name : /Enter/i});

	fireEvent.change(searchInput, {target:{value:'Paris'}});

	fireEvent.click(searchButton);

	expect(mockSubmit).toHaveBeenCalledTimes(1);
})