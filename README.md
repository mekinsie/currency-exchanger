# Currency Exchanger
Input an amount and choose a currency for it to be converted to. 

#### By _**Mekinsie Callahan**_

## Technologies Used

* _CSS_
* _HTML5_
* _Bootstrap_
* _JavaScript_
* _jQuery_

## Description
This application will allow you to convert one currency to any other currency. The purpose of this project is to practice using API keys. 

## Setup/Installation Requirements
Note: You need to have git and npm already installed to setup and install this project.

**Download the repo:**
1. Go to https://github.com/mekinsie/currency-exchanger
2. Navigate to and click the green  <img src="assets/images/code-button.PNG" alt="code" height="20"> button on middle upper right part of webpage.
3. Click on "Download ZIP"
4. Navigate to the downloaded zip and open it.
5. Open the folder inside the zip.
6. Follow steps 6-8 below.

Clone the repo:
1. Go to https://github.com/mekinsie/currency-exchanger
2. Navigate to and click the green <img src="assets/images/code-button.PNG" alt="code" height="20"> button on middle upper right part of webpage.
3. Copy the HTTPs address to your clipboard.
4. Open terminal or bash and navigate to the directory you wish to download the repo to.
5. Once you have chosen your desired directory, open your terminal, type "git clone [paste link]" and press enter:
```bash 
$ git clone https://github.com/mekinsie/currency-exchanger
```
6. To open the folder in your default code editor, navigate to the downloaded folder and type "code ." into your terminal:
``` bash
$ code .
```
7. Type "npm install" into the terminal to download the node modules folder and its corresponding dependencies. 
``` bash
$ npm install
```
8. While still in the root folder, create a .env file by typing "touch .env" in your terminal.
``` bash
$ touch .env
```
9. Continue to the steps below in "How to Get My Own API Key at ExchangeRate-API"

**How to Get My Own API Key at ExchangeRate-API**
1. Navigate to https://www.exchangerate-api.com/
2. Enter your email address and click "Get Free Key!"
3. Continue to create an account using your email, first name, and a new password. Agree to the terms of use and click "Get Started!"
4. You will be automatically navigated to the dashboard where you can copy your API key. You can also see your remaining API calls for the month here. 
5. Copy the API key to your clipboard and paste it in the .env file that you created in this format: API_KEY=[paste API key here without brackets]. Make sure to keep this API key secure just like you would a password.
6. Type "npm run start" into your terminal while still in the root folder. This will build a dist folder with a bundled js file and index.html and a live server will automatically open in your default browser.
``` bash
$ npm run start
```

## Known Bugs

* _No known bugs_

## License
_GPL_

Copyright (c) 2021 **_Mekinsie Callahan_**

## Contact Information
Reach me: via <a href="https://www.linkedin.com/in/mekinsie/" target="_blank">Linkedin</a> or <a href="mailto:mekinsie.aja@gmail.com" target="_blank">email</a></li>.

Checkout my <a href="https://github.com/mekinsie" target="_blank">github</a>.
