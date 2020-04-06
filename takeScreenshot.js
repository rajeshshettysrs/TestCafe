import { Selector } from 'testcafe';
const email=Selector('input#loginForm-email')
const password=Selector('input#loginForm-password')
const btnLogin=Selector('button#loginForm-submit')

fixture `Login To GST`
    .page `http://saral.pro/login`;

test('Take screen shot', async t => {
    await t
    .maximizeWindow()
    .takeScreenshot('GSTLoginPage.png')
	//test code
	.wait(2000);
});
// -s screenshots