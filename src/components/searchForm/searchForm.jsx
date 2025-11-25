import styles from './searchForm.module.css';

function CitySearchForm({currentCityText, handleTextChange,handleSubmit}){

	return(
		<form className={styles["search-form"]} onSubmit={handleSubmit}>
			<input type="text" className={styles['city-input']}

				value={currentCityText}
				
				onChange={handleTextChange}

			/>
			<button type="submit" className={styles['search-button']}>
				Enter
			</button>
			
		</form>


		)
}

export default CitySearchForm;