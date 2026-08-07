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
			if (event.threadID && event.senderID)
				api.markAsRead(event.threadID);
		}
		catch (e) {
			console.log(e);
		}
	}
};
