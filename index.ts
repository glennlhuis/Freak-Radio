import DiscordJS, { Intents } from 'discord.js'
import { REST } from '@discordjs/rest'
import { Player } from 'discord-player'
import WOKCommands from 'wokcommands'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ]
})

client.on('ready', async ()=>{

    console.log('The Bot is ready')

    new WOKCommands(client,{
        commandsDir: path.join(__dirname, 'commands'),
        typeScript: true,
    })

})

client.login(process.env.TOKEN)