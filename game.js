let app = new Vue({
	el: "#app",
	data: {
		showLogin: true,
		loggedIn: false,
		loginType: "email",
		loginInput: "",
		username: "",
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
		},
		openLogin: function() {
			this.showLogin = true;
		},
		handleInput: function() {
			console.log(this.loginInput);
			if(this.loginType === "username") this.username = this.loginInput;
			if (this.username === "morgan_hartman") {
				this.loggedIn = true;
				this.showLogin = false;
			}
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