import { v4 as uuid_v4 } from "uuid";

export const Songs = [{

        title: "Recently Played",
        list: [{
                song: "Liggi",

                id: uuid_v4(),
                singer: "Ritviz",
                image: "https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/main/img_db/Recently%20Played/ligi.jpg",

                songsLst: [{
                    id: "1",
                    songName: "Liggi",
                    singerName: "Ritviz",
                    duration: "3:01"
                }]
            },
            // {
            //     song: "Rang Lageya",
            // id: uuid_v4(),
            //     singer: "Mohit Chauhan",
            //     image: "https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/main/img_db/Recently%20Played/RangLageya.jpg",
            //     songsLst: [{
            //         id: "1",
            //         songName: "Rang Lageya",
            //         singerName: "Mohit Chauhan",
            //         duration: "3:47",
            //     }]

            // },
            {
                song: "Jab We Met",
                id: uuid_v4(),
                singer: "Pritam, Sandesh Shandilya",
                image: "https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/main/img_db/Recently%20Played/met.jpg",
                songsLst: [{
                    id: "1",
                    songName: "Rang Lageya",
                    singerName: "Mohit Chauhan",
                    duration: "3:47",
                }]

            },
            {
                song: "Raba Mehar Kari",
                id: uuid_v4(),
                singer: "Darshan Raval",
                image: "https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/main/img_db/Recently%20Played/RabaMeharKari.jpg",
                songsLst: [{
                    id: "1",
                    songName: "Aoge Jab Tum",
                    singerName: "Rashid Khan",
                    duration: "5:55",
                }, {
                    id: "2",
                    songName: "Tum Se Hi",
                    singerName: "Pritam, Mohit Chauhan",
                    duration: "5:21",
                }, {
                    id: "3",
                    songName: "Ye Ishq Hai ",
                    singerName: "Pritam, Shreya Goshal",
                    duration: "4:40",
                }]

            },
            {
                song: "Agent Vinod",
                id: uuid_v4(),
                singer: "Pritam",
                image: "https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/main/img_db/Recently%20Played/Raaabta.jpg",
                songsLst: [{
                    id: "1",
                    songName: "I'll DO THe Talking Tonight",
                    singerName: "Pritam,Neeraj Shridhar",
                    duration: "4:15",
                }, {
                    id: "2",
                    songName: "Raabta",
                    singerName: "Pritam, Arijit Singh",
                    duration: "4:03",
                }, {
                    id: "3",
                    songName: "Raabta(Kehte Hain Kudha Ne)",
                    singerName: "Pritam, Shreya Goshal",
                    duration: "4:49",
                }, {
                    id: "4",
                    songName: "Pungi",
                    singerName: "Pritam,Mikka Singh",
                    duration: "4:07",
                }]
            },
            {
                song: "Kesari",
                id: uuid_v4(),
                singer: "Various Artist",
                duration: "5:13",
                image: "https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/main/img_db/Recently%20Played/Kesari.jpg",
                songsLst: [{
                    id: "1",
                    songName: "EK Onkaar",
                    singerName: "Jasbir Jassi",
                    duration: "1:02",
                }, {
                    id: "2",
                    songName: "Ve Maahi",
                    singerName: "Arijit Singh, Asees Kaur",
                    duration: "3:43",
                }, {
                    id: "3",
                    songName: "Teri Miti",
                    singerName: "Arko, B praak",
                    duration: "5:13",
                }, {
                    id: "4",
                    songName: "Sanu Kehndi",
                    singerName: "Tanishk Bagchi,Romy",
                    duration: "2:47",
                }, {
                    id: "5",
                    songName: "Ajj Singh Garjega",
                    singerName: "Jazzy B",
                    duration: "4:02",
                }, {
                    id: "6",
                    songName: "Deh Shiva(Male Version)",
                    singerName: "Sukwinder Singh",
                    duration: "3:11",
                }, {
                    id: "7",
                    songName: "Deh Shiva(Female Version)",
                    singerName: "Jasleen Royal",
                    duration: "2:35",
                }, {
                    id: "8",
                    songName: "Ajj Singh Garjega",
                    singerName: "Jazzy B",
                    duration: "4:02",
                }, {
                    id: "9",
                    songName: "Deh Shiva(Male Version)",
                    singerName: "Sukwinder Singh",
                    duration: "3:11",
                }, {
                    id: "10",
                    songName: "Deh Shiva(Female Version)",
                    singerName: "Jasleen Royal",
                    duration: "2:35",
                }, {
                    id: "11",
                    songName: "Ajj Singh Garjega",
                    singerName: "Jazzy B",
                    duration: "4:02",
                }, {
                    id: "12",
                    songName: "Deh Shiva(Male Version)",
                    singerName: "Sukwinder Singh",
                    duration: "3:11",
                }, {
                    id: "13",
                    songName: "Deh Shiva(Female Version)",
                    singerName: "Jasleen Royal",
                    duration: "2:35",
                }]
            }
        ]
    }, {
        title: "Made For You",
        list: [{
                song: "100 Ways",
                id: uuid_v4(),
                singer: "Jackson Wang",
                image: "https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/main/img_db/MadeForYou/100ways.jpg",
                songsLst: [{
                    id: "1",
                    songName: "100 Ways",
                    singerName: "Jackson Wang",
                    duration: "2:48",
                }]
            }, {
                song: "Before You GO",
                id: uuid_v4(),
                singer: "Lewis Capaldi",
                image: "https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/main/img_db/MadeForYou/BeforeYouGo.jpg",
                songsLst: [{
                    id: "1",
                    songName: "Before You Go",
                    singerName: "Lewis Capaldi",
                    duration: "3:35",
                }]
            },
            {
                song: "Changes",
                id: uuid_v4(),
                singer: "XXXTENTAICON",
                image: "https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/main/img_db/MadeForYou/Changes.jpg",
                songsLst: [{
                    id: "1",
                    songName: "Changes",
                    singerName: "XXXTENTAICON",
                    duration: "2:01",
                }]
            },
            {
                song: "Higher Power",
                id: uuid_v4(),
                singer: "Coldplay",
                image: "https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/main/img_db/MadeForYou/HighPower.jpg",
                songsLst: [{
                    id: "1",
                    songName: "High Power",
                    singerName: "Coldplay",
                    duration: "2:44",
                }]
            },
            {
                song: "Unstoppable",
                id: uuid_v4(),
                singer: "Dino James",
                image: "https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/main/img_db/MadeForYou/Unstoppable.jpg",
                songsLst: [{
                    id: "1",
                    songName: "Unstoppable",
                    singerName: "Dino James",
                    duration: "4:39",
                }]
            }
        ]
    }, {
        title: "More From Darshan Raval",
        list: [{
                song: "Barish",
                id: uuid_v4(),
                singer: "Darshan Raval",
                image: "https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone//main/img_db/More%20From%20Darshan%20Raval/Abphirsejbbaarishhogi.jpg",
                songsLst: [{
                    id: "1",
                    songName: "Barish",
                    singerName: "Darshan Raval",
                    duration: "2:51",
                }]
            }, {
                song: "Bhula Dunga",
                id: uuid_v4(),
                singer: "Darshan Raval",
                image: "https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/main/img_db/More%20From%20Darshan%20Raval/Bhuladunga.jpg",
                songsLst: [{
                    id: "1",
                    songName: "Bhula Dunga",
                    singerName: "Darshan Raval",
                    duration: "3:06",
                }]
            },
            {
                song: "Hawa Banke",
                id: uuid_v4(),
                singer: "Darshan Raval",
                image: "https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/main/img_db/More%20From%20Darshan%20Raval/HawaBanke.jpg",
                songsLst: [{
                    id: "1",
                    songName: "Hawa Banke",
                    singerName: "Darshan Raval",
                    duration: "3:50",
                }]
            },
            {
                song: "Kaash Aisa Hota",
                id: uuid_v4(),
                singer: "Darshan Raval",
                image: "https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/main/img_db/More%20From%20Darshan%20Raval/KaashAisaHota.jpg",
                songsLst: [{
                    id: "1",
                    songName: "Kaash Aisa Hota",
                    singerName: "Darshan Raval",
                    duration: "3:02",
                }]
            },
            {
                song: "Ek Tarfa",
                id: uuid_v4(),
                singer: "Darshan Raval",
                image: "https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/main/img_db/More%20From%20Darshan%20Raval/ek-tarfa.jpg",
                songsLst: [{
                    id: "1",
                    songName: "Ek Tarfa",
                    singerName: "Darshan Raval",
                    duration: "3:54",
                }]
            }
        ]
    },
    {
        title: "Popular Band",
        list: [{
            song: "One Direction",
            id: uuid_v4(),
            singer: "Various Artist",
            image: "https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone//main/img_db/Popular%20Band/oneDirection.jpg",
            songsLst: [{
                id: "1",
                songName: "Barish",
                singerName: "Darshan Raval",
                duration: "2:51",
            }]
        }]
    },
    {
        title: "You Might Like",
        list: [{
                song: "Tamasha",
                id: uuid_v4(),
                singer: "A.R Rahman",
                image: "https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone//main/img_db/you%20might%20like/AgarTumSaat.jpg",
                songsLst: [{
                    id: "1",
                    songName: "Agar Tum Saath Ho",
                    singerName: "Alka Yagnik, Arijit Singh",
                    duration: "5:41",
                }, {
                    id: "2",
                    songName: "Matargashti",
                    singerName: "Mohit Chauhan",
                    duration: "5:28",
                }, {
                    id: "3",
                    songName: "Chali Kajani",
                    singerName: "Sukhwinder Singh",
                    duration: "5:19",
                }, {
                    id: "4",
                    songName: "Safarnama",
                    singerName: "Lucky Ali",
                    duration: "4:11",
                }]
            }, {
                song: "Ghajni",
                id: uuid_v4(),
                singer: "A. R. Rahman",
                image: "https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/main/img_db/you%20might%20like/Guzarish.jpg",
                songsLst: [{
                    id: "1",
                    songName: "Kaise Mujhe",
                    singerName: "Shreya Ghoshal, Benny Dayal",
                    duration: "3:46",
                }, {
                    id: "2",
                    songName: "Guzarish",
                    singerName: "Javed Ali,Sonu Nigam",
                    duration: "4:28",
                }]
            },
            {
                song: "Om Shanti Om",
                id: uuid_v4(),
                singer: "Various Artist",
                image: "https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/main/img_db/you%20might%20like/Main%20agar%20kahoon.jpg",
                songsLst: [{
                    id: "1",
                    songName: "Main Agar Kahoon",
                    singerName: "Sonu Nigam, Shreya Ghoshal",
                    duration: "5:08",
                }, {
                    id: "2",
                    songName: "Aankhon Mein Teri",
                    singerName: "K.K.",
                    duration: "4:01",
                }, {
                    id: "3",
                    songName: "Jag Soona Soona Lage",
                    singerName: "Rahat Fateh Ali Khan",
                    duration: "5:29",
                }]
            },
            {
                song: "Kabir Singh",
                id: uuid_v4(),
                singer: "Various Artists",
                image: "https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/main/img_db/you%20might%20like/kaise%20hua.jpg",
                songsLst: [{
                    id: "1",
                    songName: "Bekhayali",
                    singerName: "Sachet Tandon",
                    duration: "6:12",
                }, {
                    id: "2",
                    songName: "Tujhe Kitna Chane Laaga",
                    singerName: "Arijit Singh",
                    duration: "4:45",
                }, {
                    id: "3",
                    songName: "Tera Ban Jaunga",
                    singerName: "Akhil Sachdeva, Tulsi Kumar",
                    duration: "3:56",
                }]
            },
            {
                song: "Main Bola Hey!",
                id: uuid_v4(),
                singer: "Karthik Rao",
                image: "https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/main/img_db/you%20might%20like/wo%20boli%20hey.jpg",
                songsLst: [{
                    id: "1",
                    songName: "Main Bola Hey!",
                    singerName: "Karthik Rao",
                    duration: "2:33",
                }]
            }
        ]
    },

    {
        title: "Podcast",
        list: [{
                song: "The Sadhguru Podcast",
                id: uuid_v4(),
                singer: "",
                image: "https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone//main/img_db/podcast/sadhguru.jpg",
                songsLst: [{
                    id: "1",
                    songName: "Nigt Owl or Early Bird",
                    singerName: "SadhGuru",
                    duration: "15:41",
                }, {
                    id: "2",
                    songName: "Head or Heart",
                    singerName: "sadhGuru",
                    duration: "13:20",
                }]
            }, {
                song: "The History of India",
                id: uuid_v4(),
                singer: "",
                image: "https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/main/img_db/podcast/India.jpg",
                songsLst: [{
                    id: "1",
                    songName: "The King",
                    singerName: "",
                    duration: "12:41",
                }, {
                    id: "2",
                    songName: "Mishap",
                    singerName: "",
                    duration: "15:28",
                }, {
                    id: "3",
                    songName: "Empire",
                    singerName: "",
                    duration: "5:19",
                }]
            },
            {
                song: "The Musafir Stories",
                id: uuid_v4(),
                singer: "",
                image: "https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/main/img_db/podcast/Musafir.jpg",
                songsLst: [{
                    id: "1",
                    songName: "Toy Train to Shimla",
                    singerName: "Saif, Faiza, amp",
                    duration: "45:41",
                }, {
                    id: "2",
                    songName: "Cycling Across India",
                    singerName: "Saif, Faiza, amp",
                    duration: "25:28",
                }]
            },
            {
                song: "Podcast Junkies",
                id: uuid_v4(),
                singer: "",
                image: "https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/main/img_db/podcast/junkies.jpg",
                songsLst: [{
                    id: "1",
                    songName: "Don't Be Affraid",
                    singerName: "",
                    duration: "7:41",
                }]
            },
            {
                song: "7 Good Minutes Daily",
                id: uuid_v4(),
                singer: "",
                image: "https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/main/img_db/podcast/7minutes.jpg",
                songsLst: [{
                    id: "1",
                    songName: "Overcoming Fear",
                    singerName: "",
                    duration: "7:11",
                }]
            }
        ]
    }, {
        title: "90s Hit",
        list: [{
                song: "Pehla Nasha",
                id: uuid_v4(),
                singer: "Udit Narayan",
                image: "https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone//main/img_db/90s%20hit/pehlanasha.jpg",
                songsLst: [{
                    id: "1",
                    songName: "Pehla Nasha",
                    singerName: "Udit Narayan",
                    duration: "4:41",
                }]
            }, {
                song: "Dil Chata Hai",
                id: uuid_v4(),
                singer: "Shankar, Eshan-Loy",
                image: "https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/main/img_db/90s%20hit/wohldkihaikahan.jpg",
                songsLst: [{
                    id: "1",
                    songName: "Dil Chata Hai",
                    singerName: "Shankar, Eshan-Loy",
                    duration: "3:06",
                }]
            },
            {
                song: "Humko Humise Chura Lo",
                id: uuid_v4(),
                singer: "Lata Mangeshkar, Udit Narayan",
                image: "https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/main/img_db/90s%20hit/HumkoHUmiSeChuraLO.jpg",
                songsLst: [{
                    id: "1",
                    songName: "Humko Humise Chura Lo",
                    singerName: "Lata Mangeshkar, Udit Narayan",
                    duration: "4:50",
                }]
            },
            {
                song: "Tujhe Dekha Toh",
                id: uuid_v4(),
                singer: "Lata Mangeshkar, Kumar Sanu",
                image: "https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/main/img_db/90s%20hit/tujheDekhaTOh.jpg",
                songsLst: [{
                    id: "1",
                    songName: "Tujhe Dekha Toh",
                    singerName: "Lata Mangeshkar, Kumar Sanu",
                    duration: "5:02",
                }]
            },
            {
                song: "Tadap Tadap",
                id: uuid_v4(),
                singer: "KK, Dominique",
                duration: "6:37",
                image: "https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/main/img_db/90s%20hit/chaandchupa.jpg",
                songsLst: [{
                    id: "1",
                    songName: "Tadap Tadap",
                    singerName: "KK, Dominique",
                    duration: "6:37",
                }]

            }
        ]
    }
]