const { remote } = require('webdriverio');

(async () => {
    const browser = await remote({
        logLevel: 'trace',
        capabilities: {
            browserName: 'chrome'
        }
    })

    await browser.url('https://formy-project.herokuapp.com/')
    
    //  Click into complete web form link
    const fullFormLink = await browser.$('=Complete Web Form');
    await fullFormLink.click();
    // Enter First Name, last name, job title in text boxes
    const userFirst = await browser.$('#first-name');
    await userFirst.setValue('Mike');
    const userLast = await browser.$('#last-name');
    await userLast.setValue('DeFrank');
    const jobTitle = await browser.$('#job-title');
    await jobTitle.setValue('QA Automation Engineer');
    // Select radio button for education
    const collegeRadio = await browser.$('#radio-button-2');
    await collegeRadio.click();
    // Select gender
    const maleCheckbox = await browser.$('#checkbox-1');
    await maleCheckbox.click();
    // Pick years of experience from drop-down
    const expDropdown = await browser.$('#select-menu');
    expDropdown.selectByIndex(2);
    // Get today's date only
    var today = new Date();
    var date = String(today.getDate());
    console.log(date);
    // Populate date
    const datePicker = await browser.$('#datepicker');
    await datePicker.click();
    // Insert half second pause to wait for picker to open
    browser.pause(500);
    const todaysDate = await browser.$('td.today');
    await todaysDate.click();
    // Submit
    const submitBtn = await browser.$('=Submit')
    await submitBtn.click();
    // Check for success message
    const successMessage = await browser.$('=The form was successfully submitted!')
    if (successMessage) {
        console.log('\x1b[32m', 'Success message has appeared as expected.')
    }
    await browser.deleteSession()
})().catch((e) => console.error(e))