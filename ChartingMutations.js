/**
 Charting Mutations. A program designed to show how to mutate plants in CookieClicker's garden.
 Copyright (C) 2021  Elijah Anderson<contact@frustratedprogrammer.com>

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, version 3 of the License.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program.  If not, see <https://www.gnu.org/licenses/>.
 **/
let CSSFILE = `
.seedLocked{
    filter:opacity(0.3)!important;
}
.seedLocked:hover{
    cursor:default;
}
.ModChartingMutationsDisplay{
    background:url(//cdn.dashnet.org/cookieclicker/img/BGgarden.jpg);
    padding:10px;
    display:flex;
    width:max-content
}
.ModChartingMutationsPlantNeeded {
    display:block;
    opacity:1;
    width:48px;
    height:48px;
    pointer-events:none;
    transform:translate(-4px,-12px);
    position: absolute;
}
.ModChartingMutationsDisplayMutation{
    margin:10px;
}
.ModChartingMutationsDisplay table{
    background:url(//cdn.dashnet.org/cookieclicker/img/shadedBorders.png);
    background-size:100%, 100%, auto; 
    height:min-content;
}
.ModChartingMutationsSpawnChance{
    position: absolute;
    top: 10px;
    z-index: 999;
    text-shadow: -2px -3px 1px black;
}
.ModChartingMutationsSpecialInstructions, .ModChartingMutationsSpawnChance{
    color:white;
    width: 80px;
    display: block;
    font-size: 78%;
    line-height: 10px;
    font-family: monospace;
    z-index:999;
    text-shadow: -2px -3px 1px black;
    
}
.ModChartingMutationsDisplay td{
    width:40px;
    height:40px;
    background:url("https://cdn.dashnet.org/cookieclicker/img/gardenPlots.png");
    background-repeat:no-repeat;
}

.ModChartingMutationsPlantSpawn{
    display:block;
    opacity:1;
    width:48px;
    height:48px;
    pointer-events:none;
    transform:translate(-4px,-12px);
    position: absolute;
}`;
let head = document.getElementsByTagName("head")[0];
let style = document.createElement("style");
style.id = "ModChartingMutations_CSS";
style.type = "text/css";
style.innerHTML = CSSFILE;
head.appendChild(style);

let plantMutation = function(spawnChance, plants, specialInstructions){
    return {
        spawnChance: spawnChance,
        plot: plants.length === 2 ? [["spawn", plants[0]], [plants[1], "spawn"]] : [plants],
        specialInstructions: specialInstructions || false
    };
};
let plantsMutationChart = {
    //Percent chance taken from the minigame source code itself. Line 640 in 'minigameGarden.js'
    //Percent chance has been multiplied by 100
    //Eg: 500 = 5% chance.
    bakerWheat: [
        plantMutation(2000, ["bakerWheat", "bakerWheat"]),
        plantMutation(500, ["thumbcorn", "thumbcorn"])
    ],
    thumbcorn: [
        plantMutation(500, ["bakerWheat", "bakerWheat"]),
        plantMutation(1000, ["thumbcorn", "thumbcorn"]),
        plantMutation(200, ["cronerice", "cronerice"])
    ],
    cronerice: [
        plantMutation(100, ["bakerWheat", "thumbcorn"])
    ],
    gildmillet: [
        plantMutation(300, ["cronerice", "thumbcorn"])
    ],
    bakeberry: [
        plantMutation(10, ["bakerWheat", "bakerWheat"])
    ],
    clover: [
        plantMutation(300, ["bakerWheat", "gildmillet"]),
        {
            spawnChance: 70,
            plot: [
                ["spawn", "clover"],
                ["clover", "spawn"]
            ],
            specialInstructions: "Will not spawn if 5 other clovers are next to it"
        }
    ],
    goldenClover: [
        plantMutation(7, ["bakerWheat", "gildmillet"]),
        {
            spawnChance: 1,
            plot: [
                ["spawn", "clover"],
                ["clover", "spawn"]
            ],
            specialInstructions: "Will not spawn if 5 other clovers are next to it"
        },
        {
            spawnChance: 7,
            plot: [
                ["nothing", "clover","nothing"],
                ["nothing", "spawn","clover"],
                ["clover","nothing","clover"]
            ],
            specialInstructions: "Only can spawn if adjacent to a <i>minimum</i> of 4 clovers."
        }
    ],
    shimmerlily: [
        plantMutation(200, ["clover", "gildmillet"])
    ],
    elderwort: [
        plantMutation(100, ["shimmerlily", "cronerice"]),
        plantMutation(20, ["wrinklegill", "cronerice"])
    ],
    chocoroot: [
        plantMutation(1000, ["bakerWheat", "brownMold"], "The brown mold does <i>not</i> need to be mature.")
    ],
    whiteChocoroot: [
        plantMutation(1000, ["chocoroot", "whiteMildew"], "The white mildew does <i>not</i> need to be mature.")
    ],
    brownMold: [
        plantMutation(5000, ["whiteMildew", "brownMold"], "The brown mold does <i>not</i> need to be mature."),
        {
            spawnChance: 2000,
            plot: [
                ["meddleweed", "meddleweed"],
                ["meddleweed", "meddleweed"]
            ],
            specialInstructions: "Chance to spawn upon <i>harvesting</i> meddleweed."
        }
    ],
    whiteMildew: [
        plantMutation(5000, ["brownMold", "whiteMildew"], "The white mildew does <i>not</i> need to be mature.")
    ],
    meddleweed: [
        plantMutation(1500, ["meddleweed", "meddleweed"], "Meddleweed will not spawn near 4 other Meddleweed.")
    ],
    whiskerbloom: [
        plantMutation(100, ["shimmerlily", "whiteChocoroot"])
    ],
    chimerose: [
        plantMutation(500, ["shimmerlily", "whiskerbloom"]),
        plantMutation(50, ["chimerose", "chimerose"])
    ],
    nursetulip: [
        plantMutation(500, ["whiskerbloom", "whiskerbloom"])
    ],
    drowsyfern: [
        plantMutation(50, ["chocoroot", "keenmoss"])
    ],
    wardlichen: [
        plantMutation(50, ["cronerice", "keenmoss"]),
        plantMutation(50, ["cronerice", "whiteMildew"]),
        {
            spawnChance: 500,
            plot: [
                ["nothing", "wardlichen", "spawn"],
                ["wardlichen", "nothing", "spawn"],
                ["spawn", "spawn", "nothing"]
            ],
            specialInstructions: "Will not spawn if more than 2 wardlichens are nearby."
        }
    ],
    keenmoss: [
        plantMutation(1000, ["greenRot", "brownMold"]),
        {
            spawnChance: 1000,
            plot: [
                ["nothing", "keenmoss", "spawn"],
                ["keenmoss", "nothing", "spawn"],
                ["spawn", "spawn", "nothing"]
            ],
            specialInstructions: "Will not spawn if more than 2 keenmoss are nearby."
        }
    ],
    queenbeet: [
        plantMutation(100, ["chocoroot", "bakeberry"])
    ],
    queenbeetLump: [
        {
            spawnChance: 10,
            plot: [
                ["queenbeet", "queenbeet", "queenbeet"],
                ["queenbeet", "spawn", "queenbeet"],
                ["queenbeet", "queenbeet", "queenbeet"]
            ]
        }
    ],
    duketater: [
        plantMutation(10, ["queenbeet", "queenbeet"])
    ],
    crumbspore: [
        plantMutation(700, ["crumbspore", "spawn"], "Will not spawn if more than 1 crumbspores are nearby."),
        {
            spawnChance: 2000,
            plot: [
                ["meddleweed", "meddleweed"],
                ["meddleweed", "meddleweed"]
            ],
            specialInstructions: "Chance to spawn upon <i>harvesting</i> meddleweed."
        },
        plantMutation(50, ["doughshroom", "doughshroom"])
    ],
    glovemorel: [
        plantMutation(200, ["crumbspore", "thumbcorn"])
    ],
    cheapcap: [
        plantMutation(400, ["crumbspore", "shimmerlily"])
    ],
    foolBolete: [
        plantMutation(400, ["doughshroom", "greenRot"])
    ],
    doughshroom: [
        plantMutation(50, ["crumbspore", "crumbspore"]),
        plantMutation(700, ["doughshroom", "spawn"], "Will not spawn if more than 1 crumbspores are nearby.")
    ],
    wrinklegill: [
        plantMutation(600, ["crumbspore", "brownMold"])
    ],
    greenRot: [
        plantMutation(500, ["whiteMildew", "clover"])
    ],
    shriekbulb: [
        plantMutation(10, ["wrinklegill", "elderwort"]),
        {
            spawnChance: 10,
            plot: [
                ["nothing", "elderwort", "elderwort"],
                ["elderwort", "spawn", "nothing"],
                ["elderwort", "nothing", "elderwort"]
            ],
            specialInstructions: "Only can spawn if adjacent to a <i>minimum</i> of 5 elderworts."
        },
        {
            spawnChance: 50,
            plot: [
                ["nothing", "shriekbulb", "nothing"],
                ["nothing", "spawn", "shriekbulb"],
                ["shriekbulb", "nothing", "nothing"]
            ],
            specialInstructions: "Only can spawn if adjacent to a <i>minimum</i> of 3 duketaters."
        },
        {
            spawnChance: 20,
            plot: [
                ["nothing", "doughshroom", "nothing"],
                ["nothing", "spawn", "doughshroom"],
                ["doughshroom", "doughshroom", "nothing"]
            ],
            specialInstructions: "Only can spawn if adjacent to a <i>minimum</i> of 4 doughshrooms."
        },
        {
            spawnChance: 10,
            plot: [
                ["queenbeet", "nothing", "queenbeet"],
                ["nothing", "spawn", "queenbeet"],
                ["queenbeet", "queenbeet", "nothing"]
            ],
            specialInstructions: "Only can spawn if adjacent to a <i>minimum</i> of 5 queenbeets."
        },
        plantMutation(50, ["shriekbulb", "spawn"], "Will not spawn if more than 1 shriekbulb are nearby.<br>The shriekbulb does <i>not</i> have to be mature.")
    ],
    tidygrass: [
        plantMutation(20, ["bakerWheat", "whiteChocoroot"])
    ],
    everdaisy: [
        {
            spawnChance: 20,
            plot: [
                ["tidygrass", "nothing", "elderwort"],
                ["tidygrass", "spawn", "elderwort"],
                ["tidygrass", "nothing", "elderwort"]
            ],
            specialInstructions: "Only can spawn if adjacent to a <i>minimum</i> of 3 elderworts and tidygrass."
        }
    ],
    ichorpuff: [
        plantMutation(20, ["elderwort", "crumbspore"])
    ]
};
let plantsToId = {
    bakerWheat: 0,
    thumbcorn: 1,
    cronerice: 2,
    gildmillet: 3,
    clover: 4,
    goldenClover: 5,
    shimmerlily: 6,
    elderwort: 7,
    bakeberry: 8,
    chocoroot: 9,
    whiteChocoroot: 10,
    whiteMildew: 11,
    brownMold: 12,
    meddleweed: 13,
    whiskerbloom: 14,
    chimerose: 15,
    nursetulip: 16,
    drowsyfern: 17,
    wardlichen: 18,
    keenmoss: 19,
    queenbeet: 20,
    queenbeetLump: 21,
    duketater: 22,
    crumbspore: 23,
    doughshroom: 24,
    glovemorel: 25,
    cheapcap: 26,
    foolBolete: 27,
    wrinklegill: 28,
    greenRot: 29,
    shriekbulb: 30,
    tidygrass: 31,
    everdaisy: 32,
    ichorpuff: 33
};

function l(what){return document.getElementById(what);}

function updateMinigame(){
    let garden = Game.Objects.Farm.minigame;
    garden.seedTooltip = function(id){
        return function(){
            var me = garden.plantsById[id];
            let mutations = plantsMutationChart[me.key];
            var str = "";
            if(me.unlocked && Game.buyBulkShortcut === (ChartingMutationsMain.prioritizeMutationChart ? 1 : 0)){
                str = "<div style=\"padding:8px 4px;min-width:400px;\" id=\"tooltipGardenSeed\">" +
                    "<div class=\"icon\" style=\"background:url(" + Game.resPath + "img/gardenPlants.png?v=" + Game.version + ");float:left;margin-left:-24px;margin-top:-4px;background-position:" + (-0 * 48) + "px " + (-me.icon * 48) + "px;\"></div>" +
                    "<div class=\"icon\" style=\"background:url(" + Game.resPath + "img/gardenPlants.png?v=" + Game.version + ");float:left;margin-left:-24px;margin-top:-28px;background-position:" + (-4 * 48) + "px " + (-me.icon * 48) + "px;\"></div>" +
                    "<div style=\"background:url(" + Game.resPath + "img/turnInto.png);width:20px;height:22px;position:absolute;left:28px;top:24px;z-index:1000;\"></div>" +
                    (me.plantable ? ("<div style=\"float:right;text-align:right;width:100px;\"><small>" + loc("Planting cost:") + "</small><br><span class=\"price" + (garden.canPlant(me) ? "" : " disabled") + "\">" + Beautify(Math.round(shortenNumber(garden.getCost(me)))) + "</span><br><small>" + loc("%1 of CpS,<br>minimum %2", [Game.sayTime(me.cost * 60 * 30, -1), loc("%1 cookie", LBeautify(me.costM))]) + "</small></div>") : "") +
                    "<div style=\"width:300px;\"><div class=\"name\">" + cap(loc("%1 seed", me.name)) + "</div><div><small>" + (me.plantable ? loc("Click to select this seed for planting.") : "<span class=\"red\">" + loc("This seed cannot be planted.") + "</span>") + "<br>" + loc("%1 to harvest all mature plants of this type.", loc("Shift") + "+" + loc("Ctrl") + "+" + loc("Click")) + "</small></div></div>" +
                    "<div class=\"line\"></div>" +
                    garden.getPlantDesc(me) +
                    "</div>";
            }
            else{

                str = "<div style=\"padding:8px 4px;\" id=\"tooltipGardenSeed\">" +
                    "<div class='ModChartingMutationsDisplay'>";

                for(let i = 0; i < mutations.length; i++){
                    let mutation = mutations[i];
                    let div = document.createElement("div");
                    div.className = "ModChartingMutationsDisplayMutation";
                    if(ChartingMutationsMain.showExtraInfo){
                        let percent = document.createElement("span");
                        percent.className = "ModChartingMutationsSpawnChance";
                        percent.innerHTML = `Mutation Chance: <span style="color:#00f1ff">${(mutation.spawnChance / 100).toString().substring(0, 5)}%</span>`;
                        div.appendChild(percent);
                    }
                    let table = document.createElement("table");
                    let plotSize = mutation.plot.length;
                    for(let rows = 0; rows < plotSize; rows++){
                        let row = document.createElement("tr");
                        for(let columns = 0; columns < plotSize; columns++){
                            let tile = mutation.plot[rows][columns];
                            let td = document.createElement("td");
                            switch(tile){
                                case "nothing":
                                    break;
                                case "spawn":
                                    let icon = document.createElement("div");
                                    icon.classList.add("ModChartingMutationsPlantSpawn");
                                    //NOTE: I did use CSS3 animation keyframes to animate at first.
                                    //It worked wonders in testing! But not in practice.
                                    //Why? Because Ortiel 'redraws' the ENTIRE tooltip every tick
                                    //Thereby, resetting the animation and it's technically a brand new element.
                                    //Now I'm using this cheeky math to do it... Don't Judge...

                                    let animationDifference = (i * 2);
                                    let currentFrame = ((Math.round(Game.T / Game.fps))+animationDifference) % 6;
                                    icon.style.opacity = 1;
                                    switch(currentFrame){
                                        case 0:
                                            icon.style.opacity = 0;
                                            break;
                                        case 1:
                                            icon.style.backgroundPositionX = `-48px`;
                                            break;
                                        case 2:
                                            icon.style.backgroundPositionX = `-96px`;
                                            break;
                                        case 3:
                                            icon.style.backgroundPositionX = `-144px`;
                                            break;
                                        default:
                                            icon.style.backgroundPositionX = `-192px`;
                                            break;
                                    }
                                    icon.style.backgroundPositionY = `-${(me.icon * 48)}px`;
                                    icon.style.backgroundImage = `url("${Game.resPath}img/gardenPlants.png?v=${Game.version}")`;
                                    td.appendChild(icon);
                                    break;
                                default:
                                    let plant = plantsToId[tile];
                                    if(typeof plant === "number"){
                                        plant = garden.plantsById[plant];
                                        let icon = document.createElement("div");
                                        icon.classList.add("ModChartingMutationsPlantNeeded");
                                        icon.style.backgroundImage = `url("${Game.resPath}img/gardenPlants.png?v=${Game.version})`;
                                        icon.style.backgroundPosition = `${-4 * 48}px ${0 - (plant.icon * 48)}px`;
                                        td.appendChild(icon);
                                    }
                            }

                            row.appendChild(td);
                        }
                        table.appendChild(row);
                    }
                    div.appendChild(table);
                    if(mutation.specialInstructions && ChartingMutationsMain.showExtraInfo){
                        let text = document.createElement("span");
                        text.className = "ModChartingMutationsSpecialInstructions";
                        text.innerHTML = mutation.specialInstructions;
                        div.appendChild(text);
                    }
                    str += div.outerHTML;
                }
                str += "</div></div></div>";
            }
            return str;
        };
    };
    garden.buildPanel = function(){
        if(!l("gardenSeeds")) return false;
        var str = "";
        for(var i in garden.plants){
            var me = garden.plants[i];
            var icon = [0, me.icon];
            str += "<div id=\"gardenSeed-" + me.id + "\" class=\"gardenSeed" + (garden.seedSelected == me.id ? " on" : "") + " seedLocked\" " + Game.getDynamicTooltip("Game.ObjectsById[" + garden.parent.id + "].minigame.seedTooltip(" + me.id + ")", "this") + ">";
            str += "<div id=\"gardenSeedIcon-" + me.id + "\" class=\"gardenSeedIcon shadowFilter\" style=\"background-position:" + (-icon[0] * 48) + "px " + (-icon[1] * 48) + "px;\"></div>";
            str += "</div>";
        }
        l("gardenSeeds").innerHTML = str;

        for(var i in garden.plants){
            var me = garden.plants[i];
            me.l = l("gardenSeed-" + me.id);
            AddEvent(me.l, "click", function(me){
                return function(){
                    if(/* !M.freeze && */Game.keys[16] && Game.keys[17])//shift & ctrl
                    {
                        //harvest all mature of type
                        garden.harvestAll(me, 1);
                        return false;
                    }
                    if(!me.plantable && !Game.sesame) return false;
                    if(!me.unlocked) return false;
                    if(garden.seedSelected == me.id){garden.seedSelected = -1;}
                    else{
                        garden.seedSelected = me.id;
                        PlaySound("snd/toneTick.mp3");
                    }
                    for(var i in garden.plants){
                        var it = garden.plants[i];
                        if(it.id == garden.seedSelected){it.l.classList.add("on");}
                        else{it.l.classList.remove("on");}
                    }
                };
            }(me));
            AddEvent(me.l, "mouseover", garden.hideCursor);
            AddEvent(me.l, "mouseout", garden.showCursor);
            if(me.unlocked) me.l.classList.remove("seedLocked");
        }

        var str = "";
        for(var i in garden.tools){
            var me = garden.tools[i];
            var icon = [me.icon, 35];
            str += "<div id=\"gardenTool-" + me.id + "\" style=\"margin:8px;\" class=\"gardenSeed" + ((me.isOn && me.isOn()) ? " on" : "") + "" + ((!me.isDisplayed || me.isDisplayed()) ? "" : " locked") + "\" " + Game.getDynamicTooltip("Game.ObjectsById[" + garden.parent.id + "].minigame.toolTooltip(" + me.id + ")", "this") + ">";
            str += "<div id=\"gardenToolIcon-" + me.id + "\" class=\"gardenSeedIcon shadowFilter\" style=\"background-position:" + (-icon[0] * 48) + "px " + (-icon[1] * 48) + "px;\"></div>";
            str += "</div>";
        }
        l("gardenTools").innerHTML = str;

        for(var i in garden.tools){
            var me = garden.tools[i];
            AddEvent(l("gardenTool-" + me.id), "click", me.func);
            AddEvent(l("gardenTool-" + me.id), "mouseover", garden.hideCursor);
            AddEvent(l("gardenTool-" + me.id), "mouseout", garden.showCursor);
        }

        var str = "";
        for(var i in garden.soils){
            var me = garden.soils[i];
            var icon = [me.icon, 34];
            str += "<div id=\"gardenSoil-" + me.id + "\" class=\"gardenSeed gardenSoil disabled" + (garden.soil == me.id ? " on" : "") + "\" " + Game.getDynamicTooltip("Game.ObjectsById[" + garden.parent.id + "].minigame.soilTooltip(" + me.id + ")", "this") + ">";
            str += "<div id=\"gardenSoilIcon-" + me.id + "\" class=\"gardenSeedIcon shadowFilter\" style=\"background-position:" + (-icon[0] * 48) + "px " + (-icon[1] * 48) + "px;\"></div>";
            str += "</div>";
        }
        l("gardenSoils").innerHTML = str;

        for(var i in garden.soils){
            var me = garden.soils[i];
            AddEvent(l("gardenSoil-" + me.id), "click", function(me){
                return function(){
                    if(garden.freeze || garden.soil == me.id || garden.nextSoil > Date.now() || garden.parent.amount < me.req){return false;}
                    PlaySound("snd/toneTick.mp3");
                    garden.nextSoil = Date.now() + (Game.Has("Turbo-charged soil") ? 1 : (1000 * 60 * 10));
                    garden.toCompute = true;
                    garden.soil = me.id;
                    garden.computeStepT();
                    for(var i in garden.soils){
                        var it = garden.soils[i];
                        if(it.id == garden.soil){l("gardenSoil-" + it.id).classList.add("on");}
                        else{l("gardenSoil-" + it.id).classList.remove("on");}
                    }
                };
            }(me));
            AddEvent(l("gardenSoil-" + me.id), "mouseover", garden.hideCursor);
            AddEvent(l("gardenSoil-" + me.id), "mouseout", garden.showCursor);
        }

        garden.cursorL = l("gardenCursor");
    };
    garden.buildPanel();
}

function checkForRun(){
    if(Game && Game.Objects && Game.Objects.Farm && Game.Objects.Farm.minigame && Game.Objects.Farm.minigame.plantsById && Game.Objects.Farm.minigame.plantsById.length > 0){
        updateMinigame();
    }
    else{
        setTimeout(checkForRun, 1000);
    }
}

function addSettings(){
    let settings = l("ChartingMutationsSettings");
    if(settings) return;
    let menu = l("menu");
    if(!menu) return;
    if(!menu.children[1]) return;
    if(!menu.children[1].innerHTML.toString().toLowerCase().includes("options")) return;
    let settingsHolder = menu.children[2];
    if(!settingsHolder) return;
    else settings = document.createElement("div");
    settings.id = "ChartingMutationsSettings";
    settings.classList.add("subsection");
    let settingsTitle = document.createElement("div");
    let buttonsHolder = document.createElement("div");
    buttonsHolder.classList = "listing";
    settingsTitle.classList.add("title");
    settingsTitle.id = "ModChartingMutations_SettingsTitle";
    settingsTitle.innerText = "Seed Shower";
    settings.appendChild(settingsTitle);
    let description = document.createElement("div");
    description.classList.add("listing");
    settings.appendChild(description);
    let addCheckBox = (checked, oncheck, title, descript) => {
        description.appendChild(document.createElement("br"));
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = checked;
        description.appendChild(checkbox);
        let bolded = document.createElement("b");
        bolded.style.opacity = checked ? "1" : "0.5";
        bolded.innerText = title;
        description.appendChild(bolded);
        let label = document.createElement("label");
        label.innerText = descript;
        label.style.opacity = checked ? "0.5" : "0.25";
        description.appendChild(label);
        checkbox.oninput = function(){
            oncheck(this.checked);
            bolded.style.opacity = this.checked ? "1" : "0.5";
            label.style.opacity = this.checked ? "0.5" : "0.25";
        };
        description.appendChild(document.createElement("br"));
    };
    addCheckBox(ChartingMutationsMain.showExtraInfo, (checked) => {ChartingMutationsMain.showExtraInfo = checked;}, "Show Extra Info", "Show seed's spawn chance and unique spawn conditions.");
    addCheckBox(ChartingMutationsMain.prioritizeMutationChart, (checked) => {ChartingMutationsMain.prioritizeMutationChart = checked;}, "Prioritize Mutation Chart", "Instead of showing mutation chart by pressing shift/ctrl. Show default seed information upon key press and prioritize mutation chart as the default option.");


    //BEFORE CookieMonster's settings though, they have a massive list of settings.
    //AND due to CookieMonster way of allowing user to close groups, any settings placed after their settings gets screwed up every redraw
    if(l("cookieMonsterFrameworkMenuSection")){
        settingsHolder.insertBefore(settings, l("cookieMonsterFrameworkMenuSection"));
    }
    else if(l("cookieMonsterModMenuSection")){
        settingsHolder.insertBefore(settings, l("cookieMonsterModMenuSection"));
    }
    else{
        settingsHolder.insertBefore(settings, settingsHolder.lastElementChild);
    }
}

class ChartingMutationsClass{

    constructor(){
        this.showExtraInfo = true;
        this.prioritizeMutationChart = false;
    }

    init(){
        checkForRun();
        Game.registerHook("logic", (value) => {
            addSettings();
            return value;
        });
    }

    save(){
        return `${this.showExtraInfo ? 1 : 0}${this.prioritizeMutationChart ? 1 : 0}`;
    }

    load(save){
        /**
         * Saves across multiple versions
         * Version 1:
         * - Save is just BITFIELD-1
         * - BITFIELD-1 = showExtraInfo, prioritizeMutationChart
         */
        if(save.length === 2){
            this.showExtraInfo = save[0] !== "0";
            this.prioritizeMutationChart = save[1] === "1";
        }
    }
}

let ChartingMutationsMain = new ChartingMutationsClass();


const readyCheck = setInterval(() => {
    const theGame = Game || window.Game;
    if(typeof theGame !== "undefined" && typeof theGame.ready !== "undefined" && theGame.ready){
        startTime = Date.now();
        theGame.registerMod("ChartingMutations", ChartingMutationsMain);
        clearInterval(readyCheck);
    }
}, 1000);