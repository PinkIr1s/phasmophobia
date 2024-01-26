var blurbs = [
    {
        ghost: "Spirit",
        evidence: ["EMF Level 5", "Ghost Writing", "Spirit Box"],
        text: "Spirits are boring, thus it is easy to mistake a Spirit for another ghost. However, there is a way to be certain that the ghost is a Spirit. If you use an Incence, then normally a ghost cannot hunt within 90 seconds, but a spirit can only hunt after 180 seconds. You can use the 'Smudge' tab to time this."
    },
    {
        ghost: "Wraith",
        evidence: ["EMF Level 5", "Spirit Box", "D.O.T.S Projector"],
        text: "The Wraith cannot walk through salt. They can teleport to players and become active near them outside of events and hunts."
    },
    {
        ghost: "Phantom",
        evidence: ["Spirit Box", "Ultraviolet", "D.O.T.S Projector"],
        text: "The Phantom is much less visible while hunting and if you take a photo of it, it won't be in the photo."
    },
    {
        ghost: "Poltergeist",
        evidence: ["Spirit Box", "Ultraviolet", "Ghost Writing"],
        text: "Poltergeists can throw multiple objects simultaneously using their ability, which almost looks like an explosion. This becomes more noticable if you create a pile of items in one place."
    },
    {
        ghost: "Banshee",
        evidence: ["Ultraviolet", "Ghost Orb", "D.O.T.S Projector"],
        text: "Banshees target one specific player and will ignore all other players until their target is dead or has left the house. It cannot kill any player other while it is pursuing it's target. <br> <br> The Banshee can create a unique sound on the Parabolic Microphone. (below) <br><br> <audio controls><source src='Banshee-Scream.ogg' type='audio/ogg'></audio>"
    },
    {
        ghost: "Jinn",
        evidence: ["EMF Level 5", "Ultraviolet", "Freezing Temps"],
        text: "The Jinn cannot turn off the breaker. It also gets a speed boost when far away from the player it is chasing. <br><br> You can tell for certain if the ghost is a jinn by placing an EMF Scanner by the fuse box. If the scanner goes off and the fuse doesn't break, then it must be a Jinn. You can also tell from the van if you put a sound sensor by it."
    },
    {
        ghost: "Mare",
        evidence: ["Spirit Box", "Ghost Orb", "Ghost Writing"],
        text: "Mares hate the light and can turn off light switches within a second of a player turning it on as long as the Mare is within 4 metres of the switch. Also, they cannot turn lights on. They are more likely to perform break-light events. <br><br> The Mare's sanity threshold for hunting is 40% if the room that it is currently in has lights turned on (including roaming). And it changes to 60% if the lights are turned off."
    },
    {
        ghost: "Revenant",
        evidence: ["Ghost Orb", "Ghost Writing", "Freezing Temps"],
        text: "Revenants are very slow (1m/s) while roaming in a hunt but are extremely fast (3m/s) when chasing a player."
    },
    {
        ghost: "Shade",
        evidence: ["EMF Level 5", "Ghost Writing", "Freezing Temps"],
        text: "Shades cannot start events or hunts while the player is in the same room as them. They can only hunt when the average sanity is at or below 40%"   },
    {
        ghost: "Demon",
        evidence: ["Ultraviolet", "Ghost Box", "Freezing Temps"],
        text: "Demons can hunt at 70 sanity, they also can use their ability to hunt at anytime. They also only have a 20 second cooldown between hunts as opposed to the regular 25. Crucifixes are more effective on Demons, they have a range increase of 1.5x. <br><br> <li>4.5 metres instead of 3 for Tier I</li> <li>6 metres instead of 4 for Tier II</li> <li>7.5 metres instead of 5 for Tier III</li> <br> Demons can also hunt earlier after being smudged by a player. Use the 'Smudge' tab to time this."
    },
    {
        ghost: "Yurei",
        evidence: ["Ghost Orb", "Freezing Temps", "D.O.T.S Projector"],
        text: "The Yurei is the only ghost that can close the front door outside of a hunt or an event. It also more frequently closes doors using its ability which also drains player's sanity quickly."
    },
    {
        ghost: "Oni",
        evidence: ["EMF Level 5", "Freezing Temps", "D.O.T.S Projector"],
        text: "The Oni cannot create the airball hiss event, keep in mind that there is a similar event in which the ghost walks toward you and hisses, but that doesn't count."
    },
    {
        ghost: "Yokai",
        evidence: ["Spirit Box", "Ghost Orb", "D.O.T.S Projector"],
        text: "If players are loudly talking near a Yokai, they can start a hunt regardless of sanity. The radius in which a Yokai can hear players during a hunt is much smaller than other ghosts."
    },
    {
        ghost: "Hantu",
        evidence: ["Ultraviolet", "Ghost Orb", "Freezing Temps"],
        text: "Hantus cannot turn off the fuse box and are twice as likely to turn it off. They force Freezing Temps and are faster in the cold. Also, when hunting while the breaker is off, Hantus will breathe out cold breaths of mist."
    },
    {
        ghost: "Goryo",
        evidence: ["EMF Level 5", "Ultraviolet", "D.O.T.S Projector"],
        text: "The Goryo doesn't roam very much and cannot change rooms."
    },
    {
        ghost: "Myling",
        evidence: ["EMF Level 5", "Ultraviolet", "Ghost Writing"],
        text: "Mylings are very loud on the Parabolic Speaker, and are very quite when hunting. If you place your flashlight next to you and you can only hear the ghost as the light flickers, you likely have a Myling."
    },
    {
        ghost: "Onryo",
        evidence: ["Spirit Box", "Ghost Orb", "Freezing Temps"],
        text: "For Onryos, Firelights work similarly to crucifixes. If a firelight is lit, it will prevent an Onryo from hunting, but only the first two times. After it blows out the third Firelight, it will initiate a hunt."
    },
    {
        ghost: "The Twins",
        evidence: ["EMF Level 5", "Spirit Box", "Freezing Temps"],
        text: "The Twins can interact with the environment at the exact same time, you can see this on the Activiy Monitor if it goes up twice in one tick, making a curve-like shape."
    },
    {
        ghost: "Raiju",
        evidence: ["EMF Level 5", "Ghost Orb", "D.O.T.S Projector"],
        text: "Raiju speed up near turned on electronics. The hunt sanity threshold is increased to 65%."
    },
    {
        ghost: "Obake",
        evidence: ["EMF Level 5", "Ultraviolet", "Ghost Orb"],
        text: "The Obake has a 1 in 6 chance (~16.7%) to leave 6 fingered hand prints and double fingerprints on light switches. They only have a 75% chance to leave ultraviolet evidence on valid surfaces when they interact, rather than the usual 100%. <br><br> Obake also have a very recognisable trait when hunting. Once per hunt, they will blink into a different ghost model and then back."
    },
    {
        ghost: "The Mimic",
        evidence: ["Spirit Box", "Ultraviolet", "Freezing Temps"],
        text: "The Mimic can copy the behaviours of other ghosts, but not the evidence. It also forces ghost orbs."
    },
    {
        ghost: "Moroi",
        evidence: ["Spirit Box", "Ghost Writing", "Freezing Temps"],
        text: "Moroi get faster as the average sanity decreases. They move very fast at 0% sanity. <br><br> <table class='ghostTable'><tr><th>Average Sanity %</th><th>Ghost Speed</th></tr><tr class='tableDark'><td>&ge; 45%</td><td>1.5m/s</td></tr><tr><td>30%-45%</td><td>1.5m/s - 1.75m/s</td></tr><tr class='tableDark'><td>10%-30%</td><td>1.75m/s - 2m/s</td></tr><tr><td>&lt;10%</td><td>2.25m/s</td></tr></table>"
    },
    {
        ghost: "Deogen",
        evidence: ["Spirit Box", "Ghost Writing", "D.O.T.S Projector"],
        text: "Deogen always know where you are during a hunt, therefore you cannot hide from them. They move very quickly, but slow down massively when approaching a player. <br> <br> Deogen force Spirit Box because they have a 33% chance to respond with a unique response that sounds like heavy breathing. (below) <br> <br> <audio controls><source src='Deogen-Breathe.mpeg' type='audio/mpeg'></audio>"
    },
    {
        ghost: "Thaye",
        evidence: ["Ghost Orb", "Ghost Writing", "D.O.T.S Projector"],
        text: "Thayes age over the course of the contract, they start fast and active and become slow and inactive over time. They attempt to age every 1-2 minutes, it will gain 1 age (scale of 1-10) as long as there is a player in the same room as it when it attempts to age. If there isn't, it will attempt again after 30 seconds."
    }
];
