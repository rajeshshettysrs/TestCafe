import { Selector } from 'testcafe';
const email=Selector('input#loginForm-email')
const password=Selector('input#loginForm-password')
const btnLogin=Selector('button#loginForm-submit')
const clickHover=Selector('div').withText('rajesh.shetty')
const logout=Selector('div').withText('Logout')

fixture `Login To GST`
    .page `http://saral.pro/login`;

test('Logout Test', async t => {
    await t
    .maximizeWindow()
    .typeText(email,'rajesh.shetty@relyonsoft.com')
    .typeText(password,'Rajesh@123')
    .click(btnLogin)
    .hover(clickHover)
    .click(logout)
	//test code
	.wait(3000);
});
