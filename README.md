A stock information website made with ReactJS frontend and Node/express js for backend. There are over 20000 stocks that are searchable. The website has a search bar that has suggestions based off input and will give a alert to indict wether the search was sucessful. On the main part of website there is a price chart (using plotly) and stock information displayed. The website follows ui/ux principles. The website uses financial modeling prep api to obtain stock information in tangent with axios which will make the http get request to the backend server to recieve data in json form. The backend uses express to fetch data from the fincial model prep api, the api key is stored in .env for security purposes.

api key can be ontained on the api website: https://site.financialmodelingprep.com/

Demo of the website:


https://github.com/user-attachments/assets/b40f7771-e9e2-4891-af03-8f17881c9e81


In order to run:
1. clone repo
2. navigate to both client and server directory then 'npm i'
3. 'npm run DevStart' in server directory
4. 'npm start' in client directory
