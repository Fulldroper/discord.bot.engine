---
title: "Discord Bot Engine"
description: "Engine for easy creation and management of Discord bots with simple slash command implementation"
publishDate: "12 Jun 2023"
updatedDate: "12 Jun 2023"
tags: ["Node.js", "Discord Bot", "Slash Commands"]
---
The purpose of this project is to create an engine for easy creation and management of Discord bots, with straightforward implementation of slash commands.

### Project Benefits
This project streamlines the process of developing and managing Discord bots, making it accessible for developers to integrate slash commands and manage bot functionalities.

### How the Project Works
The project sets up a Discord bot engine using Node.js, allowing developers to quickly create bots and implement slash commands with minimal setup.

### Repository and Installation
[GitHub Repository](https://github.com/Fulldroper/discord.bot.engine)

To install and run the project:

1. Clone the repository:
    ```bash
    git clone https://github.com/Fulldroper/discord.bot.engine
    cd discord.bot.engine
    ```

2. Install dependencies and start the bot:
    ```bash
    npm install
    npm start
    ```

### Project Workflow
1. **Setup Project:** Initialize the project structure and dependencies.
    ```bash
    npm init
    npm install
    ```

2. **Create Discord Bot:** Set up the bot and configure it to use slash commands.
    ```javascript
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
    ```

3. **Implement Slash Commands:** Add functionality for handling slash commands.
    ```javascript
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
    ```

### Skills Gained
- Developing Discord bots with Node.js
- Implementing and managing slash commands
- Creating scalable bot engines for easy management
