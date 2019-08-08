// TRANSLATION 4 UNTAMEDHero by Cubix
const i18n = {

// START BASIC & GLOBAL INFOS 

	basic: {
		success: {
			eng: 'Success',
			ro: 'Succes',
			rus: '',
			ger: '',
			esp: '',
			br: '',
			fr: '',
		},

		pressE: {
			eng: 'Press ~b~E ~s~',
			ro: 'Apasa ~b~E ~s~',
			rus: '',
			ger: '',
			esp: '',
			br: '',
			fr: '',
		},

		pressEToOpenMenu: {
			eng: 'Press ~b~E ~s~to open Menu',
			ro: 'Apasa ~b~E ~s~pentru a deschide meniul',
			rus: '',
			ger: '',
			esp: '',
			br: '',
			fr: '',			
		},

		earned1: {
			eng: 'You earned:',
			ro: 'Ai primit:',
			rus: '',
			ger: '',
			esp: '',
			br: '',
			fr: '',			
		},

		earned2: {
			eng: 'Keep it up',
			ro: 'Tine-o tot asa',
			rus: '',
			ger: '',
			esp: '',
			br: '',
			fr: '',
		},
		experience: {
			eng: 'Experience: ~r~',
			ro: 'Experienta: ~r~',			
			rus: '',
			ger: '',
			esp: '',
			br: '',
			fr: '',
		},
		outOf: {
			eng: 'of',
			ro: 'din',			
			rus: '',
			ger: '',
			esp: '',
			br: '',
			fr: '',
		},		

// MORE TO BE ADDED


	},

// END BASIC & GLOBAL INFOS 


// START AUTH & CHARACTER CREATION	
	
   uAuth: {    
        
		register: {
			eng: '',
			ro: '',			
			rus: '',
			ger: '',
			esp: '',
			br: '',
			fr: '',
		},
		register: {
			eng: '',
			ro: '',			
			rus: '',
			ger: '',
			esp: '',
			br: '',
			fr: '',
		},        
		register: {
			eng: '',
			ro: '',			
			rus: '',
			ger: '',
			esp: '',
			br: '',
			fr: '',
		},   
   
   
    	checkEmail: {
			eng: 'Please check your mail box.',
			ro: '',
			rus: '',
			ger: '',
			esp: '',
			br: '',
			fr: '',
		},    
    
	
	// MORE TO BE ADDED

	
	
	
	},


// END AUTH & CHARACTER CREATION	

// START uJOBS 

      uJobs: {
		youOpen2ndStageJob: {
			eng: 'You opened 2 stage of work!',
			ro: 'Ai deblocat partea a doua a muncii!',			
			rus: '',
			ger: '',
			esp: '',
			br: '',
			fr: '',
		},		  
		takeBoxToWarehouse: {
			eng: 'Take the box to the warehouse!',
			ro: 'Muta cutia in depozit!',			
			rus: '',
			ger: '',
			esp: '',
			br: '',
			fr: '',
		},		  
		takeCrateToPlatform: {
			eng: 'Take the crate to platform:',
			ro: 'Muta cutia la platforma:',			
			rus: '',
			ger: '',
			esp: '',
			br: '',
			fr: '',
		},		  		  
		takeCrateFromWarehouse: {
			eng: 'Take the crate out from the warehouse!',
			ro: 'Scoateti incarcatura din depozit!',			
			rus: '',
			ger: '',
			esp: '',
			br: '',
			fr: '',			
		},	
		unloadCrateToPlatform: {
			eng: 'Unload crate to platform:',
			ro: 'Descarcati cutia la platforma:',			
			rus: '',
			ger: '',
			esp: '',
			br: '',
			fr: '',
		},	
		youAlreadyTakenVeh: {
			eng: 'You have already taken one vehicle!',
			ro: 'Ai luat deja un vehicul',			
			rus: '',
			ger: '',
			esp: '',
			br: '',
			fr: '',
		},			
		 PortWorker: {
            

		 },			 
	  },

}

function get(type, string, lang) {
	const result = i18n[type][string];
	if (!result[lang]) return result.eng;
	return result[lang];
}
module.exports.get = get;