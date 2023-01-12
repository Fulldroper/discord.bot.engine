// aplication runner
(async () => {
  // env configuration
  process.env.NODE_ENV || await require('dotenv').config({ debug: false })
  // req discord framework
  const { Client, GatewayIntentBits } = await require('discord.js');  
  // init discord bot && rest obj
  const bot = new Client({ intents: [
    GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildIntegrations
  ] });
  // add command builder
  bot.cim = require("fd-dcc")
  // mount site
  bot.site = require("fd-dsite")
  // run bot
  bot.login(process.env.TOKEN)
  // mount comands
  bot.cim(__dirname +"/commands/")
  // catch errors
  bot.on("error", console.log)
  bot.on("ready", async function () {
    // await this.db.connect()
    let users_counter = 0
    
    await this.guilds.cache.forEach(async s => users_counter += s.memberCount )
    
    this.users_counter = users_counter
    
    console.log('[start] as ', this.user.tag, " at ", new Date);
    console.log(`[Commands](${Object.keys(this.cmds).length}):`, Object.keys(this.cmds));
    console.log(`[Servers](${this.guilds.cache.size})`);
    console.log(`[Users](${users_counter})`);
  
    this.site({
      name: this.user.username,
      logo: this.user.avatarURL(),
      description: this.description,
      uid: this.user.id,
      donate: '',
      site: '',
      telegram: '',
      email: '',
      commands: this.cmds
    })
  
  })
})()