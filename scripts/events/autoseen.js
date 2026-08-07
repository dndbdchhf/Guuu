module.exports = {
	config: {
		name: "autoseen",
		version: "1.0",
		author: "ChatGPT",
		category: "events"
	},

	onStart: async () => {},

	onChat: async ({ api, event }) => {
		try {
			if (event.isGroup)
				api.markAsRead(event.threadID);
		}
		catch (err) {
			console.log("Auto Seen Error:", err);
		}
	}
};
