angular.module("ContactsApp")
	.factory("Contact", function ($resource) {
		return $resource("/api/contact/:id", {id:"@id"}, {
			"update": {method: "PUT"}
		});
	})
	.factory("Dictionary", function () {
		return {
		    firstName: 'First name',
		    lastName:  'Last name',
		    email:     'E-mail',
		    homePhone: 'Home phone',
		    cellPhone: 'Cell/mobile phone',
		    birthday:  'Birthday',
		    website:   'Website/social network',
		    address:   'Address'
	    }
	}).factory("ContactStr", function () {
		return {
            firstName: ['', 'text'],
            lastName:  ['', 'text'],
            email:     ['', 'email'],
            homePhone: ['', 'tel'],
            cellPhone: ['', 'tel'],
            birthday:  ['', 'date'],
            website:   ['', 'url'],
            address:   ['', 'text']
        }
	});


	