import db from "../db/connection.js";
import Pet from  "../models/pet.js";

const insertData = async () => {
    await db.dropDatabase()
const tracks  = [
    {
    title: "Never gon Loose",
    artist: "Future",

},
{
    title: "heyyy",
    artist: "Lil Baby",
},
{
    title: "innerbloom",
    artist: "Rufus De Sol",
},
];
await Track.create(tracks);

console.log("Tracks have entered the Databas!")

await db.close();
};

insertData();