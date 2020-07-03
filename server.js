var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

var app = express();

app.use(bodyParser.json());
app.use(express.static('dist'));
app.use('/src/assets', express.static('src/assets'));
app.use(express.static('src/assets/favicon'));

app.post('/contact', function (req, res) {

	var contact = req.body;

	if (!contact.name || !contact.email) {
		res.status(400);
		res.end('email and name where not provided');
		return;
	}

	request.post({
		url: 'https://api:key-f460e38b483d2ae485475bdd249b9e03@api.mailgun.net/v3/sandbox7ff01357b99a4b32a96884c779775634.mailgun.org/messages',
		form: {
			from: contact.email,
			to: 'Idan Shatz <shatzi@globalgridsystems.com>',
			subject: 'Contact us from www.globalgridsystems.com',
			text: `
name: ${contact.name}
email: ${contact.email}
phone: ${contact.phone}
body:
${contact.body}
`
		}
	}, function (error, response, body) {
		if (error) {
			res.status(500);
			res.end('failed to send email');
		} else {
			res.end('Email queued');
		}
	});
});

app.listen(process.env.PORT || 8080, function (error) {
	if (error) {
		console.log(error);
	}
})
