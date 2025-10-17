export class CharacterInfo
{
    constructor(json)
    {
        this.name = json["name"];
        this.name_eng = json["name_eng"];
        this.title = json["title"];
        this.age = json["age"];
        this.height = json["height"];
        
        this.birth = {};
        this.birth.month = json["birth"]["month"];
        this.birth.day = json["birth"]["day"];
        this.birth.place = json["birth"]["place"];

        this.theme_color = json["theme_color"];
        this.tribe = json["tribe"];
        this.hobby = json["hobby"];
        this.specialty = json["specialty"];
        this.like = json["like"];
        this.dislike = json["dislike"];
        
        this.personality = [];
        for (let index = 0; index < json["personalty"].length; index++)
            this.personality.push(json["personalty"][index]);

        this.summary = json["summary"];

        this.custom = [];
        for (let index = 0; index < json["custom"].length; index++)
            this.personality.push(json["custom"][index]);
    }
}

//export { CharacterInfo }