"use strict";
var nforce = require('nforce');

var connection = {};

var org = nforce.createConnection({
	clientId: process.env.OAUTH_KEY,
	clientSecret: process.env.OAUTH_SECRET,
	redirectUri: process.env.REDIRECT_URI,
	apiVersion: 'v38.0',  // optional, defaults to current salesforce API version
	environment: 'production',  // optional, salesforce 'sandbox' or 'production', production default
	mode: 'multi', // optional, 'single' or 'multi' user mode, multi default
});

//the above equals to the following
connection.getOrg = function(){
	return org;
};

module.exports = connection;
