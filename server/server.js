// Import necessary modules
import express from "express";
import cors from "cors";

// Create an instance of Express app
const app = express();
const port = 8000; // Define your desired port number

app.use(cors());
app.use(express.json());

// Define routes

// Route to get all listings
app.get("/listings", (req, res) => {
  res.json(listings);
});

//// Route to get a specific listing by ID
//app.get("api/listings/:id", (req, res) => {
//  const id = parseInt(req.params.id);
//  const listing = listings.find((listing) => listing.id === id);
//  if (listing) {
//    res.json(listing);
//  } else {
//    res.status(404).json({ message: "Listing not found" });
//  }
//});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

//LISTINGS

const listings = [
  {
    id: 1,
    title: "Charming Loft in Historic District",
    description:
      "Nestled in the heart of a picturesque countryside, our Airbnb offers a cozy cottage retreat enveloped by rolling hills and the peaceful ambiance of nature. Surrounded by verdant meadows and grazing sheep, this charming abode is a haven for those seeking respite from the hustle and bustle of city life. Step inside to discover a warm and inviting interior, where rustic charm seamlessly blends with modern comforts. Curl up beside the crackling fireplace with a good book, or savor a glass of wine on the sun-dappled porch overlooking acres of untouched beauty. Perfect for a romantic weekend getaway or a rejuvenating solo escape, our countryside cottage promises tranquility and serenity at every turn.",
    price_per_night: 120,
    location: "Historic District, City",
    rating: 4.7,
    image: "/images/image1.jpg",
    gallery: [
      "/images/image1.jpg",
      "/images/image1.jpg",
      "/images/image1.jpg",
      "/images/image1.jpg",
      "/images/image1.jpg",
    ],
    num_bedrooms: 1,
    num_bathrooms: 1,
    max_guests: 2,
    amenities: ["Wi-Fi", "Kitchen", "Workspace"],
    filter_tags: ["Populær", "Design", "Luxe"],
    host: {
      id: 4,
      name: "Michael Brown",
      avatar: "https://via.placeholder.com/150",
    },
  },
  {
    id: 2,
    title: "Seaside Cottage with Private Beach Access",
    description:
      "Experience the epitome of urban chic with our stylish loft apartment Airbnb, situated in the vibrant heart of the city. This contemporary oasis boasts sleek design elements, industrial accents, and expansive windows offering sweeping views of the bustling streets below. Immerse yourself in the energetic rhythm of the neighborhood, where quaint cafes, eclectic boutiques, and cultural landmarks await just steps from your doorstep. Whether you're exploring local art galleries, sampling international cuisine, or simply soaking in the dynamic ambiance of the city, our urban loft provides a sophisticated retreat for discerning travelers seeking style and convenience.",
    price_per_night: 200,
    location: "Seaside, Coastal",
    rating: 4.9,
    image: "/images/image2.jpg",
    gallery: [
      "/images/image2.jpg",
      "/images/image2.jpg",
      "/images/image2.jpg",
      "/images/image2.jpg",
      "/images/image2.jpg",
    ],
    num_bedrooms: 2,
    num_bathrooms: 1.5,
    max_guests: 4,
    amenities: ["Wi-Fi", "Beach Access", "BBQ Grill"],
    filter_tags: ["Populær", "Hytter", "Wow!"],
    host: {
      id: 5,
      name: "Emily Davis",
      avatar: "https://via.placeholder.com/150",
    },
  },
  {
    id: 3,
    title: "Modern Apartment with Skyline View",
    description:
      "Indulge in seaside luxury at our breathtaking beachfront villa Airbnb, where sun-kissed sands and azure waters beckon just beyond your doorstep. Nestled along the pristine coastline, this exclusive retreat offers unrivaled privacy and serenity in a setting of unparalleled natural beauty. Wake up to the soothing sound of waves crashing against the shore, then spend your days lounging by the infinity pool, exploring hidden coves, or partaking in exhilarating water sports. As the sun sets over the horizon, gather with loved ones on the expansive terrace for al fresco dining and cocktails against a backdrop of painted skies. With every amenity imaginable at your fingertips, our beachfront villa promises a truly unforgettable escape.",
    price_per_night: 180,
    location: "City Center, Urban",
    rating: 4.8,
    image: "/images/image3.jpg",
    gallery: [
      "/images/image3.jpg",
      "/images/image3.jpg",
      "/images/image3.jpg",
      "/images/image3.jpg",
      "/images/image3.jpg",
    ],
    num_bedrooms: 2,
    num_bathrooms: 2,
    max_guests: 6,
    amenities: ["Wi-Fi", "Gym", "Balcony"],
    filter_tags: ["Populær", "Hytter", "Design", "Fantastisk udsigt"],
    host: {
      id: 6,
      name: "David Wilson",
      avatar: "https://via.placeholder.com/150",
    },
  },
  {
    id: 4,
    title: "Mountain Retreat with Panoramic Views",
    description:
      "Step back in time and experience the grandeur of a bygone era at our historic mansion Airbnb, a majestic estate steeped in rich heritage and timeless elegance. Nestled amidst sprawling grounds adorned with manicured gardens and ancient oaks, this stately manor exudes an air of sophistication and refinement at every turn. Wander through opulent parlors adorned with antique furnishings, admire intricate architectural details, and immerse yourself in the storied past of this distinguished residence. Whether hosting lavish gatherings in the grand ballroom, sipping afternoon tea in the sunlit conservatory, or simply savoring moments of tranquility in the sprawling grounds, our historic mansion offers a glimpse into a world of unparalleled luxury and grace.",
    price_per_night: 250,
    location: "Mountain, Scenic",
    rating: 4.6,
    image: "/images/image4.jpg",
    gallery: [
      "/images/image4.jpg",
      "/images/image4.jpg",
      "/images/image4.jpg",
      "/images/image4.jpg",
      "/images/image4.jpg",
    ],
    num_bedrooms: 3,
    num_bathrooms: 2.5,
    max_guests: 6,
    amenities: ["Wi-Fi", "Fireplace", "Hiking Trails"],
    filter_tags: ["Populær", "Luxe", "Design"],
    host: {
      id: 7,
      name: "Sarah White",
      avatar: "https://via.placeholder.com/150",
    },
  },
  {
    id: 5,
    title: "Urban Studio with Industrial Chic Vibes",
    description:
      "Escape to the pristine beauty of the mountains with our secluded chalet Airbnb, a cozy retreat nestled amidst towering pines and snow-capped peaks. Tucked away in a tranquil alpine setting, this rustic hideaway offers the perfect blend of natural splendor and modern comfort. Spend your days exploring rugged trails, breathing in the crisp mountain air, and marveling at breathtaking vistas from the panoramic windows of your chalet. As evening falls, gather around the crackling fireplace for cozy conversations, or venture out onto the private deck to stargaze beneath the canopy of twinkling stars. Whether you're seeking adventure on the slopes or peaceful solitude in nature's embrace, our mountain chalet promises an unforgettable retreat in the heart of the wilderness.",
    price_per_night: 100,
    location: "Industrial Area, City",
    rating: 4.5,
    image: "/images/image5.jpg",
    gallery: [
      "/images/image5.jpg",
      "/images/image5.jpg",
      "/images/image5.jpg",
      "/images/image5.jpg",
      "/images/image5.jpg",
    ],
    num_bedrooms: 1,
    num_bathrooms: 1,
    max_guests: 2,
    amenities: ["Wi-Fi", "Workspace", "Gym Access"],
    filter_tags: ["Populær", "Tårne", "Fantastisk udsigt"],
    host: {
      id: 8,
      name: "Daniel Martinez",
      avatar: "https://via.placeholder.com/150",
    },
  },
  {
    id: 6,
    title: "Lakefront Cabin with Fishing Dock",
    description:
      "Find your inner peace and rejuvenate your spirit at our tranquil yoga retreat Airbnb, a sanctuary nestled amidst serene landscapes and verdant countryside. Tucked away from the hustle and bustle of everyday life, this idyllic retreat offers the perfect opportunity to reconnect with mind, body, and soul. Awaken to the gentle sounds of nature, as sunlight filters through swaying trees and morning dew glistens on lush foliage. Embark on a journey of self-discovery with daily yoga sessions led by experienced instructors, or indulge in holistic spa treatments designed to renew and restore. Nourish your body with wholesome, farm-to-table cuisine crafted with locally sourced ingredients, and immerse yourself in the healing power of nature as you explore tranquil walking trails and meditative gardens. Whether you're seeking solace, serenity, or simply a moment of stillness in a chaotic world, our yoga retreat promises a transformative experience unlike any other.",
    price_per_night: 150,
    location: "Lakefront, Rural",
    rating: 4.7,
    image: "/images/image6.jpg",
    gallery: [
      "/images/image6.jpg",
      "/images/image6.jpg",
      "/images/image6.jpg",
      "/images/image6.jpg",
      "/images/image6.jpg",
    ],
    num_bedrooms: 2,
    num_bathrooms: 1,
    max_guests: 4,
    amenities: ["Wi-Fi", "Fishing Dock", "Firepit"],
    filter_tags: ["Populær", "Wow!", "Design"],
    host: {
      id: 9,
      name: "Sophia Johnson",
      avatar: "https://via.placeholder.com/150",
    },
  },
  {
    id: 7,
    title: "Ski Chalet with Mountain Views",
    description:
      "Escape the hustle and bustle of city life and retreat to our charming farmhouse Airbnb, nestled amidst rolling hills and picturesque farmland. Located in the heart of the countryside, this idyllic retreat offers a serene escape from the stresses of modern living, where time slows down and every moment is infused with tranquility. Wander through acres of lush greenery, breathe in the scent of wildflowers carried on the breeze, and marvel at breathtaking sunsets that paint the sky in shades of gold and crimson. Whether you're harvesting fresh produce from the garden, cozying up by the fireside with a good book, or simply savoring the simple pleasures of country living, our farmhouse promises a rejuvenating experience for the body, mind, and soul.",
    price_per_night: 300,
    location: "Ski Resort, Mountain",
    rating: 4.9,
    image: "/images/image7.jpg",
    gallery: [
      "/images/image7.jpg",
      "/images/image7.jpg",
      "/images/image7.jpg",
      "/images/image7.jpg",
      "/images/image7.jpg",
    ],
    num_bedrooms: 3,
    num_bathrooms: 2,
    max_guests: 6,
    amenities: ["Wi-Fi", "Ski-in/Ski-out", "Hot Tub"],
    filter_tags: ["Populær", "Tårne", "Fantastisk udsigt"],
    host: {
      id: 10,
      name: "Liam Thompson",
      avatar: "https://via.placeholder.com/150",
    },
  },
  {
    id: 8,
    title: "Historic Mansion in Countryside",
    description:
      "Experience the ultimate in coastal luxury with our seaside villa Airbnb, where panoramic ocean views and lavish amenities combine to create an unforgettable retreat by the sea. Perched on a pristine stretch of coastline, this exclusive oasis offers unparalleled access to sun-drenched beaches, turquoise waters, and endless opportunities for relaxation and recreation. Indulge in leisurely days spent lounging by the infinity pool, strolling along sandy shores, or exploring hidden coves and tidal pools teeming with marine life. As evening falls, gather with loved ones on the expansive terrace to toast to breathtaking sunsets that ignite the sky in a symphony of color. With every detail meticulously designed to inspire awe and elevate the senses, our seaside villa promises a truly unparalleled escape to paradise.",
    price_per_night: 500,
    location: "Countryside, Rural",
    rating: 5,
    image: "/images/image8.jpg",
    gallery: [
      "/images/image8.jpg",
      "/images/image8.jpg",
      "/images/image8.jpg",
      "/images/image8.jpg",
      "/images/image8.jpg",
    ],
    num_bedrooms: 6,
    num_bathrooms: 4,
    max_guests: 12,
    amenities: ["Wi-Fi", "Garden", "Library"],
    filter_tags: ["Populær", "Hytte"],
    host: {
      id: 11,
      name: "Olivia Harris",
      avatar: "https://via.placeholder.com/150",
    },
  },
  {
    id: 9,
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Immerse yourself in the rich history and vibrant culture of our historic townhouse Airbnb, nestled within the charming cobblestone streets of a storied district. Dating back centuries, this meticulously restored residence seamlessly blends old-world charm with modern comforts, offering a truly unique glimpse into the past. Explore narrow alleyways lined with artisanal shops and quaint cafes, where the echoes of bygone eras mingle with the hustle and bustle of contemporary life. Whether you're admiring architectural marvels, sampling delectable cuisine from around the world, or simply soaking in the timeless ambiance of the neighborhood, our historic townhouse promises an unforgettable journey through time.",
    price_per_night: 180,
    location: "Forest, Nature Reserve",
    rating: 4.8,
    image: "/images/image9.jpg",
    gallery: [
      "/images/image9.jpg",
      "/images/image9.jpg",
      "/images/image9.jpg",
      "/images/image9.jpg",
      "/images/image9.jpg",
    ],
    num_bedrooms: 1,
    num_bathrooms: 1,
    max_guests: 2,
    amenities: ["Nature Trails", "Outdoor Shower", "Solar Power"],
    filter_tags: ["Populær"],
    host: {
      id: 12,
      name: "Ethan Clark",
      avatar: "https://via.placeholder.com/150",
    },
  },
  {
    id: 10,
    title: "Coastal Retreat with Infinity Pool",
    description:
      "Embrace the tranquility of nature at our rustic lakeside cabin Airbnb, nestled along the tranquil shores of a pristine mountain lake. Surrounded by towering pine trees and mirrored waters, this charming retreat offers a secluded haven for those seeking solace and serenity in the great outdoors. Step inside to discover a cozy interior adorned with handcrafted furnishings, warm wood accents, and panoramic windows framing breathtaking views of the surrounding wilderness. Spend your days kayaking on the crystal-clear lake, casting a line in search of trophy trout, or simply unwinding on the sun-drenched deck with a good book in hand. As night falls, gather 'round the crackling fire pit to roast marshmallows and share stories beneath a blanket of twinkling stars. Whether you're seeking adventure, relaxation, or simply a moment of quiet reflection, our lakeside cabin promises an unforgettable escape into the heart of nature's embrace.",
    price_per_night: 400,
    location: "Coastal, Luxury",
    rating: 4.9,
    image: "images/image10.jpg",
    gallery: [
      "/images/image10.jpg",
      "/images/image10.jpg",
      "/images/image10.jpg",
      "/images/image10.jpg",
      "/images/image10.jpg",
    ],
    num_bedrooms: 4,
    num_bathrooms: 3.5,
    max_guests: 8,
    amenities: ["Wi-Fi", "Infinity Pool", "Sauna"],
    filter_tags: ["Populær"],
    host: {
      id: 13,
      name: "Mia Rodriguez",
      avatar: "https://via.placeholder.com/150",
    },
  },
  {
    id: 11,
    title: "Artist's Loft in Bohemian Neighborhood",
    description:
      "Elevate your urban experience with a stay at our elegant city penthouse Airbnb, perched high above the bustling streets below. Located in the vibrant heart of downtown, this luxurious retreat offers unparalleled views of the iconic skyline and easy access to the city's most coveted attractions. Step inside to discover a refined interior adorned with sleek furnishings, contemporary artwork, and floor-to-ceiling windows that flood the space with natural light. Spend your days exploring world-class museums, sampling gourmet cuisine at acclaimed restaurants, or indulging in retail therapy at designer boutiques just steps from your doorstep. As night falls, retreat to your private oasis in the sky, where panoramic views and plush amenities create the perfect backdrop for intimate gatherings and unforgettable moments. Whether you're a discerning traveler or a seasoned jet-setter, our city penthouse promises a sophisticated retreat in the heart of the urban landscape.",
    price_per_night: 150,
    location: "Bohemian District, Urban",
    rating: 4.6,
    image: "/images/image11.jpg",
    gallery: [
      "/images/image11.jpg",
      "/images/image11.jpg",
      "/images/image11.jpg",
      "/images/image11.jpg",
      "/images/image11.jpg",
    ],
    num_bedrooms: 1,
    num_bathrooms: 1,
    max_guests: 2,
    amenities: ["Wi-Fi", "Art Studio", "Community Garden"],
    filter_tags: ["Populær"],
    host: {
      id: 14,
      name: "Noah Garcia",
      avatar: "https://via.placeholder.com/150",
    },
  },
  {
    id: 12,
    title: "Serenity Cottage with Private Garden",
    description:
      "Experience the magic of childhood dreams at our enchanting treehouse retreat Airbnb, a whimsical hideaway nestled amidst the emerald canopy of towering oaks and swaying branches. Tucked away from the beaten path, this one-of-a-kind sanctuary offers a truly immersive escape into the heart of nature's embrace. Ascend winding staircases and suspended bridges to discover a cozy nest perched high above the forest floor, where rustic charm and modern comforts converge in perfect harmony. Spend your days exploring secret pathways, spotting wildlife from the treetop deck, or simply lounging in the hammock with a gentle breeze whispering through the leaves. As night falls, be lulled to sleep by the symphony of crickets and frogs, and awaken to the gentle glow of dawn filtering through the canopy above. Whether you're seeking adventure, romance, or simply a moment of whimsy, our treehouse retreat promises an unforgettable journey into the realm of imagination.",
    price_per_night: 130,
    location: "Suburbs, Tranquil",
    rating: 4.7,
    image: "/images/image12.jpg",
    gallery: [
      "/images/image12.jpg",
      "/images/image12.jpg",
      "/images/image12.jpg",
      "/images/image12.jpg",
      "/images/image12.jpg",
    ],
    num_bedrooms: 2,
    num_bathrooms: 1.5,
    max_guests: 4,
    amenities: ["Wi-Fi", "Garden", "Outdoor Dining"],
    filter_tags: ["Populær"],
    host: {
      id: 15,
      name: "Ava Martinez",
      avatar: "https://via.placeholder.com/150",
    },
  },
];
