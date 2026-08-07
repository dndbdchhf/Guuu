module.exports = {
	config: {
		name: "autoreactseen",
		version: "1.0",
		author: "ADNAN",
		category: "events"
	},

	onStart: async ({ event, api }) => {
		try {
			if (!event.messageID)
				return;

			const emojis = [
				"👍", "❤️", "😆", "😮", "😢", "😡",
				"🔥", "🥰", "😍", "🤩", "🎉", "💯",
				"😁", "😎", "🤣", "👏", "✨", "💖"
			];

			const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

			api.markAsRead(event.threadID);

			api.setMessageReaction(
				randomEmoji,
				event.messageID,
				() => {},
				true
			);

		} catch (err) {
			console.log(err);
		}
	}
};
