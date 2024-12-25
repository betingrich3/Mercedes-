const config = require('../config')
const {cmd , commands} = require('../command')
const {
    systemUi,
    program
} = require('../helplugins')

cmd({
    pattern: "bug",
    desc: "Send crashMsgCall message 20 times",
    category: "main",
    react: "🔁",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        // Ensure crashMsgCall is a function and can be executed
        if (typeof crashMsgCall !== 'function') {
            return reply("Error: crashMsgCall is not defined as a function.");
        }

        for (let i = 0; i < 20; i++) {
            await crashMsgCall(conn, from, "This is a crash message."); // Adjust the parameters as needed
        }

        reply("Crash message sent 20 times!");
    } catch (error) {
        console.error(error);
        reply("An error occurred while trying to send the crash message.");
    }
});
