import axios from "axios";

const options = {
  method: 'GET',
//   url: 'https://booking-com.p.rapidapi.com/v1/hotels/room-list',
  params: {
    hotel_id: '1115841',
    currency: 'USD',
    checkout_date: '2023-09-24',
    locale: 'en-gb',
    checkin_date: '2023-09-22',
    adults_number_by_rooms: '4',
    units: 'metric'
  },
  headers: {
    'X-RapidAPI-Key': 'eb62a4e22cmsh6fa4648e0b05b79p1e8afdjsnfdac33378d64',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
  }
};

export const getRooms = async () => {
    try {
	// const response = await axios.request(options);
    // console.log("fetching data");
	// console.log(response.data);
    const data = {
    "111584101": {
        "highlights": [
            {
                "translated_name": "Free WiFi",
                "icon": "icon_wifi"
            },
            {
                "translated_name": "Sea view",
                "icon": "icon_viewed",
                "id": 108
            },
            {
                "translated_name": "Landmark view",
                "icon": "icon_viewed",
                "id": 113
            },
            {
                "translated_name": "City view",
                "id": 121,
                "icon": "icon_viewed"
            },
            {
                "icon": "icon_checkmark",
                "id": 157,
                "translated_name": "Rooftop pool"
            },
            {
                "translated_name": "Air conditioning",
                "icon": "icon_airconditioning",
                "id": 11
            },
            {
                "icon": "icon_bath",
                "id": 38,
                "translated_name": "Ensuite bathroom"
            },
            {
                "translated_name": "Flat-screen TV",
                "id": 75,
                "icon": "icon_flattv"
            }
        ],
        "description": "Guests will have a special experience as this twin room features a rooftop pool. Offering free toiletries, this twin room includes a private bathroom with a walk-in shower, a bidet and a hairdryer. The air-conditioned twin room offers a flat-screen TV with cable channels, a tea and coffee maker, a wardrobe, a safe deposit box as well as sea views. The unit offers 3 beds.",
        "children_and_beds_text": {
            "age_intervals": [
                {
                    "types_by_price": [
                        [
                            "crib"
                        ]
                    ],
                    "crib": {
                        "price": 0,
                        "price_mode_n": 0,
                        "price_type_n": 0,
                        "id": 25845047,
                        "price_type": "free",
                        "price_mode": "per_night"
                    },
                    "max_age": 2,
                    "min_age": 0,
                    "group_by_price": {
                        "free,per_night,0": [
                            "crib"
                        ]
                    }
                },
                {
                    "group_by_price": {
                        "fixed,per_night,16.00": [
                            "extra_bed"
                        ]
                    },
                    "max_age": 11,
                    "min_age": 6,
                    "extra_bed": {
                        "price_type": "fixed",
                        "price_mode": "per_night",
                        "price_mode_n": 0,
                        "id": 25845049,
                        "price_type_n": 2,
                        "price": "US$16"
                    },
                    "types_by_price": [
                        [
                            "extra_bed"
                        ]
                    ]
                },
                {
                    "min_age": 255,
                    "max_age": 255,
                    "group_by_price": {
                        "fixed,per_night,20.00": [
                            "extra_bed"
                        ]
                    },
                    "types_by_price": [
                        [
                            "extra_bed"
                        ]
                    ],
                    "extra_bed": {
                        "price": "US$20",
                        "price_mode": "per_night",
                        "price_type": "fixed",
                        "price_type_n": 2,
                        "id": 25845051,
                        "price_mode_n": 0
                    }
                }
            ],
            "allow_children": 1,
            "cribs_and_extra_beds": [
                {
                    "text": "Supplements are not calculated automatically in the total costs and will have to be paid for separately during your stay.",
                    "highlight": 0
                },
                {
                    "highlight": 0,
                    "text": "The maximum number of cots, extra beds and children allowed in existing beds may vary depending on the option you book."
                },
                {
                    "text": "All cots and extra beds are subject to availability.",
                    "highlight": 0
                }
            ],
            "children_at_the_property": [
                {
                    "highlight": 0,
                    "text": "Children of any age are welcome."
                },
                {
                    "text": "Children aged 12 years and above are considered adults at this property.",
                    "highlight": 0
                },
                {
                    "highlight": 1,
                    "text": "To see correct prices and occupancy information, please add the number of children in your group and their ages to your search."
                }
            ]
        },
        "private_bathroom_highlight": {
            "text": "Private bathroom with shower",
            "has_highlight": 1
        },
        "facilities": [
            {
                "alt_facilitytype_name": "General",
                "id": 6,
                "facilitytype_name": "Room Amenities",
                "facilitytype_id": 4,
                "name": "Safety deposit box",
                "alt_facilitytype_id": 1
            },
            {
                "facilitytype_id": 9,
                "name": "Sea view",
                "alt_facilitytype_id": 14,
                "facilitytype_name": "Outdoor & View",
                "id": 108,
                "alt_facilitytype_name": "View"
            },
            {
                "facilitytype_name": "Accessibility",
                "name": "Upper floors accessible by elevator",
                "facilitytype_id": 19,
                "alt_facilitytype_id": 19,
                "alt_facilitytype_name": "Accessibility",
                "id": 132
            },
            {
                "facilitytype_name": "Media & Technology",
                "facilitytype_id": 6,
                "name": "Flat-screen TV",
                "alt_facilitytype_id": 6,
                "alt_facilitytype_name": "Media & Technology",
                "id": 75
            },
            {
                "alt_facilitytype_id": 3,
                "name": "Wake-up service",
                "facilitytype_id": 8,
                "facilitytype_name": "Services & Extras",
                "id": 83,
                "alt_facilitytype_name": "Services"
            },
            {
                "facilitytype_id": 4,
                "name": "Sofa",
                "alt_facilitytype_id": 15,
                "facilitytype_name": "Room Amenities",
                "id": 77,
                "alt_facilitytype_name": "Living Area"
            },
            {
                "id": 15,
                "alt_facilitytype_name": "General",
                "alt_facilitytype_id": 1,
                "facilitytype_id": 4,
                "name": "Iron",
                "facilitytype_name": "Room Amenities"
            },
            {
                "facilitytype_name": "Services & Extras",
                "name": "Towels",
                "facilitytype_id": 8,
                "alt_facilitytype_id": 5,
                "alt_facilitytype_name": "Bathroom",
                "id": 124
            },
            {
                "facilitytype_name": "Accessibility",
                "alt_facilitytype_id": 19,
                "facilitytype_id": 19,
                "name": "Entire unit wheelchair accessible",
                "alt_facilitytype_name": "Accessibility",
                "id": 134
            },
            {
                "facilitytype_name": "Room Amenities",
                "facilitytype_id": 4,
                "name": "Ironing facilities",
                "alt_facilitytype_id": 1,
                "alt_facilitytype_name": "General",
                "id": 25
            },
            {
                "facilitytype_name": "Bathroom",
                "name": "Free toiletries",
                "facilitytype_id": 5,
                "alt_facilitytype_id": 5,
                "alt_facilitytype_name": "Bathroom",
                "id": 27
            },
            {
                "alt_facilitytype_name": "Room Amenities",
                "id": 184,
                "facilitytype_name": "Room Amenities",
                "alt_facilitytype_id": 4,
                "name": "Socket near the bed",
                "facilitytype_id": 4
            },
            {
                "facilitytype_name": "Food & Drink",
                "name": "Tea/Coffee maker",
                "facilitytype_id": 7,
                "alt_facilitytype_id": 7,
                "alt_facilitytype_name": "Food & Drink",
                "id": 1
            },
            {
                "id": 12,
                "alt_facilitytype_name": "Bathroom",
                "alt_facilitytype_id": 5,
                "name": "Hairdryer",
                "facilitytype_id": 5,
                "facilitytype_name": "Bathroom"
            },
            {
                "id": 91,
                "alt_facilitytype_name": "Bathroom",
                "facilitytype_id": 8,
                "name": "Towels/sheets (extra fee)",
                "alt_facilitytype_id": 5,
                "facilitytype_name": "Services & Extras"
            },
            {
                "alt_facilitytype_id": 6,
                "facilitytype_id": 6,
                "name": "TV",
                "facilitytype_name": "Media & Technology",
                "id": 8,
                "alt_facilitytype_name": "Media & Technology"
            },
            {
                "alt_facilitytype_id": 1,
                "name": "Hypoallergenic",
                "facilitytype_id": 4,
                "facilitytype_name": "Room Amenities",
                "id": 115,
                "alt_facilitytype_name": "General"
            },
            {
                "facilitytype_name": "Services & Extras",
                "alt_facilitytype_id": 17,
                "facilitytype_id": 8,
                "name": "Linen",
                "alt_facilitytype_name": "Bedroom",
                "id": 125
            },
            {
                "facilitytype_name": "Outdoor & View",
                "alt_facilitytype_id": 14,
                "facilitytype_id": 9,
                "name": "City view",
                "alt_facilitytype_name": "View",
                "id": 121
            },
            {
                "alt_facilitytype_name": "General",
                "id": 18,
                "facilitytype_name": "Room Amenities",
                "alt_facilitytype_id": 1,
                "name": "Pants press",
                "facilitytype_id": 4
            },
            {
                "alt_facilitytype_name": "Bathroom",
                "id": 31,
                "facilitytype_name": "Bathroom",
                "alt_facilitytype_id": 5,
                "facilitytype_id": 5,
                "name": "Toilet"
            },
            {
                "id": 86,
                "alt_facilitytype_name": "Kitchen",
                "name": "Electric kettle",
                "facilitytype_id": 7,
                "alt_facilitytype_id": 12,
                "facilitytype_name": "Food & Drink"
            },
            {
                "id": 113,
                "alt_facilitytype_name": "View",
                "alt_facilitytype_id": 14,
                "name": "Landmark view",
                "facilitytype_id": 9,
                "facilitytype_name": "Outdoor & View"
            },
            {
                "id": 230,
                "alt_facilitytype_name": "Physical distancing",
                "alt_facilitytype_id": 39,
                "name": "Single-room air conditioning for guest accommodation",
                "facilitytype_id": 39,
                "facilitytype_name": "Physical distancing"
            },
            {
                "alt_facilitytype_id": 6,
                "facilitytype_id": 6,
                "name": "Telephone",
                "facilitytype_name": "Media & Technology",
                "id": 9,
                "alt_facilitytype_name": "Media & Technology"
            },
            {
                "alt_facilitytype_id": 5,
                "facilitytype_id": 5,
                "name": "Shower",
                "facilitytype_name": "Bathroom",
                "id": 4,
                "alt_facilitytype_name": "Bathroom"
            },
            {
                "alt_facilitytype_name": "Kitchen",
                "id": 94,
                "facilitytype_name": "Room Amenities",
                "facilitytype_id": 4,
                "name": "Tumble dryer",
                "alt_facilitytype_id": 12
            },
            {
                "alt_facilitytype_name": "Bathroom",
                "id": 100,
                "facilitytype_name": "Bathroom",
                "facilitytype_id": 5,
                "name": "Bidet",
                "alt_facilitytype_id": 5
            },
            {
                "id": 68,
                "alt_facilitytype_name": "Media & Technology",
                "name": "Cable channels",
                "facilitytype_id": 6,
                "alt_facilitytype_id": 6,
                "facilitytype_name": "Media & Technology"
            },
            {
                "alt_facilitytype_name": "Bedroom",
                "id": 95,
                "facilitytype_name": "Room Amenities",
                "facilitytype_id": 4,
                "name": "Wardrobe or closet",
                "alt_facilitytype_id": 17
            },
            {
                "alt_facilitytype_id": 12,
                "facilitytype_id": 4,
                "name": "Cleaning products",
                "facilitytype_name": "Room Amenities",
                "id": 116,
                "alt_facilitytype_name": "Kitchen"
            },
            {
                "facilitytype_id": 5,
                "name": "Toilet paper",
                "alt_facilitytype_id": 5,
                "facilitytype_name": "Bathroom",
                "id": 141,
                "alt_facilitytype_name": "Bathroom"
            },
            {
                "alt_facilitytype_name": "General",
                "id": 73,
                "facilitytype_name": "Room Amenities",
                "alt_facilitytype_id": 1,
                "name": "Interconnected room(s) available",
                "facilitytype_id": 4
            },
            {
                "facilitytype_name": "Media & Technology",
                "facilitytype_id": 6,
                "name": "Satellite channels",
                "alt_facilitytype_id": 6,
                "alt_facilitytype_name": "Media & Technology",
                "id": 44
            },
            {
                "id": 11,
                "alt_facilitytype_name": "General",
                "name": "Air conditioning",
                "facilitytype_id": 4,
                "alt_facilitytype_id": 1,
                "facilitytype_name": "Room Amenities"
            },
            {
                "id": 231,
                "alt_facilitytype_name": "Cleanliness & disinfecting",
                "name": "Hand sanitiser",
                "facilitytype_id": 40,
                "alt_facilitytype_id": 40,
                "facilitytype_name": "Cleanliness & disinfecting"
            },
            {
                "id": 38,
                "alt_facilitytype_name": "Bathroom",
                "alt_facilitytype_id": 5,
                "name": "Private bathroom",
                "facilitytype_id": 5,
                "facilitytype_name": "Bathroom"
            }
        ],
        "private_bathroom_count": 0,
        "bed_configurations": [
            {
                "bed_types": [
                    {
                        "count": 2,
                        "name": "Single bed(s)",
                        "description_imperial": "35-51 inches wide",
                        "bed_type": 1,
                        "name_with_count": "2 single beds",
                        "description": "90-130 cm wide",
                        "description_localized": null
                    },
                    {
                        "description_localized": null,
                        "name_with_count": "1 sofa bed",
                        "description": "variable size",
                        "bed_type": 5,
                        "description_imperial": "variable size",
                        "name": "",
                        "count": 1
                    }
                ]
            }
        ],
        "photos": [
            {
                "url_640x200": "https://cf.bstatic.com/xdata/images/hotel/640x200/490902784.jpg?k=ad345ca3be7dd6dbda48dfaaab7d6b0569b548e0c4b7628bd986721005eed555&o=",
                "photo_id": 490902784,
                "url_max300": "https://cf.bstatic.com/xdata/images/hotel/max300/490902784.jpg?k=ad345ca3be7dd6dbda48dfaaab7d6b0569b548e0c4b7628bd986721005eed555&o=",
                "last_update_date": "2023-09-07 09:37:18",
                "url_square60": "https://cf.bstatic.com/xdata/images/hotel/square60/490902784.jpg?k=ad345ca3be7dd6dbda48dfaaab7d6b0569b548e0c4b7628bd986721005eed555&o=",
                "url_original": "https://cf.bstatic.com/xdata/images/hotel/max500/490902784.jpg?k=ad345ca3be7dd6dbda48dfaaab7d6b0569b548e0c4b7628bd986721005eed555&o=",
                "new_order": 0,
                "ratio": 1.50054854635217
            },
            {
                "url_square60": "https://cf.bstatic.com/xdata/images/hotel/square60/490902787.jpg?k=78a1eb4f46b79ab6a2e0cc169202dea980f8419ab83ff96333fd1767fc891bc9&o=",
                "url_original": "https://cf.bstatic.com/xdata/images/hotel/max500/490902787.jpg?k=78a1eb4f46b79ab6a2e0cc169202dea980f8419ab83ff96333fd1767fc891bc9&o=",
                "new_order": 1,
                "ratio": 1.4995887030436,
                "url_640x200": "https://cf.bstatic.com/xdata/images/hotel/640x200/490902787.jpg?k=78a1eb4f46b79ab6a2e0cc169202dea980f8419ab83ff96333fd1767fc891bc9&o=",
                "url_max300": "https://cf.bstatic.com/xdata/images/hotel/max300/490902787.jpg?k=78a1eb4f46b79ab6a2e0cc169202dea980f8419ab83ff96333fd1767fc891bc9&o=",
                "last_update_date": "2023-09-07 09:37:25",
                "photo_id": 490902787
            },
            {
                "url_original": "https://cf.bstatic.com/xdata/images/hotel/max500/490902786.jpg?k=4ff58211adbd9862b8efadade2821a11ab30ac80513e91c4cd663e69288a14e6&o=",
                "new_order": 2,
                "url_square60": "https://cf.bstatic.com/xdata/images/hotel/square60/490902786.jpg?k=4ff58211adbd9862b8efadade2821a11ab30ac80513e91c4cd663e69288a14e6&o=",
                "ratio": 1.49986290101453,
                "url_640x200": "https://cf.bstatic.com/xdata/images/hotel/640x200/490902786.jpg?k=4ff58211adbd9862b8efadade2821a11ab30ac80513e91c4cd663e69288a14e6&o=",
                "last_update_date": "2023-09-07 09:37:22",
                "url_max300": "https://cf.bstatic.com/xdata/images/hotel/max300/490902786.jpg?k=4ff58211adbd9862b8efadade2821a11ab30ac80513e91c4cd663e69288a14e6&o=",
                "photo_id": 490902786
            },
            {
                "photo_id": 490902785,
                "url_max300": "https://cf.bstatic.com/xdata/images/hotel/max300/490902785.jpg?k=ce27ab6582340a098f5f89941948e8576cdf97869add02dbe2e94488a240b57c&o=",
                "last_update_date": "2023-09-07 09:37:20",
                "url_640x200": "https://cf.bstatic.com/xdata/images/hotel/640x200/490902785.jpg?k=ce27ab6582340a098f5f89941948e8576cdf97869add02dbe2e94488a240b57c&o=",
                "ratio": 1.49986290101453,
                "url_square60": "https://cf.bstatic.com/xdata/images/hotel/square60/490902785.jpg?k=ce27ab6582340a098f5f89941948e8576cdf97869add02dbe2e94488a240b57c&o=",
                "url_original": "https://cf.bstatic.com/xdata/images/hotel/max500/490902785.jpg?k=ce27ab6582340a098f5f89941948e8576cdf97869add02dbe2e94488a240b57c&o=",
                "new_order": 3
            },
            {
                "ratio": 1.50013709898547,
                "new_order": 4,
                "url_original": "https://cf.bstatic.com/xdata/images/hotel/max500/490902817.jpg?k=c47f59313a6216c4540957a83d1ce99687c3f2dbfca2a9288ca612fec00a97d9&o=",
                "url_square60": "https://cf.bstatic.com/xdata/images/hotel/square60/490902817.jpg?k=c47f59313a6216c4540957a83d1ce99687c3f2dbfca2a9288ca612fec00a97d9&o=",
                "photo_id": 490902817,
                "last_update_date": "2023-09-07 09:37:38",
                "url_max300": "https://cf.bstatic.com/xdata/images/hotel/max300/490902817.jpg?k=c47f59313a6216c4540957a83d1ce99687c3f2dbfca2a9288ca612fec00a97d9&o=",
                "url_640x200": "https://cf.bstatic.com/xdata/images/hotel/640x200/490902817.jpg?k=c47f59313a6216c4540957a83d1ce99687c3f2dbfca2a9288ca612fec00a97d9&o="
            }
        ],
        "is_high_floor_guaranteed": 0
    },
    "111584107": {
        "highlights": [
            {
                "icon": "icon_wifi",
                "translated_name": "Free WiFi"
            },
            {
                "translated_name": "Sea view",
                "id": 108,
                "icon": "icon_viewed"
            },
            {
                "id": 113,
                "icon": "icon_viewed",
                "translated_name": "Landmark view"
            },
            {
                "translated_name": "City view",
                "icon": "icon_viewed",
                "id": 121
            },
            {
                "translated_name": "Rooftop pool",
                "id": 157,
                "icon": "icon_checkmark"
            },
            {
                "id": 11,
                "icon": "icon_airconditioning",
                "translated_name": "Air conditioning"
            },
            {
                "translated_name": "Ensuite bathroom",
                "icon": "icon_bath",
                "id": 38
            },
            {
                "icon": "icon_flattv",
                "id": 75,
                "translated_name": "Flat-screen TV"
            }
        ],
        "children_and_beds_text": {
            "cribs_and_extra_beds": [
                {
                    "text": "Supplements are not calculated automatically in the total costs and will have to be paid for separately during your stay.",
                    "highlight": 0
                },
                {
                    "highlight": 0,
                    "text": "The maximum number of cots, extra beds and children allowed in existing beds may vary depending on the option you book."
                },
                {
                    "highlight": 0,
                    "text": "All cots and extra beds are subject to availability."
                }
            ],
            "children_at_the_property": [
                {
                    "highlight": 0,
                    "text": "Children of any age are welcome."
                },
                {
                    "text": "Children aged 12 years and above are considered adults at this property.",
                    "highlight": 0
                },
                {
                    "highlight": 1,
                    "text": "To see correct prices and occupancy information, please add the number of children in your group and their ages to your search."
                }
            ],
            "allow_children": 1,
            "age_intervals": [
                {
                    "group_by_price": {
                        "free,per_night,0": [
                            "crib"
                        ]
                    },
                    "max_age": 2,
                    "min_age": 0,
                    "crib": {
                        "price": 0,
                        "price_type_n": 0,
                        "id": 25845047,
                        "price_mode_n": 0,
                        "price_mode": "per_night",
                        "price_type": "free"
                    },
                    "types_by_price": [
                        [
                            "crib"
                        ]
                    ]
                },
                {
                    "types_by_price": [
                        [
                            "extra_bed"
                        ]
                    ],
                    "extra_bed": {
                        "price": "US$16",
                        "price_type_n": 2,
                        "id": 25845049,
                        "price_mode_n": 0,
                        "price_mode": "per_night",
                        "price_type": "fixed"
                    },
                    "min_age": 6,
                    "max_age": 11,
                    "group_by_price": {
                        "fixed,per_night,16.00": [
                            "extra_bed"
                        ]
                    }
                },
                {
                    "extra_bed": {
                        "price_type": "fixed",
                        "price_mode": "per_night",
                        "price_mode_n": 0,
                        "id": 25845051,
                        "price_type_n": 2,
                        "price": "US$20"
                    },
                    "types_by_price": [
                        [
                            "extra_bed"
                        ]
                    ],
                    "group_by_price": {
                        "fixed,per_night,20.00": [
                            "extra_bed"
                        ]
                    },
                    "max_age": 255,
                    "min_age": 255
                }
            ]
        },
        "description": "The rooftop pool is the standout feature of this double room. Featuring free toiletries, this double room includes a private bathroom with a walk-in shower, a bidet and a hairdryer. The spacious air-conditioned double room features a flat-screen TV with cable channels, a tea and coffee maker, a wardrobe, a safe deposit box as well as sea views. The unit has 2 beds.",
        "private_bathroom_highlight": {
            "text": "Private bathroom with shower",
            "has_highlight": 1
        },
        "facilities": [
            {
                "facilitytype_name": "Room Amenities",
                "alt_facilitytype_id": 1,
                "facilitytype_id": 4,
                "name": "Safety deposit box",
                "alt_facilitytype_name": "General",
                "id": 6
            },
            {
                "facilitytype_name": "Outdoor & View",
                "alt_facilitytype_id": 14,
                "facilitytype_id": 9,
                "name": "Sea view",
                "alt_facilitytype_name": "View",
                "id": 108
            },
            {
                "id": 132,
                "alt_facilitytype_name": "Accessibility",
                "alt_facilitytype_id": 19,
                "name": "Upper floors accessible by elevator",
                "facilitytype_id": 19,
                "facilitytype_name": "Accessibility"
            },
            {
                "alt_facilitytype_name": "Media & Technology",
                "id": 75,
                "facilitytype_name": "Media & Technology",
                "facilitytype_id": 6,
                "name": "Flat-screen TV",
                "alt_facilitytype_id": 6
            },
            {
                "alt_facilitytype_name": "Services",
                "id": 83,
                "facilitytype_name": "Services & Extras",
                "facilitytype_id": 8,
                "name": "Wake-up service",
                "alt_facilitytype_id": 3
            },
            {
                "facilitytype_id": 4,
                "name": "Sofa",
                "alt_facilitytype_id": 15,
                "facilitytype_name": "Room Amenities",
                "id": 77,
                "alt_facilitytype_name": "Living Area"
            },
            {
                "alt_facilitytype_name": "General",
                "id": 15,
                "facilitytype_name": "Room Amenities",
                "name": "Iron",
                "facilitytype_id": 4,
                "alt_facilitytype_id": 1
            },
            {
                "alt_facilitytype_name": "Bathroom",
                "id": 124,
                "facilitytype_name": "Services & Extras",
                "alt_facilitytype_id": 5,
                "facilitytype_id": 8,
                "name": "Towels"
            },
            {
                "id": 134,
                "alt_facilitytype_name": "Accessibility",
                "name": "Entire unit wheelchair accessible",
                "facilitytype_id": 19,
                "alt_facilitytype_id": 19,
                "facilitytype_name": "Accessibility"
            },
            {
                "name": "Ironing facilities",
                "facilitytype_id": 4,
                "alt_facilitytype_id": 1,
                "facilitytype_name": "Room Amenities",
                "id": 25,
                "alt_facilitytype_name": "General"
            },
            {
                "facilitytype_name": "Bathroom",
                "alt_facilitytype_id": 5,
                "name": "Free toiletries",
                "facilitytype_id": 5,
                "alt_facilitytype_name": "Bathroom",
                "id": 27
            },
            {
                "facilitytype_name": "Room Amenities",
                "alt_facilitytype_id": 4,
                "facilitytype_id": 4,
                "name": "Socket near the bed",
                "alt_facilitytype_name": "Room Amenities",
                "id": 184
            },
            {
                "facilitytype_name": "Food & Drink",
                "name": "Tea/Coffee maker",
                "facilitytype_id": 7,
                "alt_facilitytype_id": 7,
                "alt_facilitytype_name": "Food & Drink",
                "id": 1
            },
            {
                "alt_facilitytype_name": "Bathroom",
                "id": 12,
                "facilitytype_name": "Bathroom",
                "facilitytype_id": 5,
                "name": "Hairdryer",
                "alt_facilitytype_id": 5
            },
            {
                "alt_facilitytype_name": "Bathroom",
                "id": 91,
                "facilitytype_name": "Services & Extras",
                "name": "Towels/sheets (extra fee)",
                "facilitytype_id": 8,
                "alt_facilitytype_id": 5
            },
            {
                "alt_facilitytype_name": "Media & Technology",
                "id": 8,
                "facilitytype_name": "Media & Technology",
                "alt_facilitytype_id": 6,
                "name": "TV",
                "facilitytype_id": 6
            },
            {
                "facilitytype_name": "Room Amenities",
                "name": "Hypoallergenic",
                "facilitytype_id": 4,
                "alt_facilitytype_id": 1,
                "alt_facilitytype_name": "General",
                "id": 115
            },
            {
                "alt_facilitytype_name": "Bedroom",
                "id": 125,
                "facilitytype_name": "Services & Extras",
                "alt_facilitytype_id": 17,
                "name": "Linen",
                "facilitytype_id": 8
            },
            {
                "facilitytype_name": "Outdoor & View",
                "alt_facilitytype_id": 14,
                "name": "City view",
                "facilitytype_id": 9,
                "alt_facilitytype_name": "View",
                "id": 121
            },
            {
                "alt_facilitytype_id": 1,
                "facilitytype_id": 4,
                "name": "Pants press",
                "facilitytype_name": "Room Amenities",
                "id": 18,
                "alt_facilitytype_name": "General"
            },
            {
                "id": 31,
                "alt_facilitytype_name": "Bathroom",
                "alt_facilitytype_id": 5,
                "facilitytype_id": 5,
                "name": "Toilet",
                "facilitytype_name": "Bathroom"
            },
            {
                "alt_facilitytype_name": "Kitchen",
                "id": 86,
                "facilitytype_name": "Food & Drink",
                "name": "Electric kettle",
                "facilitytype_id": 7,
                "alt_facilitytype_id": 12
            },
            {
                "alt_facilitytype_name": "View",
                "id": 113,
                "facilitytype_name": "Outdoor & View",
                "alt_facilitytype_id": 14,
                "name": "Landmark view",
                "facilitytype_id": 9
            },
            {
                "alt_facilitytype_name": "Physical distancing",
                "id": 230,
                "facilitytype_name": "Physical distancing",
                "alt_facilitytype_id": 39,
                "facilitytype_id": 39,
                "name": "Single-room air conditioning for guest accommodation"
            },
            {
                "alt_facilitytype_name": "Media & Technology",
                "id": 9,
                "facilitytype_name": "Media & Technology",
                "alt_facilitytype_id": 6,
                "name": "Telephone",
                "facilitytype_id": 6
            },
            {
                "alt_facilitytype_name": "Bathroom",
                "id": 4,
                "facilitytype_name": "Bathroom",
                "facilitytype_id": 5,
                "name": "Shower",
                "alt_facilitytype_id": 5
            },
            {
                "name": "Tumble dryer",
                "facilitytype_id": 4,
                "alt_facilitytype_id": 12,
                "facilitytype_name": "Room Amenities",
                "id": 94,
                "alt_facilitytype_name": "Kitchen"
            },
            {
                "id": 100,
                "alt_facilitytype_name": "Bathroom",
                "alt_facilitytype_id": 5,
                "name": "Bidet",
                "facilitytype_id": 5,
                "facilitytype_name": "Bathroom"
            },
            {
                "alt_facilitytype_name": "Media & Technology",
                "id": 68,
                "facilitytype_name": "Media & Technology",
                "alt_facilitytype_id": 6,
                "facilitytype_id": 6,
                "name": "Cable channels"
            },
            {
                "id": 95,
                "alt_facilitytype_name": "Bedroom",
                "name": "Wardrobe or closet",
                "facilitytype_id": 4,
                "alt_facilitytype_id": 17,
                "facilitytype_name": "Room Amenities"
            },
            {
                "id": 116,
                "alt_facilitytype_name": "Kitchen",
                "name": "Cleaning products",
                "facilitytype_id": 4,
                "alt_facilitytype_id": 12,
                "facilitytype_name": "Room Amenities"
            },
            {
                "id": 141,
                "alt_facilitytype_name": "Bathroom",
                "name": "Toilet paper",
                "facilitytype_id": 5,
                "alt_facilitytype_id": 5,
                "facilitytype_name": "Bathroom"
            },
            {
                "facilitytype_id": 4,
                "name": "Interconnected room(s) available",
                "alt_facilitytype_id": 1,
                "facilitytype_name": "Room Amenities",
                "id": 73,
                "alt_facilitytype_name": "General"
            },
            {
                "alt_facilitytype_name": "Media & Technology",
                "id": 44,
                "facilitytype_name": "Media & Technology",
                "alt_facilitytype_id": 6,
                "facilitytype_id": 6,
                "name": "Satellite channels"
            },
            {
                "facilitytype_name": "Room Amenities",
                "alt_facilitytype_id": 1,
                "name": "Air conditioning",
                "facilitytype_id": 4,
                "alt_facilitytype_name": "General",
                "id": 11
            },
            {
                "facilitytype_id": 40,
                "name": "Hand sanitiser",
                "alt_facilitytype_id": 40,
                "facilitytype_name": "Cleanliness & disinfecting",
                "id": 231,
                "alt_facilitytype_name": "Cleanliness & disinfecting"
            },
            {
                "facilitytype_name": "Bathroom",
                "facilitytype_id": 5,
                "name": "Private bathroom",
                "alt_facilitytype_id": 5,
                "alt_facilitytype_name": "Bathroom",
                "id": 38
            }
        ],
        "private_bathroom_count": 0,
        "bed_configurations": [
            {
                "bed_types": [
                    {
                        "count": 1,
                        "name": "Extra-large double bed(s)",
                        "description": "181-210 cm wide",
                        "name_with_count": "1 extra-large double bed",
                        "description_imperial": "71-82 inches wide",
                        "bed_type": 3,
                        "description_localized": null
                    },
                    {
                        "description": "variable size",
                        "name_with_count": "1 sofa bed",
                        "description_imperial": "variable size",
                        "bed_type": 5,
                        "count": 1,
                        "name": "",
                        "description_localized": null
                    }
                ]
            }
        ],
        "photos": [
            {
                "photo_id": 490903473,
                "last_update_date": "2023-09-07 09:43:31",
                "url_max300": "https://cf.bstatic.com/xdata/images/hotel/max300/490903473.jpg?k=0dd7cb792521f03fe1607da73c7f18dddfdc56bab03c523aa1c3b40aad174715&o=",
                "url_640x200": "https://cf.bstatic.com/xdata/images/hotel/640x200/490903473.jpg?k=0dd7cb792521f03fe1607da73c7f18dddfdc56bab03c523aa1c3b40aad174715&o=",
                "ratio": 1.50082327113063,
                "url_original": "https://cf.bstatic.com/xdata/images/hotel/max500/490903473.jpg?k=0dd7cb792521f03fe1607da73c7f18dddfdc56bab03c523aa1c3b40aad174715&o=",
                "new_order": 0,
                "url_square60": "https://cf.bstatic.com/xdata/images/hotel/square60/490903473.jpg?k=0dd7cb792521f03fe1607da73c7f18dddfdc56bab03c523aa1c3b40aad174715&o="
            },
            {
                "ratio": 1.5,
                "url_original": "https://cf.bstatic.com/xdata/images/hotel/max500/490903453.jpg?k=35be9835bbeaa30f91ac32a75c655639dca8ff3b7ab88b0a1b49c3a47e97c0f7&o=",
                "new_order": 1,
                "url_square60": "https://cf.bstatic.com/xdata/images/hotel/square60/490903453.jpg?k=35be9835bbeaa30f91ac32a75c655639dca8ff3b7ab88b0a1b49c3a47e97c0f7&o=",
                "photo_id": 490903453,
                "last_update_date": "2023-09-07 09:43:27",
                "url_max300": "https://cf.bstatic.com/xdata/images/hotel/max300/490903453.jpg?k=35be9835bbeaa30f91ac32a75c655639dca8ff3b7ab88b0a1b49c3a47e97c0f7&o=",
                "url_640x200": "https://cf.bstatic.com/xdata/images/hotel/640x200/490903453.jpg?k=35be9835bbeaa30f91ac32a75c655639dca8ff3b7ab88b0a1b49c3a47e97c0f7&o="
            },
            {
                "last_update_date": "2023-09-07 09:43:36",
                "url_max300": "https://cf.bstatic.com/xdata/images/hotel/max300/490903502.jpg?k=dbdb6a40b7d5d1bbe717a03ca93a6e8e21b5c435815b7949669d5a85d8b0bf52&o=",
                "photo_id": 490903502,
                "url_640x200": "https://cf.bstatic.com/xdata/images/hotel/640x200/490903502.jpg?k=dbdb6a40b7d5d1bbe717a03ca93a6e8e21b5c435815b7949669d5a85d8b0bf52&o=",
                "ratio": 1.49890049477735,
                "new_order": 2,
                "url_original": "https://cf.bstatic.com/xdata/images/hotel/max500/490903502.jpg?k=dbdb6a40b7d5d1bbe717a03ca93a6e8e21b5c435815b7949669d5a85d8b0bf52&o=",
                "url_square60": "https://cf.bstatic.com/xdata/images/hotel/square60/490903502.jpg?k=dbdb6a40b7d5d1bbe717a03ca93a6e8e21b5c435815b7949669d5a85d8b0bf52&o="
            },
            {
                "url_640x200": "https://cf.bstatic.com/xdata/images/hotel/640x200/490902784.jpg?k=ad345ca3be7dd6dbda48dfaaab7d6b0569b548e0c4b7628bd986721005eed555&o=",
                "photo_id": 490902784,
                "url_max300": "https://cf.bstatic.com/xdata/images/hotel/max300/490902784.jpg?k=ad345ca3be7dd6dbda48dfaaab7d6b0569b548e0c4b7628bd986721005eed555&o=",
                "last_update_date": "2023-09-07 09:37:18",
                "url_square60": "https://cf.bstatic.com/xdata/images/hotel/square60/490902784.jpg?k=ad345ca3be7dd6dbda48dfaaab7d6b0569b548e0c4b7628bd986721005eed555&o=",
                "new_order": 3,
                "url_original": "https://cf.bstatic.com/xdata/images/hotel/max500/490902784.jpg?k=ad345ca3be7dd6dbda48dfaaab7d6b0569b548e0c4b7628bd986721005eed555&o=",
                "ratio": 1.50054854635217
            }
        ],
        "is_high_floor_guaranteed": 0
    },
    "111584117": {
        "highlights": [
            {
                "icon": "icon_wifi",
                "translated_name": "Free WiFi"
            },
            {
                "translated_name": "Sea view",
                "id": 108,
                "icon": "icon_viewed"
            },
            {
                "id": 109,
                "icon": "icon_viewed",
                "translated_name": "Lake view"
            },
            {
                "translated_name": "Landmark view",
                "id": 113,
                "icon": "icon_viewed"
            },
            {
                "translated_name": "City view",
                "id": 121,
                "icon": "icon_viewed"
            },
            {
                "translated_name": "Rooftop pool",
                "id": 157,
                "icon": "icon_checkmark"
            },
            {
                "icon": "icon_airconditioning",
                "id": 11,
                "translated_name": "Air conditioning"
            },
            {
                "id": 38,
                "icon": "icon_bath",
                "translated_name": "Ensuite bathroom"
            },
            {
                "translated_name": "Flat-screen TV",
                "icon": "icon_flattv",
                "id": 75
            }
        ],
        "private_bathroom_highlight": {
            "text": "Private bathroom with shower",
            "has_highlight": 1
        },
        "children_and_beds_text": {
            "children_at_the_property": [
                {
                    "highlight": 0,
                    "text": "Children of any age are welcome."
                },
                {
                    "highlight": 0,
                    "text": "Children aged 12 years and above are considered adults at this property."
                },
                {
                    "highlight": 1,
                    "text": "To see correct prices and occupancy information, please add the number of children in your group and their ages to your search."
                }
            ],
            "cribs_and_extra_beds": [
                {
                    "text": "There is no capacity for extra beds or cots.",
                    "highlight": 0
                }
            ],
            "age_intervals": [],
            "allow_children": 1
        },
        "description": "This double room features a rooftop pool. Featuring free toiletries, this double room includes a private bathroom with a walk-in shower, a bidet and a hairdryer. The spacious air-conditioned double room features a flat-screen TV with cable channels, a tea and coffee maker, a wardrobe, a safe deposit box as well as sea views. The unit has 2 beds.",
        "facilities": [
            {
                "alt_facilitytype_name": "General",
                "id": 6,
                "facilitytype_name": "Room Amenities",
                "facilitytype_id": 4,
                "name": "Safety deposit box",
                "alt_facilitytype_id": 1
            },
            {
                "facilitytype_name": "Outdoor & View",
                "name": "Sea view",
                "facilitytype_id": 9,
                "alt_facilitytype_id": 14,
                "alt_facilitytype_name": "View",
                "id": 108
            },
            {
                "name": "Lake view",
                "facilitytype_id": 9,
                "alt_facilitytype_id": 14,
                "facilitytype_name": "Outdoor & View",
                "id": 109,
                "alt_facilitytype_name": "View"
            },
            {
                "alt_facilitytype_name": "Accessibility",
                "id": 132,
                "facilitytype_name": "Accessibility",
                "alt_facilitytype_id": 19,
                "facilitytype_id": 19,
                "name": "Upper floors accessible by elevator"
            },
            {
                "id": 75,
                "alt_facilitytype_name": "Media & Technology",
                "alt_facilitytype_id": 6,
                "name": "Flat-screen TV",
                "facilitytype_id": 6,
                "facilitytype_name": "Media & Technology"
            },
            {
                "id": 83,
                "alt_facilitytype_name": "Services",
                "alt_facilitytype_id": 3,
                "facilitytype_id": 8,
                "name": "Wake-up service",
                "facilitytype_name": "Services & Extras"
            },
            {
                "id": 77,
                "alt_facilitytype_name": "Living Area",
                "alt_facilitytype_id": 15,
                "facilitytype_id": 4,
                "name": "Sofa",
                "facilitytype_name": "Room Amenities"
            },
            {
                "alt_facilitytype_name": "General",
                "id": 15,
                "facilitytype_name": "Room Amenities",
                "alt_facilitytype_id": 1,
                "facilitytype_id": 4,
                "name": "Iron"
            },
            {
                "facilitytype_name": "Services & Extras",
                "alt_facilitytype_id": 5,
                "facilitytype_id": 8,
                "name": "Towels",
                "alt_facilitytype_name": "Bathroom",
                "id": 124
            },
            {
                "alt_facilitytype_name": "General",
                "id": 25,
                "facilitytype_name": "Room Amenities",
                "alt_facilitytype_id": 1,
                "facilitytype_id": 4,
                "name": "Ironing facilities"
            },
            {
                "alt_facilitytype_id": 5,
                "facilitytype_id": 5,
                "name": "Free toiletries",
                "facilitytype_name": "Bathroom",
                "id": 27,
                "alt_facilitytype_name": "Bathroom"
            },
            {
                "alt_facilitytype_name": "Room Amenities",
                "id": 184,
                "facilitytype_name": "Room Amenities",
                "alt_facilitytype_id": 4,
                "facilitytype_id": 4,
                "name": "Socket near the bed"
            },
            {
                "facilitytype_name": "Food & Drink",
                "name": "Tea/Coffee maker",
                "facilitytype_id": 7,
                "alt_facilitytype_id": 7,
                "alt_facilitytype_name": "Food & Drink",
                "id": 1
            },
            {
                "alt_facilitytype_name": "Bathroom",
                "id": 12,
                "facilitytype_name": "Bathroom",
                "alt_facilitytype_id": 5,
                "name": "Hairdryer",
                "facilitytype_id": 5
            },
            {
                "alt_facilitytype_id": 5,
                "facilitytype_id": 8,
                "name": "Towels/sheets (extra fee)",
                "facilitytype_name": "Services & Extras",
                "id": 91,
                "alt_facilitytype_name": "Bathroom"
            },
            {
                "facilitytype_name": "Media & Technology",
                "facilitytype_id": 6,
                "name": "TV",
                "alt_facilitytype_id": 6,
                "alt_facilitytype_name": "Media & Technology",
                "id": 8
            },
            {
                "facilitytype_id": 4,
                "name": "Hypoallergenic",
                "alt_facilitytype_id": 1,
                "facilitytype_name": "Room Amenities",
                "id": 115,
                "alt_facilitytype_name": "General"
            },
            {
                "alt_facilitytype_name": "Bedroom",
                "id": 125,
                "facilitytype_name": "Services & Extras",
                "name": "Linen",
                "facilitytype_id": 8,
                "alt_facilitytype_id": 17
            },
            {
                "facilitytype_name": "Outdoor & View",
                "alt_facilitytype_id": 14,
                "name": "City view",
                "facilitytype_id": 9,
                "alt_facilitytype_name": "View",
                "id": 121
            },
            {
                "alt_facilitytype_name": "General",
                "id": 18,
                "facilitytype_name": "Room Amenities",
                "alt_facilitytype_id": 1,
                "facilitytype_id": 4,
                "name": "Pants press"
            },
            {
                "facilitytype_name": "Bathroom",
                "name": "Toilet",
                "facilitytype_id": 5,
                "alt_facilitytype_id": 5,
                "alt_facilitytype_name": "Bathroom",
                "id": 31
            },
            {
                "name": "Electric kettle",
                "facilitytype_id": 7,
                "alt_facilitytype_id": 12,
                "facilitytype_name": "Food & Drink",
                "id": 86,
                "alt_facilitytype_name": "Kitchen"
            },
            {
                "id": 113,
                "alt_facilitytype_name": "View",
                "alt_facilitytype_id": 14,
                "name": "Landmark view",
                "facilitytype_id": 9,
                "facilitytype_name": "Outdoor & View"
            },
            {
                "alt_facilitytype_name": "Physical distancing",
                "id": 230,
                "facilitytype_name": "Physical distancing",
                "name": "Single-room air conditioning for guest accommodation",
                "facilitytype_id": 39,
                "alt_facilitytype_id": 39
            },
            {
                "alt_facilitytype_name": "Media & Technology",
                "id": 9,
                "facilitytype_name": "Media & Technology",
                "alt_facilitytype_id": 6,
                "facilitytype_id": 6,
                "name": "Telephone"
            },
            {
                "facilitytype_name": "Bathroom",
                "name": "Shower",
                "facilitytype_id": 5,
                "alt_facilitytype_id": 5,
                "alt_facilitytype_name": "Bathroom",
                "id": 4
            },
            {
                "alt_facilitytype_name": "Kitchen",
                "id": 94,
                "facilitytype_name": "Room Amenities",
                "alt_facilitytype_id": 12,
                "name": "Tumble dryer",
                "facilitytype_id": 4
            },
            {
                "alt_facilitytype_name": "Bathroom",
                "id": 100,
                "facilitytype_name": "Bathroom",
                "facilitytype_id": 5,
                "name": "Bidet",
                "alt_facilitytype_id": 5
            },
            {
                "alt_facilitytype_id": 6,
                "name": "Cable channels",
                "facilitytype_id": 6,
                "facilitytype_name": "Media & Technology",
                "id": 68,
                "alt_facilitytype_name": "Media & Technology"
            },
            {
                "id": 95,
                "alt_facilitytype_name": "Bedroom",
                "name": "Wardrobe or closet",
                "facilitytype_id": 4,
                "alt_facilitytype_id": 17,
                "facilitytype_name": "Room Amenities"
            },
            {
                "alt_facilitytype_id": 12,
                "name": "Cleaning products",
                "facilitytype_id": 4,
                "facilitytype_name": "Room Amenities",
                "id": 116,
                "alt_facilitytype_name": "Kitchen"
            },
            {
                "alt_facilitytype_id": 5,
                "name": "Toilet paper",
                "facilitytype_id": 5,
                "facilitytype_name": "Bathroom",
                "id": 141,
                "alt_facilitytype_name": "Bathroom"
            },
            {
                "id": 44,
                "alt_facilitytype_name": "Media & Technology",
                "name": "Satellite channels",
                "facilitytype_id": 6,
                "alt_facilitytype_id": 6,
                "facilitytype_name": "Media & Technology"
            },
            {
                "id": 11,
                "alt_facilitytype_name": "General",
                "name": "Air conditioning",
                "facilitytype_id": 4,
                "alt_facilitytype_id": 1,
                "facilitytype_name": "Room Amenities"
            },
            {
                "alt_facilitytype_id": 40,
                "name": "Hand sanitiser",
                "facilitytype_id": 40,
                "facilitytype_name": "Cleanliness & disinfecting",
                "id": 231,
                "alt_facilitytype_name": "Cleanliness & disinfecting"
            },
            {
                "facilitytype_id": 5,
                "name": "Private bathroom",
                "alt_facilitytype_id": 5,
                "facilitytype_name": "Bathroom",
                "id": 38,
                "alt_facilitytype_name": "Bathroom"
            }
        ],
        "private_bathroom_count": 0,
        "bed_configurations": [
            {
                "bed_types": [
                    {
                        "description_localized": null,
                        "name_with_count": "1 extra-large double bed",
                        "description": "181-210 cm wide",
                        "bed_type": 3,
                        "description_imperial": "71-82 inches wide",
                        "name": "Extra-large double bed(s)",
                        "count": 1
                    },
                    {
                        "description_imperial": "variable size",
                        "bed_type": 5,
                        "description": "variable size",
                        "name_with_count": "1 sofa bed",
                        "count": 1,
                        "name": "",
                        "description_localized": null
                    }
                ]
            }
        ],
        "photos": [
            {
                "ratio": 1.50027427317608,
                "url_square60": "https://cf.bstatic.com/xdata/images/hotel/square60/490904729.jpg?k=d5a10d18e0d4b1291ba5d08a5b96cf45eb47fe29dab8dd9f6dbe74f4e0a00ee6&o=",
                "url_original": "https://cf.bstatic.com/xdata/images/hotel/max500/490904729.jpg?k=d5a10d18e0d4b1291ba5d08a5b96cf45eb47fe29dab8dd9f6dbe74f4e0a00ee6&o=",
                "new_order": 0,
                "photo_id": 490904729,
                "url_max300": "https://cf.bstatic.com/xdata/images/hotel/max300/490904729.jpg?k=d5a10d18e0d4b1291ba5d08a5b96cf45eb47fe29dab8dd9f6dbe74f4e0a00ee6&o=",
                "last_update_date": "2023-09-07 09:51:19",
                "url_640x200": "https://cf.bstatic.com/xdata/images/hotel/640x200/490904729.jpg?k=d5a10d18e0d4b1291ba5d08a5b96cf45eb47fe29dab8dd9f6dbe74f4e0a00ee6&o="
            },
            {
                "ratio": 1.49986282578875,
                "new_order": 1,
                "url_original": "https://cf.bstatic.com/xdata/images/hotel/max500/490904759.jpg?k=6f2e07b4071a79450e1693e20066ec20ec1e6dfca65bd21017d54886aa5bde7b&o=",
                "url_square60": "https://cf.bstatic.com/xdata/images/hotel/square60/490904759.jpg?k=6f2e07b4071a79450e1693e20066ec20ec1e6dfca65bd21017d54886aa5bde7b&o=",
                "last_update_date": "2023-09-07 09:51:36",
                "url_max300": "https://cf.bstatic.com/xdata/images/hotel/max300/490904759.jpg?k=6f2e07b4071a79450e1693e20066ec20ec1e6dfca65bd21017d54886aa5bde7b&o=",
                "photo_id": 490904759,
                "url_640x200": "https://cf.bstatic.com/xdata/images/hotel/640x200/490904759.jpg?k=6f2e07b4071a79450e1693e20066ec20ec1e6dfca65bd21017d54886aa5bde7b&o="
            },
            {
                "new_order": 2,
                "url_original": "https://cf.bstatic.com/xdata/images/hotel/max500/490904780.jpg?k=0f724e22c21867dc0b641bf248e52b1f1ccaae31a8bb4cd6c364b4129eee1be4&o=",
                "url_square60": "https://cf.bstatic.com/xdata/images/hotel/square60/490904780.jpg?k=0f724e22c21867dc0b641bf248e52b1f1ccaae31a8bb4cd6c364b4129eee1be4&o=",
                "ratio": 1.49958847736626,
                "url_640x200": "https://cf.bstatic.com/xdata/images/hotel/640x200/490904780.jpg?k=0f724e22c21867dc0b641bf248e52b1f1ccaae31a8bb4cd6c364b4129eee1be4&o=",
                "last_update_date": "2023-09-07 09:51:52",
                "url_max300": "https://cf.bstatic.com/xdata/images/hotel/max300/490904780.jpg?k=0f724e22c21867dc0b641bf248e52b1f1ccaae31a8bb4cd6c364b4129eee1be4&o=",
                "photo_id": 490904780
            },
            {
                "url_square60": "https://cf.bstatic.com/xdata/images/hotel/square60/490904777.jpg?k=39935e91952ed5a8530855541d508fec17fef01832b9d7087d2c411c79b0a4e4&o=",
                "url_original": "https://cf.bstatic.com/xdata/images/hotel/max500/490904777.jpg?k=39935e91952ed5a8530855541d508fec17fef01832b9d7087d2c411c79b0a4e4&o=",
                "new_order": 3,
                "ratio": 1.49986290101453,
                "url_640x200": "https://cf.bstatic.com/xdata/images/hotel/640x200/490904777.jpg?k=39935e91952ed5a8530855541d508fec17fef01832b9d7087d2c411c79b0a4e4&o=",
                "photo_id": 490904777,
                "url_max300": "https://cf.bstatic.com/xdata/images/hotel/max300/490904777.jpg?k=39935e91952ed5a8530855541d508fec17fef01832b9d7087d2c411c79b0a4e4&o=",
                "last_update_date": "2023-09-07 09:51:49"
            },
            {
                "url_original": "https://cf.bstatic.com/xdata/images/hotel/max500/490904772.jpg?k=9dda10dca0b97c7138136f8ad0887fc7ddd17aced6ef196232b01f7bfb02132b&o=",
                "new_order": 4,
                "url_square60": "https://cf.bstatic.com/xdata/images/hotel/square60/490904772.jpg?k=9dda10dca0b97c7138136f8ad0887fc7ddd17aced6ef196232b01f7bfb02132b&o=",
                "ratio": 1.49986290101453,
                "url_640x200": "https://cf.bstatic.com/xdata/images/hotel/640x200/490904772.jpg?k=9dda10dca0b97c7138136f8ad0887fc7ddd17aced6ef196232b01f7bfb02132b&o=",
                "photo_id": 490904772,
                "last_update_date": "2023-09-07 09:51:46",
                "url_max300": "https://cf.bstatic.com/xdata/images/hotel/max300/490904772.jpg?k=9dda10dca0b97c7138136f8ad0887fc7ddd17aced6ef196232b01f7bfb02132b&o="
            }
        ],
        "is_high_floor_guaranteed": 0
    }
};
    return data ;
} catch (error) {
	console.error(error);
}
}