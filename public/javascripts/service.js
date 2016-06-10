app.service("service",
    function() {
        //Variable privée
        var userData = [
            {
              "prix" : 5,
              "pub" : "oui",
              "serveurs" : "1"
            },
            {
              "prix" : 10,
              "pub" : "non",
              "serveurs" : "5"
            },
            {
              "prix" : 29.99,
              "pub" : "non",
              "serveurs" : "10"
            }

        ];
        return userData;
    }
);
