const Dragon = require("./dragon")

class EvilDragon extends Dragon {
    constructor(name, color, evilDoings = [], nemesis) {
        super(name, color)
        this.evilDoings = evilDoings;
        this.nemesis = nemesis;
    }

    dontInviteThemOverForDinner() {
        for (let evilDoing of this.evilDoings) {
            console.log(`${this.name} will ${evilDoing}`)
        }
    }

    burnsNemesis() {
        return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`
    }
}

const drogon = new EvilDragon(
    "Drogon",
    "black-red",
    [
        "eat all your livestock",
        "burn down your castle in Westeros",
        "burn your father and brother"
    ],
    "Night King"
);
console.log(drogon);
drogon.dontInviteThemOverForDinner();
console.log(drogon.breathesFire());
console.log(drogon.burnsNemesis());

module.exports = EvilDragon;
