let app = new Vue({
	el: "#app",
	data: {
		showLogin: true,
		loggedIn: false,
		loginType: "email",
		loginInput: "",
		username: "",
		email: "",
		emailMessage: "",
		showEmailMessage: false,
		turns: 0,
		timer: null,
		time: "--:--",
		score: 0
	},
	methods: {
		logInWithEmail: function() {
			this.loginType = "email";
			this.showInput = true;
		},
		logInWithUsername: function() {
			this.loginType = "username";
			this.showInput = true;
		},
		closeLogin: function() {
			this.showLogin = false;
			this.emailMessage = "";
			this.showEmailMessage = false;
		},
		openLogin: function() {
			this.showLogin = true;
		},
		handleInput: function() {
			if(this.loginType === "username") {
				this.username = this.loginInput;
				if (this.username === "morgan_hartman") {
					this.loggedIn = true;
					this.closeLogin();
				}
			}
			else if (this.loginType === "email") {
				var _this = this;
				this.email = this.loginInput;
        		console.log(`Email Input is ${this.email}.`);
        		const accessKey = "81a42f979a60a5020baa7b1ec7c058e5";
        		const url = "http://apilayer.net/api/check?access_key=" + accessKey + "&email=" + this.email;
        		fetch(url)
            		.then(function(response) {
                		return response.json();
            		}).then(function(json) {
                		console.log(json);
                		if (json.score >= 0.8 || json.format_valid === true) {
							console.log("success");
							_this.emailMessage = "Valid";
							_this.username = _this.email;
							_this.loggedIn = true;
                		} else {
							console.log("fail");
							_this.emailMessage = "Please enter a valid email address.";
							_this.loggedIn = false;
                		}
					});
				this.showEmailMessage = true;
			} else {
				console.log('error');
				this.emailMessage = "Please enter a valid email address or username."
				this.loggedIn = false;
				this.showEmailMessage = true;
			}

			//REDO THIS. Needs to be await
			if (this.loggedIn) this.closeLogin();
		},
		logOut: function() {
			this.loggedIn = false;
			this.loginInput = "";
			this.username = "";
		}
	},
	created() {
		this.showLogin = true;
	}
});