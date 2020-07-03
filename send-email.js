var request = require('request');


request.post({
	url: 'https://api:key-f460e38b483d2ae485475bdd249b9e03@api.mailgun.net/v3/sandbox7ff01357b99a4b32a96884c779775634.mailgun.org/messages',
	form: {
		from: 'NoReplay <noreplay@somewhere.com>',
		to: 'Idan Shatz <shatzi@globalgridsystems.com>',
		subject: 'Hello Idan Shatz',
		text: 'Congratulations Idan Shatz, you just sent an email with Mailgun!  You are truly awesome!',
		html: `
<div>
		<h1>Congrats</h1>
		<div>you just sent an email with Mailgun!</div>
		<div>You are truly awesome!</div>
</div>`
	}
}, function (error, response, body) {
	if (error) {
		console.log(error);
	} else {
		console.log(body);
	}
})
