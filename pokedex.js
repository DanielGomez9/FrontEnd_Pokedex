const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    fetch(url)
		.then((res) => {
    		if (res.status != "200") {
            	console.log(res);
           		pokeImage("./imagen/equipoR.JPG");
				document.getElementById("pokeid").innerHTML = "Intenta de nuevo";
				document.getElementById("pokename").innerHTML = "";
				document.getElementById("poketype").innerHTML = "";
				document.getElementById("pokestats").innerHTML = "";
				document.getElementById("pokestatsn").innerHTML = "";
				document.getElementById("pokemoves").innerHTML = "";

       		}
       		else {
            	return res.json();
        	}
   		}) 

		.then((data) => {
        	if (data) {
            	let pokeImg = data.sprites.other.dream_world.front_default;
            	pokeImage(pokeImg);

				let pokeid = data.id;
				document.getElementById("pokeid").innerHTML = "#" + " " + pokeid;

				let pokename = data.species.name;
				document.getElementById("pokename").innerHTML = pokename;



				let poketype = data.types.map((typ) => typ.type.name);
				document.getElementById("poketype").innerHTML = poketype;

			
				let hp = data.stats[0].base_stat;
				let attack = data.stats[1].base_stat;
				let defense = data.stats[2].base_stat;
				let specialattack = data.stats[3].base_stat;
				let specialdefense = data.stats[4].base_stat;
				let speed = data.stats[5].base_stat;

				document.getElementById("pokestats").innerHTML = "";
				const lista = document.getElementById("pokestats");

				const li_hp = document.createElement("li");
				const li_attack = document.createElement("li");
				const li_defense = document.createElement("li");
				const li_specialattack = document.createElement("li");
				const li_specialdefense = document.createElement("li");
				const li_speed = document.createElement("li");

				li_hp.innerHTML = "<b> HP:</b>" + " " + hp;
				li_attack.innerHTML = "<b> Defense:</b>" + " " + attack;
				li_defense.innerHTML = "<b> Defense:</b>" + " " + defense;
				li_specialattack.innerHTML = "<b> Special Attack:</b>" + " " + specialattack;
				li_specialdefense.innerHTML = "<b> Special Defense:</b>" + " " + specialdefense;
				li_speed.innerHTML = "<b> Speed:</b>" + " " + speed;

				lista.appendChild(li_hp);
				lista.appendChild(li_attack);
				lista.appendChild(li_defense);
				lista.appendChild(li_specialattack);
				lista.appendChild(li_specialdefense);
				lista.appendChild(li_speed);

		
				let moves = data.moves.map((typ) => typ.move.name);
				document.getElementById("pokemoves").innerHTML = "";
				
				moves.forEach(function (espacio) {
					document.getElementById("pokemoves").innerHTML += "<li>" + espacio + "</li>";
				});
				
		


        	}
   		});
};

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;

};

const pokeide = (url) => {
	const poke1 = document.getElementById("pokeid");
	poke1.src = url;


};

const pokenamed = (url) => {
	const poke2 = document.getElementById("pokename");
	poke2.src = url;


};

const poketyped = (url) => {
	const poke3 = document.getElementById("poketype");
	poke3.src = url;

};

const pokestat = (url) => {
	const poke4 = document.getElementById("pokestats");
	poke4.src = url;
	

};

const pokestatn = (url) => {
		const poke4 = document.getElementById("pokestatsn");
		poke4.src = url;

};

const pokemove = (url) => {
	const poke6 = document.getElementById("pokemoves");
	poke6.src = url;


	
}
