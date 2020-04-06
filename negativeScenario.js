import { Selector } from 'testcafe';
const email=Selector('input#loginForm-email')
const password=Selector('input#loginForm-password')
const btnLogin=Selector('button#loginForm-submit')
const failuremsg=Selector('p').withText('Exception')

fixture `Login To GST`
    .page `http://saral.pro/login`;

test('Login to GST test', async t => {
    await t
    .maximizeWindow()
    .typeText(email,'rajesh.shetty@relyonsoft.com')
    .typeText(password,'Rajesh@1234')
    .click(btnLogin)
    .expect(failuremsg.exists).ok()
	//test code
	.wait(2000);
});
