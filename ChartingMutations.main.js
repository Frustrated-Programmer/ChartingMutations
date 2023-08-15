// ==UserScript==
// @name         ChartingMutations
// @version      1.0
// @description  Shows you how to mutate seeds in the garden.
// @author       FrustratedProgrammer
// @match        *://orteil.dashnet.org/cookieclicker/
// @icon         data:image/png;base64,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
// ==/UserScript==
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

function l(what){return document.getElementById(what);}
class ChartingMutationsClass{
    addCSS(){
        if(l('ModChartingMutations_CSS')) return;
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
    margin:0px 10px;
}
.ModChartingMutationsDisplay table{
    background:url(//cdn.dashnet.org/cookieclicker/img/shadedBorders.png);
    background-size:100%, 100%, auto; 
    height:min-content;
}
.ModChartingMutationsSpawnChance{
    z-index: 999;
    text-shadow: -2px -3px 1px black;
    margin-bottom:5px;
}
.ModChartingMutationsSpecialInstructions i{
    font-style:italic;
}
.ModChartingMutationsSpecialInstructions b{
    font-weight:bold;
}
.ModChartingMutationsSpecialInstructions, .ModChartingMutationsSpawnChance{
    color:white;
    width: 90px;
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
    }
    addSettings(){
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
        addCheckBox(this.showExtraInfo, (checked) => {this.showExtraInfo = checked;}, "Show Extra Info", "Show seed's spawn chance and unique spawn conditions.");
        addCheckBox(this.prioritizeMutationChart, (checked) => {this.prioritizeMutationChart = checked;}, "Prioritize Mutation Chart", "Instead of showing mutation chart by pressing shift/ctrl. Show default seed information upon key press and prioritize mutation chart as the default option.");


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
    checkForRun(){
        if(Game && Game.Objects && Game.Objects.Farm && Game.Objects.Farm.minigame && Game.Objects.Farm.minigame.plantsById && Game.Objects.Farm.minigame.plantsById.length > 0){
            this.addCSS();
            this.updateMinigame();
        }
        else{
            setTimeout(this.checkForRun, 1000);
        }
    }
    updateMinigame(){
        let garden = Game.Objects.Farm.minigame;
        garden.seedTooltip = (id) => {
            return ()=>{
                var me = garden.plantsById[id];
                let mutations = this.plantsMutationChart[me.key];
                var str = "";
                if(me.unlocked && Game.buyBulkShortcut === (this.prioritizeMutationChart ? 1 : 0)){
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
                        if(this.showExtraInfo){
                            let percent = document.createElement("span");
                            percent.className = "ModChartingMutationsSpawnChance";
                            if(mutation.spawnChanceSpecial){
                                percent.innerHTML = mutation.spawnChanceSpecial;
                            }
                            else percent.innerHTML = `Mutation Chance: <span style="color:#00f1ff">${(mutation.spawnChance).toString().substring(0, 5)}%</span>`;
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
                                        let plant = this.plantsToId[tile];
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
                        if(mutation.specialInstructions && this.showExtraInfo){
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
        garden.unlockSeed=function(me){
            if (me.unlocked) return false;
            me.unlocked=1;
            if (me.l) me.l.classList.remove('locked');
            if (me.l) me.l.classList.remove('seedLocked');
            garden.getUnlockedN();
            return true;
        };
        garden.lockSeed=function(me)
        {
            if (me.locked) return false;
            me.unlocked=0;
            if (me.l) me.l.classList.add('seedLocked');
            M.getUnlockedN();
            return true;
        }
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
    constructor(){
        this.showExtraInfo = true;
        this.prioritizeMutationChart = false;


        this.plantMutation = (spawnChance, plants, specialInstructions)=>{
            return {
                spawnChance: spawnChance,
                plot: plants.length === 2 ? [["spawn", plants[0]], [plants[1], "spawn"]] : [plants],
                specialInstructions: specialInstructions || false
            };
        };
        this.plantsMutationChart = {
            //Percent chance taken from the minigame source code itself. Line 640 in 'minigameGarden.js'
            //Percent chance is out of 1, I've taken all chances and multiplied them by 100.
            //0.2 out of 1 is the same as 20% of 100.

            bakerWheat: [
                this.plantMutation("20", ["bakerWheat", "bakerWheat"]),
                this.plantMutation("5", ["thumbcorn", "thumbcorn"])
            ],
            thumbcorn: [
                this.plantMutation("5", ["bakerWheat", "bakerWheat"]),
                this.plantMutation("10", ["thumbcorn", "thumbcorn"]),
                this.plantMutation("2", ["cronerice", "cronerice"])
            ],
            cronerice: [
                this.plantMutation("1", ["bakerWheat", "thumbcorn"])
            ],
            gildmillet: [
                this.plantMutation("3", ["cronerice", "thumbcorn"])
            ],
            bakeberry: [
                this.plantMutation("0.1", ["bakerWheat", "bakerWheat"])
            ],
            clover: [
                this.plantMutation("3", ["bakerWheat", "gildmillet"]),
                {
                    spawnChance: "0.7",
                    plot: [
                        ["spawn", "clover"],
                        ["clover", "spawn"]
                    ],
                    specialInstructions: "Will <i>not</i> spawn if 5 or more other Clovers are next to it"
                }
            ],
            goldenClover: [
                this.plantMutation("0.07", ["bakerWheat", "gildmillet"]),
                {
                    spawnChance: "0.01",
                    plot: [
                        ["spawn", "clover"],
                        ["clover", "spawn"]
                    ],
                    specialInstructions: "Will <i>not</i> spawn if 5 other Clovers are next to it"
                },
                {
                    spawnChance: "0.07",
                    plot: [
                        ["nothing", "clover","nothing"],
                        ["nothing", "spawn","clover"],
                        ["clover","nothing","clover"]
                    ],
                    specialInstructions: "Only can spawn if adjacent to a <i>minimum</i> of 4 Clovers."
                }
            ],
            shimmerlily: [
                this.plantMutation("2", ["clover", "gildmillet"])
            ],
            elderwort: [
                this.plantMutation("1", ["shimmerlily", "cronerice"]),
                this.plantMutation("0.2", ["wrinklegill", "cronerice"])
            ],
            chocoroot: [
                this.plantMutation("10", ["bakerWheat", "brownMold"], "The brown mold does <i>not</i> need to be mature.")
            ],
            whiteChocoroot: [
                this.plantMutation("10", ["chocoroot", "whiteMildew"], "The white mildew does <i>not</i> need to be mature.")
            ],
            brownMold: [
                {
                    spawnChance: "50",
                    plot: [
                        ["whiteMildew", "spawn","brownMold"],
                        ["spawn", "nothing","nothing"],
                        ["nothing","brownMold","nothing"]
                    ],
                    specialInstructions: "Spreads from White Mildew.<br><br>Will <i>not</i> spread next to two other Brown Mold."
                },
                {
                    spawnChanceSpecial:"Spawn Chance:<br><span style='color:#00f1ff'>0.2</span>% - <span style='color:#00f1ff'>20</span>%.",
                    plot: [
                        ["meddleweed", "meddleweed"],
                        ["meddleweed", "meddleweed"]
                    ],
                    specialInstructions: "Chance to spawn upon <i>harvesting</i> Meddleweed. The <i>older</i> the Meddleweed, the higher the chance."
                },
            ],
            whiteMildew: [
                {
                    spawnChance: "50",
                    plot: [
                        ["brownMold", "spawn","nothing"],
                        ["spawn", "nothing","whiteMildew"],
                        ["nothing","nothing","whiteMildew"]
                    ],
                    specialInstructions: "Spreads from Brown Mold.<br><br>Will <i>not</i> spread next to two other White Mildew."
                },
            ],
            meddleweed: [
                {
                    spawnChanceSpecial:"Spawn Chance:<br><span style='color:#00f1ff'>0.2</span>% - <span style='color:#00f1ff'>20</span>%.",
                    plot: [
                        ["nothing", "nothing","nothing"],
                        ["nothing", "spawn","nothing"],
                        ["nothing", "nothing","nothing"],
                    ],
                    specialInstructions: "Will <i>not</i> spawn next to any plants."
                },
                {
                    spawnChance: "15",
                    plot: [
                        ["nothing", "spawn","meddleweed"],
                        ["spawn", "nothing","nothing"],
                        ["meddleweed", "meddleweed","meddleweed"],
                    ],
                    specialInstructions: "Meddleweed will <i>not</i> spawn near 3 or more Meddleweeds."
                },
            ],
            whiskerbloom: [
                this.plantMutation("1", ["shimmerlily", "whiteChocoroot"])
            ],
            chimerose: [
                this.plantMutation("5", ["shimmerlily", "whiskerbloom"]),
                this.plantMutation("0.5", ["chimerose", "chimerose"])
            ],
            nursetulip: [
                this.plantMutation("5", ["whiskerbloom", "whiskerbloom"])
            ],
            drowsyfern: [
                this.plantMutation("0.5", ["chocoroot", "keenmoss"])
            ],
            wardlichen: [
                this.plantMutation("0.5", ["cronerice", "keenmoss"]),
                this.plantMutation("0.5", ["cronerice", "whiteMildew"]),
                {
                    spawnChance: "5",
                    plot: [
                        ["nothing", "wardlichen", "spawn"],
                        ["wardlichen", "nothing", "spawn"],
                        ["spawn", "spawn", "nothing"]
                    ],
                    specialInstructions: "Will <i>not</i> spawn if another Wardlichens is nearby."
                }
            ],
            keenmoss: [
                this.plantMutation("10", ["greenRot", "brownMold"]),
                {
                    spawnChance: "10",
                    plot: [
                        ["nothing", "keenmoss", "spawn"],
                        ["keenmoss", "nothing", "spawn"],
                        ["spawn", "spawn", "nothing"]
                    ],
                    specialInstructions: "Will <i>not</i> spawn if more than 2 Keenmoss are nearby."
                }
            ],
            queenbeet: [
                this.plantMutation("1", ["chocoroot", "bakeberry"])
            ],
            queenbeetLump: [
                {
                    spawnChance: "0.1",
                    plot: [
                        ["queenbeet", "queenbeet", "queenbeet"],
                        ["queenbeet", "spawn", "queenbeet"],
                        ["queenbeet", "queenbeet", "queenbeet"]
                    ],
                    specialInstructions:"Requires a <i>minimum</i> of 8 Queenbeets."
                }
            ],
            duketater: [
                this.plantMutation("0.1", ["queenbeet", "queenbeet"])
            ],
            crumbspore: [
                this.plantMutation("7", ["crumbspore", "spawn"], "Will not spawn if another crumbspore is nearby."),
                {
                    spawnChanceSpecial:"Spawn Chance:<br><span style='color:#00f1ff'>0.2</span>% - <span style='color:#00f1ff'>20</span>%.",
                    plot: [
                        ["meddleweed", "meddleweed"],
                        ["meddleweed", "meddleweed"]
                    ],
                    specialInstructions: "Chance to spawn upon <i>harvesting</i> Meddleweed. The <i>older</i> the Meddleweed, the higher the chance."
                },
                this.plantMutation("0.5", ["doughshroom", "doughshroom"])
            ],
            glovemorel: [
                this.plantMutation("2", ["crumbspore", "thumbcorn"])
            ],
            cheapcap: [
                this.plantMutation("4", ["crumbspore", "shimmerlily"])
            ],
            foolBolete: [
                this.plantMutation("4", ["doughshroom", "greenRot"])
            ],
            doughshroom: [
                this.plantMutation("0.5", ["crumbspore", "crumbspore"]),
                this.plantMutation("7", ["doughshroom", "spawn"], "Will not spawn if another doughshrooms is nearby.")
            ],
            wrinklegill: [
                this.plantMutation("6", ["crumbspore", "brownMold"])
            ],
            greenRot: [
                this.plantMutation("5", ["whiteMildew", "clover"])
            ],
            shriekbulb: [
                this.plantMutation("0.1", ["wrinklegill", "elderwort"]),
                {
                    spawnChance: "0.1",
                    plot: [
                        ["nothing", "elderwort", "elderwort"],
                        ["elderwort", "spawn", "nothing"],
                        ["elderwort", "nothing", "elderwort"]
                    ],
                    specialInstructions: "Only can spawn if next to a <i>minimum</i> of 5 elderworts."
                },
                {
                    spawnChance: "0.5",
                    plot: [
                        ["nothing", "duketater", "nothing"],
                        ["nothing", "spawn", "duketater"],
                        ["duketater", "nothing", "nothing"]
                    ],
                    specialInstructions: "Only can spawn if next to a <i>minimum</i> of 3 duketaters, <i>mature or not</i>."
                },
                {
                    spawnChance: "0.2",
                    plot: [
                        ["nothing", "doughshroom", "nothing"],
                        ["nothing", "spawn", "doughshroom"],
                        ["doughshroom", "doughshroom", "nothing"]
                    ],
                    specialInstructions: "Only can spawn if next to a <i>minimum</i> of 4 doughshrooms, <i>mature or not</i>."
                },
                {
                    spawnChance: "0.1",
                    plot: [
                        ["queenbeet", "nothing", "queenbeet"],
                        ["nothing", "spawn", "queenbeet"],
                        ["queenbeet", "queenbeet", "nothing"]
                    ],
                    specialInstructions: "Only can spawn if next to a <i>minimum</i> of 5 queenbeets."
                },
                this.plantMutation("0.5", ["shriekbulb", "spawn"], "Will not spawn another shriekbulb is nearby.<br>The shriekbulb does <i>not</i> have to be mature.")
            ],
            tidygrass: [
                this.plantMutation("0.2", ["bakerWheat", "whiteChocoroot"])
            ],
            everdaisy: [
                {
                    spawnChance: "0.2",
                    plot: [
                        ["tidygrass", "nothing", "elderwort"],
                        ["tidygrass", "spawn", "elderwort"],
                        ["tidygrass", "nothing", "elderwort"]
                    ],
                    specialInstructions: "Only can spawn if next to a <i>minimum</i> of 3 elderworts and tidygrass."
                }
            ],
            ichorpuff: [
                this.plantMutation("0.2", ["elderwort", "crumbspore"])
            ]
        };
        this.plantsToId = {
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
    }

    init(){
        this.checkForRun();
        Game.registerHook("logic", (value) => {
            this.addSettings();
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
const ChartingMutationsInterval = setInterval(() => {
    const theGame = Game || window.Game;
    if(typeof theGame !== "undefined" && typeof theGame.ready !== "undefined" && theGame.ready){
        theGame.registerMod("ChartingMutations", new ChartingMutationsClass());
        clearInterval(ChartingMutationsInterval);
    }
}, 1000);
