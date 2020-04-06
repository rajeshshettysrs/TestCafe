import { Selector } from 'testcafe';
const email=Selector('input#loginForm-email')
const password=Selector('input#loginForm-password')
const btnLogin=Selector('button#loginForm-submit')

fixture `Login To GST`
    .page `http://dev.saral.pro/login`;

test('Login to GST test', async t => {
    await t
    .maximizeWindow()
    .typeText(email,'rajesh.shetty@relyonsoft.com')
    .typeText(password,'Rajesh@123')
    .click(btnLogin)
	//test code
	.wait(2000);
});

//to run test concurrently use below cmd with terminal
// testcafe -c 2 chrome GSTLogin.js
//run script by skipping java script errors
// testcafe chrome GSTLogin.js -e