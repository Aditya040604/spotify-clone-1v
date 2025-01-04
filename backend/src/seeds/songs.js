import mongoose from "mongoose";
import { Song } from "../modules/song.model.js";
import { config } from "dotenv";

config();

const songs = [
	{
		title: "Kalki-Theme",
		artist: "Jakes Bejoy",
		imageUrl: "/cover-images/kalki.jpg",
		audioUrl: "/songs/Kalki-Theme.mp3",
		duration: 102, // 
	},
	{
		title: "Dhammunte Pattukora",
		artist: "Allu Arjun",
		imageUrl: "/cover-images/pushpa-dhammunte.jpg",
		audioUrl: "/songs/Dammunte-Pattukora.mp3",
		duration: 93, // 0:41
	},
	{
		title: "Sooseki",
		artist: "Shreya Goshal",
		imageUrl: "/cover-images/sooseki.jpg",
		audioUrl: "/songs/Sooseki.mp3",
		duration: 264, // 0:24
	},
	{
		title: "Naayaka",
		artist: "DSP",
		imageUrl: "/cover-images/kanguva.jpg",
		audioUrl: "/songs/Naayaka.mp3",
		duration: 192, // 0:24
	},
	{
		title: "Thani Oruvan",
		artist: "Bobo Shashi",
		imageUrl: "/cover-images/thani-oruvan.jpg",
		audioUrl: "/songs/Thani Oruvan.mp3",
		duration: 239, // 0:36
	},
	{
		title: "Fear",
		artist: "Anirudh",
		imageUrl: "/cover-images/devara.jpg",
		audioUrl: "/songs/Fear.mp3",
		duration: 196, // 0:40
	},
	{
		title: "Bhaga-Bhaga",
		artist: "Jakes Bejoy",
		imageUrl: "/cover-images/saripodha.jpg",
		audioUrl: "/songs/Bhaga-Bhaga.mp3",
		duration: 176, // 0:39
	},
	{
		title: "Raghunandhana",
		artist: "Gowra Hari",
		imageUrl: "/cover-images/hanuman.jpg",
		audioUrl: "/songs/Raghunandhana.mp3",
		duration: 156, // 0:28
	},
	{
		title: "Jai Hanuman Theme",
		artist: "Revanth",
		imageUrl: "/cover-images/jai-hanuman.jpg",
		audioUrl: "/songs/jai-hanuman.mp3",
		duration: 100, // 0:28
	},
	{
		title: "Ambarala Veedhilo",
		artist: "Sindhuri Vishal",
		imageUrl: "/cover-images/arm.jpg",
		audioUrl: "/songs/ambarala-veedhilo.mp3",
		duration: 261, // 0:30
	},
	{
		title: "Desert Wind",
		artist: "Sahara Sons",
		imageUrl: "/cover-images/8.jpg",
		audioUrl: "/songs/8.mp3",
		duration: 28, // 0:28
	},
	{
		title: "Ocean Waves",
		artist: "Coastal Drift",
		imageUrl: "/cover-images/9.jpg",
		audioUrl: "/songs/9.mp3",
		duration: 28, // 0:28
	},
	{
		title: "Starlight",
		artist: "Luna Bay",
		imageUrl: "/cover-images/10.jpg",
		audioUrl: "/songs/10.mp3",
		duration: 30, // 0:30
	},
	{
		title: "Winter Dreams",
		artist: "Arctic Pulse",
		imageUrl: "/cover-images/11.jpg",
		audioUrl: "/songs/11.mp3",
		duration: 29, // 0:29
	},
	{
		title: "Purple Sunset",
		artist: "Dream Valley",
		imageUrl: "/cover-images/12.jpg",
		audioUrl: "/songs/12.mp3",
		duration: 17, // 0:17
	},
	{
		title: "Neon Dreams",
		artist: "Cyber Pulse",
		imageUrl: "/cover-images/13.jpg",
		audioUrl: "/songs/13.mp3",
		duration: 39, // 0:39
	},
	{
		title: "Moonlight Dance",
		artist: "Silver Shadows",
		imageUrl: "/cover-images/14.jpg",
		audioUrl: "/songs/14.mp3",
		duration: 27, // 0:27
	},
	{
		title: "Urban Jungle",
		artist: "City Lights",
		imageUrl: "/cover-images/15.jpg",
		audioUrl: "/songs/15.mp3",
		duration: 36, // 0:36
	},
	{
		title: "Crystal Rain",
		artist: "Echo Valley",
		imageUrl: "/cover-images/16.jpg",
		audioUrl: "/songs/16.mp3",
		duration: 39, // 0:39
	},
	{
		title: "Neon Tokyo",
		artist: "Future Pulse",
		imageUrl: "/cover-images/17.jpg",
		audioUrl: "/songs/17.mp3",
		duration: 39, // 0:39
	},
	{
		title: "Midnight Blues",
		artist: "Jazz Cats",
		imageUrl: "/cover-images/18.jpg",
		audioUrl: "/songs/18.mp3",
		duration: 29, // 0:29
	},
];

const seedSongs = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URL);

		// Clear existing songs
		await Song.deleteMany({});

		// Insert new songs
		await Song.insertMany(songs);

		console.log("Songs seeded successfully!");
	} catch (error) {
		console.error("Error seeding songs:", error);
	} finally {
		mongoose.connection.close();
	}
};

seedSongs();