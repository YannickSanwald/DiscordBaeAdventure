const gameItems = require('../../gameLogic/GameItem.js');
const gameInventory = require('../../gameLogic/GameInventory.js');
const gameStoryProgress = require('../../gameLogic/GameStoryProgress.js');
const gameStoryBits = require('../../gameLogic/GameStoryBits.js');
const gameChannels = require('../../gameLogic/GameChannels.js');
const gameUsers = require('../../gameLogic/GameUsers.js');
const commandPromptNext= "\n\n Bitte ein Person '!Next' eingeben!";
const commandPromptQuiz="\n\n Zum beginnen '!Quiz' eingeben";


module.exports = {
	name: 'next',
	description: 'Next Command for votings',
	execute(message) {
        const channelId = message.channel.id; 
        const currentUser = gameUsers.getUserByMemberRoles(message.member.roles);
        
        // if(!currentUser.energy >= this.energyCost)
        // {
        //     return message.channel.send(`You dont have enough energy left! You need at least ${this.energyCost} to make fire.`)
        // }

        // currentUser.energy -= this.energyCost;
        // currentUser.occupationTimeStamp = message.createdAt.getTime() + this.occupationTime;
        
        if(channelId === gameChannels.channelFactory.crash.id)
        {
            if(gameStoryBits.storyBits.crashWelcome.isActive)
            {
                const bitPart = gameStoryBits.getNextPart(gameStoryBits.storyBits.crashWelcome)
                return message.channel.send(bitPart.text);
            }
        }
        else if(channelId === gameChannels.channelFactory.camp.id)
        {
           
        }
        else if(channelId === gameChannels.channelFactory.clearing.id)
        {
           
        }
        else if(channelId === gameChannels.channelFactory.cabin.id)
        {
           
        }
        else if(channelId === gameChannels.channelFactory.hill.id)
        {
          if(gameStoryBits.storyBits.HillPath.isActive)
            {
                const bitPart = gameStoryBits.getNextPart(gameStoryBits.storyBits.HillPath)
                return message.channel.send("Ihr folgt der Karte Richtung Mountain und entdeckt ein Schild mit der Aufschrift 'Voll Krasser Lift'.\n"
												"Ihr beschließt euch dem Schild zu folgen und begegnet einem Gnomen.\n"
										+ "Hallo ihr da! Möchtet ihr auf den Mountain und die schöne Aussicht sehen? \n"
										+" Es ist wirklich einmalig da oben! Ich biete euch an meinen Lift zu benutzen! \n"
										+"Ich werde euch 5 Fragen stellen. Beratet euch untereinander und lässt mich eure Antwort hören. \n"
										+"Ich brauche nur von euren Teamcaptain die Antwort zu hören! \n"
										+"Wenn mehrere Personen mit mir reden, zähle ich dies als Antwort auf die Nächsten Fragen! \n"
										+"Wenn ihr 4 Stück falsch habt, dann Boxe ich euch für 10 Minuten die Lichter aus! \n"
										+"Gibt mir mit “!QUIZ” das Signal zum beginnen des Quiz\n"
										+"Der Alte Gnom setzt sich auf ein Weinfass und summt wartend vor sich her."
										+commandPromptQuiz);
			} 
        }
        
		else if(channelId === gameChannels.channelFactory.mountain.id)
        {if(gameStoryBits.storyBits.finishPinish.isActive)
            {
                const bitPart = gameStoryBits.getNextPart(gameStoryBits.storyBits.finishPinish)
                return message.channel.send("Vielen Dank für das spielen dieses Spiels. \n"
											+"Wir hoffen Ihr hattet Spaß und konntet ein wenig über unsere dummen Witze Lachen.\n"
											+"In kürze (2 Minuten) wird der Server resettet.\n" 
											+"Danach könnt Ihr das Spiel erneut spielen (oder auch nicht) oder Platz für eine andere Gruppe zum Testen machen. \n"
											+"Bis dann!\n"
										
			}
          
        }

        return message.channel.send('Das Next-Command hat hier keine Funktion!\nVersuchst du an einem bereits abgeschlossenen Voting teilzunehmen? Tut mir leid, aber die Vergangenheit bleibt Vergangenheit!');
	},
};