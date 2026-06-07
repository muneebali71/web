export const tailors = [
  {
    id: 1,
    name: "Maya Chen",
    specialty: "Wedding & Formal Wear",
    rating: 4.9,
    reviewCount: 127,
    responseTime: "2 hours",
    location: "Downtown, Seattle",
    availability: true,
    experience: "12 years",
    priceRange: "$40-120",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    bio: "Specializing in bridal alterations and formal wear with over a decade of experience. Meticulous attention to detail.",
    services: ["Wedding Dress Alterations", "Suit Tailoring", "Evening Gown Fitting", "Custom Embroidery"],
    reviews: [
      { id: 1, author: "Anika Bergström", rating: 5, comment: "Maya did an incredible job on my wedding dress. The fit was absolutely perfect!", date: "2026-05-15" },
      { id: 2, author: "Kwame Asante", rating: 5, comment: "Best tailor I've worked with. My suit looked amazing for the gala.", date: "2026-04-22" },
      { id: 3, author: "Lucia Torres", rating: 4, comment: "Great work on my evening gown. Very professional and timely.", date: "2026-03-18" }
    ]
  },
  {
    id: 2,
    name: "Raj Patel",
    specialty: "Men's Suits & Shirts",
    rating: 4.8,
    reviewCount: 93,
    responseTime: "1 hour",
    location: "Midtown, New York",
    availability: true,
    experience: "8 years",
    priceRange: "$35-95",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Expert in men's tailoring with a focus on modern fits and classic styles. Quick turnaround times.",
    services: ["Suit Alterations", "Shirt Tailoring", "Trouser Hemming", "Jacket Resizing"],
    reviews: [
      { id: 1, author: "Elena Volkov", rating: 5, comment: "Raj tailored my husband's suits perfectly. Highly recommend!", date: "2026-05-20" },
      { id: 2, author: "Marcus Webb", rating: 5, comment: "Fast service and excellent quality. My go-to tailor now.", date: "2026-05-01" },
      { id: 3, author: "Yuki Tanaka", rating: 4, comment: "Very skilled tailor. Great attention to fit and detail.", date: "2026-04-10" }
    ]
  },
  {
    id: 3,
    name: "Lucia Torres",
    specialty: "Casual & Denim Alterations",
    rating: 4.7,
    reviewCount: 156,
    responseTime: "3 hours",
    location: "East Side, Austin",
    availability: true,
    experience: "6 years",
    priceRange: "$25-70",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    bio: "Specializing in everyday wear and denim alterations. Making your favorite clothes fit perfectly.",
    services: ["Jeans Hemming", "Dress Alterations", "T-Shirt Resizing", "Zipper Replacement"],
    reviews: [
      { id: 1, author: "Sofia Ramirez", rating: 5, comment: "Lucia hemmed all my jeans perfectly. Great prices too!", date: "2026-05-18" },
      { id: 2, author: "Chen Wei", rating: 4, comment: "Quick and affordable. My dresses fit much better now.", date: "2026-04-28" },
      { id: 3, author: "Omar Hassan", rating: 5, comment: "Excellent work on casual alterations. Very friendly service.", date: "2026-04-05" }
    ]
  },
  {
    id: 4,
    name: "Kwame Asante",
    specialty: "Traditional & Cultural Wear",
    rating: 4.9,
    reviewCount: 84,
    responseTime: "4 hours",
    location: "West End, London",
    availability: true,
    experience: "15 years",
    priceRange: "$50-150",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    bio: "Expert in traditional garments and cultural attire from around the world. Preserving heritage through craftsmanship.",
    services: ["Traditional Dress Alterations", "Cultural Garment Repair", "Custom Embellishments", "Heritage Restoration"],
    reviews: [
      { id: 1, author: "Amara Okafor", rating: 5, comment: "Kwame beautifully altered my traditional wedding attire. Exceptional skill!", date: "2026-05-12" },
      { id: 2, author: "Priya Sharma", rating: 5, comment: "Perfect work on my sari blouses. Understands cultural garments well.", date: "2026-04-19" },
      { id: 3, author: "Diego Morales", rating: 4, comment: "Great attention to detail on traditional pieces.", date: "2026-03-25" }
    ]
  },
  {
    id: 5,
    name: "Anika Bergström",
    specialty: "Leather & Outerwear",
    rating: 4.8,
    reviewCount: 71,
    responseTime: "5 hours",
    location: "Södermalm, Stockholm",
    availability: true,
    experience: "10 years",
    priceRange: "$60-180",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "Specialized in leather goods and outerwear alterations. Expert in working with challenging materials.",
    services: ["Leather Jacket Alterations", "Coat Resizing", "Zipper Repair", "Lining Replacement"],
    reviews: [
      { id: 1, author: "Lars Eriksson", rating: 5, comment: "Anika resized my leather jacket perfectly. Looks brand new!", date: "2026-05-08" },
      { id: 2, author: "Isabella Romano", rating: 5, comment: "Excellent work on my winter coat. Very professional.", date: "2026-04-14" },
      { id: 3, author: "Dmitri Volkov", rating: 4, comment: "Great skill with leather. Fixed my vintage jacket beautifully.", date: "2026-03-30" }
    ]
  },
  {
    id: 6,
    name: "Sofia Ramirez",
    specialty: "Children's Clothing",
    rating: 4.9,
    reviewCount: 142,
    responseTime: "2 hours",
    location: "Mission District, San Francisco",
    availability: true,
    experience: "7 years",
    priceRange: "$20-60",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Specializing in children's wear alterations and repairs. Making clothes grow with your kids.",
    services: ["Kids Dress Alterations", "School Uniform Adjustments", "Growth Tucks", "Patch Repairs"],
    reviews: [
      { id: 1, author: "Maria Santos", rating: 5, comment: "Sofia is amazing with kids' clothes. Very patient and skilled.", date: "2026-05-22" },
      { id: 2, author: "James O'Connor", rating: 5, comment: "Perfect alterations on my daughter's school uniforms.", date: "2026-05-05" },
      { id: 3, author: "Fatima Al-Rashid", rating: 5, comment: "Great work and very affordable for children's clothing.", date: "2026-04-12" }
    ]
  },
  {
    id: 7,
    name: "Chen Wei",
    specialty: "Vintage & Restoration",
    rating: 4.7,
    reviewCount: 58,
    responseTime: "6 hours",
    location: "Old Town, Shanghai",
    availability: true,
    experience: "18 years",
    priceRange: "$70-200",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bio: "Expert in vintage garment restoration and preservation. Bringing old treasures back to life.",
    services: ["Vintage Restoration", "Antique Garment Repair", "Period Alterations", "Fabric Reinforcement"],
    reviews: [
      { id: 1, author: "Eleanor Wright", rating: 5, comment: "Chen restored my grandmother's wedding dress beautifully. Incredible work!", date: "2026-05-10" },
      { id: 2, author: "Thomas Blackwood", rating: 4, comment: "Great expertise in vintage pieces. Very careful and precise.", date: "2026-04-16" },
      { id: 3, author: "Isabelle Dubois", rating: 5, comment: "Perfect restoration of my 1950s coat. Looks amazing!", date: "2026-03-28" }
    ]
  },
  {
    id: 8,
    name: "Omar Hassan",
    specialty: "Athletic & Activewear",
    rating: 4.6,
    reviewCount: 89,
    responseTime: "3 hours",
    location: "Downtown, Dubai",
    availability: true,
    experience: "5 years",
    priceRange: "$30-85",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Specializing in sportswear and performance fabric alterations. Perfect fit for active lifestyles.",
    services: ["Sportswear Alterations", "Yoga Pants Hemming", "Athletic Jacket Resizing", "Performance Fabric Repair"],
    reviews: [
      { id: 1, author: "Zara Ahmed", rating: 5, comment: "Omar altered my workout clothes perfectly. Great understanding of athletic wear.", date: "2026-05-19" },
      { id: 2, author: "Ryan Mitchell", rating: 4, comment: "Good work on my running gear. Fast turnaround.", date: "2026-04-26" },
      { id: 3, author: "Nina Petrov", rating: 5, comment: "Excellent alterations on my yoga pants. Perfect fit now!", date: "2026-04-08" }
    ]
  },
  {
    id: 9,
    name: "Elena Volkov",
    specialty: "Evening & Cocktail Dresses",
    rating: 4.9,
    reviewCount: 118,
    responseTime: "2 hours",
    location: "Central, Moscow",
    availability: true,
    experience: "11 years",
    priceRange: "$55-140",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    bio: "Expert in formal evening wear and cocktail dress alterations. Creating stunning silhouettes.",
    services: ["Evening Gown Alterations", "Cocktail Dress Fitting", "Formal Wear Adjustments", "Beading & Embellishment"],
    reviews: [
      { id: 1, author: "Anastasia Ivanova", rating: 5, comment: "Elena made my evening gown fit like a dream. Absolutely stunning!", date: "2026-05-16" },
      { id: 2, author: "Viktor Sokolov", rating: 5, comment: "Perfect alterations for my wife's cocktail dresses. Very professional.", date: "2026-04-23" },
      { id: 3, author: "Natasha Romanova", rating: 4, comment: "Beautiful work on formal wear. Highly skilled.", date: "2026-03-20" }
    ]
  },
  {
    id: 10,
    name: "Diego Morales",
    specialty: "Denim & Streetwear",
    rating: 4.7,
    reviewCount: 134,
    responseTime: "4 hours",
    location: "Condesa, Mexico City",
    availability: true,
    experience: "6 years",
    priceRange: "$28-75",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    bio: "Specializing in denim and urban streetwear alterations. Modern fits for contemporary styles.",
    services: ["Denim Alterations", "Streetwear Adjustments", "Distressing & Repairs", "Custom Patches"],
    reviews: [
      { id: 1, author: "Carlos Mendez", rating: 5, comment: "Diego knows denim! Perfect tapering on my jeans.", date: "2026-05-21" },
      { id: 2, author: "Valentina Cruz", rating: 4, comment: "Great work on streetwear pieces. Very trendy and skilled.", date: "2026-05-03" },
      { id: 3, author: "Miguel Santos", rating: 5, comment: "Best denim alterations I've had. Highly recommend!", date: "2026-04-11" }
    ]
  },
  {
    id: 11,
    name: "Yuki Tanaka",
    specialty: "Minimalist & Contemporary",
    rating: 4.8,
    reviewCount: 76,
    responseTime: "3 hours",
    location: "Shibuya, Tokyo",
    availability: true,
    experience: "9 years",
    priceRange: "$45-110",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    bio: "Expert in clean, minimalist alterations with a contemporary aesthetic. Precision and simplicity.",
    services: ["Minimalist Alterations", "Contemporary Fit Adjustments", "Clean Line Tailoring", "Modern Silhouettes"],
    reviews: [
      { id: 1, author: "Kenji Yamamoto", rating: 5, comment: "Yuki's work is impeccable. Perfect minimalist aesthetic.", date: "2026-05-14" },
      { id: 2, author: "Sakura Nakamura", rating: 5, comment: "Clean, precise alterations. Exactly what I wanted.", date: "2026-04-20" },
      { id: 3, author: "Hiroshi Sato", rating: 4, comment: "Great contemporary tailoring. Very modern approach.", date: "2026-03-27" }
    ]
  },
  {
    id: 12,
    name: "Amara Okafor",
    specialty: "Plus Size Alterations",
    rating: 4.9,
    reviewCount: 167,
    responseTime: "2 hours",
    location: "Lekki, Lagos",
    availability: true,
    experience: "13 years",
    priceRange: "$40-105",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop",
    bio: "Specializing in plus size alterations with expertise in flattering fits and comfort.",
    services: ["Plus Size Alterations", "Comfort Fit Adjustments", "Custom Sizing", "Body-Positive Tailoring"],
    reviews: [
      { id: 1, author: "Chioma Nwosu", rating: 5, comment: "Amara understands plus size bodies perfectly. My clothes fit beautifully!", date: "2026-05-17" },
      { id: 2, author: "Blessing Adeyemi", rating: 5, comment: "Finally found a tailor who gets it right. Excellent work!", date: "2026-04-24" },
      { id: 3, author: "Ngozi Okeke", rating: 5, comment: "Amazing alterations. Very skilled and understanding.", date: "2026-04-02" }
    ]
  },
  {
    id: 13,
    name: "Lars Eriksson",
    specialty: "Outdoor & Technical Wear",
    rating: 4.6,
    reviewCount: 62,
    responseTime: "5 hours",
    location: "Gamla Stan, Stockholm",
    availability: true,
    experience: "8 years",
    priceRange: "$50-130",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop",
    bio: "Expert in outdoor gear and technical fabric alterations. Maintaining functionality and performance.",
    services: ["Outdoor Gear Alterations", "Technical Fabric Repair", "Waterproof Seam Sealing", "Insulation Adjustments"],
    reviews: [
      { id: 1, author: "Ingrid Johansson", rating: 5, comment: "Lars repaired my hiking jacket perfectly. Still waterproof!", date: "2026-05-11" },
      { id: 2, author: "Erik Andersson", rating: 4, comment: "Good work on technical fabrics. Knows outdoor gear well.", date: "2026-04-17" },
      { id: 3, author: "Astrid Lindgren", rating: 5, comment: "Excellent alterations on my ski jacket. Very knowledgeable.", date: "2026-03-24" }
    ]
  },
  {
    id: 14,
    name: "Priya Sharma",
    specialty: "Sarees & Indian Wear",
    rating: 4.9,
    reviewCount: 201,
    responseTime: "3 hours",
    location: "Bandra, Mumbai",
    availability: true,
    experience: "16 years",
    priceRange: "$35-95",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    bio: "Specializing in traditional Indian garments with modern alterations. Expert in saree blouses and ethnic wear.",
    services: ["Saree Blouse Alterations", "Salwar Kameez Fitting", "Lehenga Adjustments", "Ethnic Wear Customization"],
    reviews: [
      { id: 1, author: "Anjali Kapoor", rating: 5, comment: "Priya is the best for saree blouses! Perfect fit every time.", date: "2026-05-23" },
      { id: 2, author: "Ravi Mehta", rating: 5, comment: "Excellent work on my wife's lehenga. Very skilled.", date: "2026-05-06" },
      { id: 3, author: "Deepa Reddy", rating: 5, comment: "Amazing alterations on ethnic wear. Highly recommend!", date: "2026-04-13" }
    ]
  },
  {
    id: 15,
    name: "Marcus Webb",
    specialty: "Business & Corporate Wear",
    rating: 4.7,
    reviewCount: 95,
    responseTime: "2 hours",
    location: "Financial District, Toronto",
    availability: true,
    experience: "10 years",
    priceRange: "$45-115",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop",
    bio: "Expert in professional business attire and corporate wear. Sharp, polished alterations for the workplace.",
    services: ["Business Suit Alterations", "Dress Shirt Tailoring", "Corporate Dress Fitting", "Professional Wear Adjustments"],
    reviews: [
      { id: 1, author: "Jennifer Clarke", rating: 5, comment: "Marcus tailored all my work suits perfectly. Very professional service.", date: "2026-05-13" },
      { id: 2, author: "David Thompson", rating: 4, comment: "Great work on business attire. Quick turnaround for busy schedules.", date: "2026-04-21" },
      { id: 3, author: "Sarah Mitchell", rating: 5, comment: "Excellent alterations for corporate wear. Highly recommend!", date: "2026-03-29" }
    ]
  },
  {
    id: 16,
    name: "Isabella Romano",
    specialty: "Luxury & Designer Wear",
    rating: 4.9,
    reviewCount: 83,
    responseTime: "4 hours",
    location: "Centro Storico, Rome",
    availability: true,
    experience: "14 years",
    priceRange: "$80-220",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop",
    bio: "Specializing in high-end designer garments and luxury alterations. Preserving quality and craftsmanship.",
    services: ["Designer Alterations", "Luxury Garment Care", "Couture Adjustments", "Premium Fabric Handling"],
    reviews: [
      { id: 1, author: "Francesca Bianchi", rating: 5, comment: "Isabella handled my designer pieces with such care. Impeccable work!", date: "2026-05-09" },
      { id: 2, author: "Giovanni Rossi", rating: 5, comment: "Perfect alterations on luxury items. Very trustworthy.", date: "2026-04-15" },
      { id: 3, author: "Valentina Ferrari", rating: 4, comment: "Excellent work on high-end garments. Worth the investment.", date: "2026-03-22" }
    ]
  },
  {
    id: 17,
    name: "Fatima Al-Rashid",
    specialty: "Modest & Hijab Fashion",
    rating: 4.8,
    reviewCount: 124,
    responseTime: "3 hours",
    location: "Jumeirah, Dubai",
    availability: true,
    experience: "9 years",
    priceRange: "$35-90",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop",
    bio: "Expert in modest fashion and hijab-friendly alterations. Understanding cultural and religious requirements.",
    services: ["Modest Wear Alterations", "Abaya Adjustments", "Hijab-Friendly Tailoring", "Cultural Garment Fitting"],
    reviews: [
      { id: 1, author: "Layla Hassan", rating: 5, comment: "Fatima understands modest fashion perfectly. Beautiful alterations!", date: "2026-05-20" },
      { id: 2, author: "Aisha Mohammed", rating: 5, comment: "Excellent work on my abayas. Very respectful and skilled.", date: "2026-05-02" },
      { id: 3, author: "Mariam Abdullah", rating: 4, comment: "Great alterations for modest wear. Highly recommend!", date: "2026-04-09" }
    ]
  },
  {
    id: 18,
    name: "Thomas Blackwood",
    specialty: "Uniform & Workwear",
    rating: 4.6,
    reviewCount: 108,
    responseTime: "4 hours",
    location: "Southwark, London",
    availability: true,
    experience: "12 years",
    priceRange: "$30-80",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Specializing in professional uniforms and workwear alterations. Durable and functional tailoring.",
    services: ["Uniform Alterations", "Workwear Adjustments", "Safety Gear Fitting", "Industrial Garment Repair"],
    reviews: [
      { id: 1, author: "Emily Watson", rating: 5, comment: "Thomas altered all our staff uniforms perfectly. Very efficient!", date: "2026-05-18" },
      { id: 2, author: "Robert Hughes", rating: 4, comment: "Good work on workwear. Understands durability requirements.", date: "2026-04-25" },
      { id: 3, author: "Claire Bennett", rating: 5, comment: "Excellent uniform alterations. Great for bulk orders.", date: "2026-04-07" }
    ]
  },
  {
    id: 19,
    name: "Dmitri Volkov",
    specialty: "Costume & Theater Wear",
    rating: 4.7,
    reviewCount: 67,
    responseTime: "5 hours",
    location: "Arbat, Moscow",
    availability: true,
    experience: "11 years",
    priceRange: "$55-145",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    bio: "Expert in theatrical costumes and performance wear. Creative alterations for stage and screen.",
    services: ["Costume Alterations", "Theater Wear Adjustments", "Period Costume Fitting", "Performance Garment Repair"],
    reviews: [
      { id: 1, author: "Olga Petrova", rating: 5, comment: "Dmitri's work on our theater costumes was outstanding. Very creative!", date: "2026-05-12" },
      { id: 2, author: "Alexei Ivanov", rating: 4, comment: "Great expertise in period costumes. Very detailed work.", date: "2026-04-18" },
      { id: 3, author: "Katya Sokolova", rating: 5, comment: "Perfect alterations for performance wear. Highly skilled!", date: "2026-03-26" }
    ]
  },
  {
    id: 20,
    name: "Zara Ahmed",
    specialty: "Maternity & Nursing Wear",
    rating: 4.9,
    reviewCount: 143,
    responseTime: "2 hours",
    location: "Notting Hill, London",
    availability: true,
    experience: "7 years",
    priceRange: "$35-85",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop",
    bio: "Specializing in maternity and nursing-friendly alterations. Comfort and functionality for new mothers.",
    services: ["Maternity Alterations", "Nursing-Friendly Adjustments", "Postpartum Fitting", "Comfort Wear Tailoring"],
    reviews: [
      { id: 1, author: "Hannah Foster", rating: 5, comment: "Zara made my maternity clothes so comfortable. Perfect alterations!", date: "2026-05-22" },
      { id: 2, author: "Rebecca Stone", rating: 5, comment: "Excellent work on nursing-friendly clothing. Very understanding.", date: "2026-05-04" },
      { id: 3, author: "Emma Wilson", rating: 5, comment: "Amazing alterations for maternity wear. Highly recommend!", date: "2026-04-10" }
    ]
  },
  {
    id: 21,
    name: "Nina Petrov",
    specialty: "Bridal & Special Occasions",
    rating: 4.8,
    reviewCount: 112,
    responseTime: "3 hours",
    location: "Old Town, Prague",
    availability: true,
    experience: "13 years",
    priceRange: "$60-165",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
    bio: "Expert in bridal gowns and special occasion dresses. Creating perfect moments through perfect fits.",
    services: ["Bridal Gown Alterations", "Bridesmaid Dress Fitting", "Special Occasion Adjustments", "Veil & Accessory Alterations"],
    reviews: [
      { id: 1, author: "Petra Novak", rating: 5, comment: "Nina made my wedding dress absolutely perfect. I felt like a princess!", date: "2026-05-15" },
      { id: 2, author: "Jana Dvorak", rating: 5, comment: "Beautiful work on bridesmaid dresses. Very professional.", date: "2026-04-22" },
      { id: 3, author: "Lucie Svoboda", rating: 4, comment: "Excellent alterations for special occasions. Highly skilled!", date: "2026-03-19" }
    ]
  }
];