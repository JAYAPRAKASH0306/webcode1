async function fetchNationality() {
 
    const searchText = document.getElementById('search-filter').value;
  
    try {
      const response = await fetch(`https://api.nationalize.io?name=${searchText}`);
  
      if (response.ok) {
       
        const data = await response.json();
  
        const { country: [country1, country2], probability } = data;
  
        
        const resultContainer = document.getElementById('result-container');
        resultContainer.innerHTML = `
          <p>Top Nationalities:</p>
          <ul>
            <li>${country1.country_id} (${country1.probability})</li>
            <li>${country2.country_id} (${country2.probability})</li>
          </ul>
        `;
      } else {
        
        throw new Error('API request failed.');
      }
    } catch (error) {
    
      console.error(error);
      const errorContainer = document.getElementById('error-container');
      errorContainer.textContent = 'An error occurred. Please try again later.';
    }
  }
  
  
  const searchForm = document.getElementById('search-form');
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    fetchNationality(); 
  });
  