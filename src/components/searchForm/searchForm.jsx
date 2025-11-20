function CitySearchForm({currentCityText, handleTtextChange,handleSubmit}){

	return(
		<form className="searchForm" onSubmit={handleSubmit}>
			<input type="text" 

				value={currentCityText}
				onChange={handleTextChange}

			/>
			<button type="submit">
				Enter
			</button>
			
		</form>


		)
}

export default citySearchForm;