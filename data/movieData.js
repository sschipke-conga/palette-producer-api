const movieData = [
    {
      "id": 5822,
      "video": false,
      "vote_count": 55,
      "vote_average": 5.3,
      "title": "Sweet Sweetback's Baadasssss Song",
      "release_date": "1971-04-23",
      "original_language": "en",
      "original_title": "Sweet Sweetback's Baadasssss Song",
      "genre_ids": [
        28,
        80,
        18
      ],
      "backdrop_path": "/rfWjk3uWIQ0tdWudbtOAveDiFAr.jpg",
      "adult": false,
      "overview": "After saving a Black Panther from some racist cops, a black male prostitute goes on the run from \"the man\" with the help of the ghetto community and some disillusioned Hells Angels.",
      "poster_path": "/mHTHMwFFSIqTkzMu8tUUzpWiJ6w.jpg",
      "popularity": 6.496
    },
    {
      "adult": false,
      "backdrop_path": "/l01IA7vplyeci8h6sNkOGf9CCRF.jpg",
      "genre_ids": [
        28,
        80,
        53
      ],
      "id": 482,
      "original_language": "en",
      "original_title": "Shaft",
      "overview": "Cool black private eye John Shaft is hired by a crime lord to find and retrieve his kidnapped daughter.",
      "poster_path": "/yJChPuu2V339IiDPQDHeIh1SYpA.jpg",
      "release_date": "1971-06-25",
      "title": "Shaft",
      "video": false,
      "vote_average": 6.5,
      "vote_count": 201,
      "popularity": 9.642
    },
    {
      "adult": false,
      "backdrop_path": "/468tPHO5kZY6V1ceWxMKXrGMQy4.jpg",
      "genre_ids": [
        28,
        80,
        18,
        10402,
        53
      ],
      "id": 21968,
      "original_language": "en",
      "original_title": "Super Fly",
      "overview": "Super Fly is a cocaine dealer who begins to realize that his life will soon end with either prison or his death. He decides to build an escape from the life by making his biggest deal yet.",
      "poster_path": "/nFAD8tGmQ5jDUoOhXXFkUW1Q7z1.jpg",
      "release_date": "1972-08-04",
      "title": "Super Fly",
      "video": false,
      "vote_average": 6.5,
      "vote_count": 82,
      "popularity": 5.591
    },
    {
      "adult": false,
      "backdrop_path": "/ApVd7q1l4xZOkFkh2tkawICBE4I.jpg",
      "genre_ids": [
        35
      ],
      "id": 73823,
      "original_language": "en",
      "original_title": "Sidewalk Stories",
      "overview": "A street artist (Charles Lane) rescues a baby girl (Nicole Alysia) after her father is murdered. The artist then sets off to find the mother, but has to first learn how to care for the child. Ultimately he ends up in a horse drawn chase of the murderers.",
      "poster_path": "/8Lc4h2WEf6cTgrl9oUOYG9ed9nA.jpg",
      "release_date": "1989-09-15",
      "title": "Sidewalk Stories",
      "video": false,
      "vote_average": 7.6,
      "vote_count": 7,
      "popularity": 2.996
    },
    {
      "adult": false,
      "backdrop_path": "/5pIh97vJoD3aA4DU68VwMi8eaY9.jpg",
      "genre_ids": [
        18,
        35
      ],
      "id": 114750,
      "original_language": "en",
      "original_title": "Dear White People",
      "overview": "Four black students attend an Ivy League college where a riot breaks out over an “African-American” themed party thrown by white students. With tongue planted firmly in cheek, the film explores racial identity in 'post-racial' America while weaving a story about forging one's unique path in the world.",
      "poster_path": "/jH3851P2DjjnBsrjphbR1CWRzm6.jpg",
      "release_date": "2014-10-17",
      "title": "Dear White People",
      "video": false,
      "vote_average": 6.2,
      "vote_count": 350,
      "popularity": 9.782
    },
    {
      "adult": false,
      "backdrop_path": "/pyCspB4drqIYJcum8MgiYxnGd6x.jpg",
      "genre_ids": [
        80,
        18,
        35
      ],
      "original_language": "en",
      "original_title": "Dope",
      "poster_path": "/n6u00imN7AX2NiyWUc5kTgHXmEf.jpg",
      "vote_count": 1113,
      "title": "Dope",
      "vote_average": 7.1,
      "video": false,
      "overview": "Malcolm is carefully surviving life in a tough neighborhood in Los Angeles while juggling college applications, academic interviews, and the SAT. A chance invitation to an underground party leads him into an adventure that could allow him to go from being a geek, to being dope, to ultimately being himself.",
      "release_date": "2015-06-19",
      "id": 308639,
      "popularity": 11.483
    },
    {
      "id": 11066,
      "video": false,
      "vote_count": 349,
      "vote_average": 5.5,
      "title": "Boomerang",
      "release_date": "1992-06-30",
      "original_language": "en",
      "original_title": "Boomerang",
      "genre_ids": [
        35,
        10749
      ],
      "backdrop_path": "/rNulkgxFcmlgre3G8S7ABegzPVm.jpg",
      "adult": false,
      "overview": "Marcus is a successful advertising executive who woos and beds women almost at will. After a company merger he finds that his new boss, the ravishing Jacqueline, is treating him in exactly the same way. Completely traumatised by this, his work goes badly downhill.",
      "poster_path": "/cc9YAZq5NXiIEJsHjW7p2FaHQkp.jpg",
      "popularity": 13.214
    },
    {
      "adult": false,
      "backdrop_path": "/tjjWBMfTkKxL227nBQALjyz9sc1.jpg",
      "genre_ids": [
        99
      ],
      "id": 89585,
      "original_language": "en",
      "original_title": "Chisholm '72: Unbought & Unbossed",
      "overview": "In 1968, Shirley Chisholm becomes the first black woman elected to Congress. In 1972, she becomes the first black woman to run for president. Shunned by the political establishment, she's supported by a motley crew of blacks, feminists, and young voters. Their campaign-trail adventures are frenzied, fierce and fundamentally right on!",
      "poster_path": "/2AzPwr7B0ipJeU6y4THGxs0UZVv.jpg",
      "release_date": "2004-01-14",
      "title": "Chisholm '72: Unbought & Unbossed",
      "video": false,
      "vote_average": 8.6,
      "vote_count": 8,
      "popularity": 3.804
    },
    {
      "id": 450875,
      "video": false,
      "vote_count": 66,
      "vote_average": 7.9,
      "title": "LA 92",
      "release_date": "2017-04-28",
      "original_language": "en",
      "original_title": "LA 92",
      "genre_ids": [
        99,
        36
      ],
      "backdrop_path": "/lj79NEheTtAqHXjNvWaIPjd7ERe.jpg",
      "adult": false,
      "overview": "Twenty-five years after the verdict in the Rodney King trial sparked several days of protests, violence and looting in Los Angeles, LA 92 immerses viewers in that tumultuous period through stunning and rarely seen archival footage.",
      "poster_path": "/oT7OmkAoVnYDa8XbGipCEj6PVmN.jpg",
      "popularity": 8.248
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        99
      ],
      "id": 368928,
      "original_language": "en",
      "original_title": "And When I Die, I Won't Stay Dead",
      "overview": "A journey into the life and work of beat poet and activist Bob Kaufman and his insistence that poetry is fundamental to humanity's moral survival.",
      "poster_path": null,
      "release_date": "2015-10-23",
      "title": "And When I Die, I Won't Stay Dead",
      "video": false,
      "vote_average": 5.7,
      "vote_count": 3,
      "popularity": 1.298
    },
    {
      "id": 500859,
      "video": false,
      "vote_count": 10,
      "vote_average": 6.6,
      "title": "Black Mother",
      "release_date": "2018-11-02",
      "original_language": "en",
      "original_title": "Black Mother",
      "genre_ids": [
        99
      ],
      "backdrop_path": "/qVWe0wlbea2G3Z8kSM06MMYTWyU.jpg",
      "adult": false,
      "overview": "Part film, part baptism, in BLACK MOTHER director Khalik Allah brings us on a spiritual journey through Jamaica. Soaking up its bustling metropolises and tranquil countryside, Allah introduces us to a succession of vividly rendered souls who call this island home. Their candid testimonies create a polyphonic symphony, set against a visual prayer of indelible portraiture. Thoroughly immersed between the sacred and profane, BLACK MOTHER channels rebellion and reverence into a deeply personal ode informed by Jamaica’s turbulent history but existing in the urgent present.",
      "poster_path": "/6lD2qZWM7CKxlcme6YDmdXJw4UV.jpg",
      "popularity": 5.341
    },
    {
      "id": 319089,
      "video": false,
      "vote_count": 44,
      "vote_average": 7.2,
      "title": "The Black Panthers: Vanguard of the Revolution",
      "release_date": "2015-03-08",
      "original_language": "en",
      "original_title": "The Black Panthers: Vanguard of the Revolution",
      "genre_ids": [
        99
      ],
      "backdrop_path": null,
      "adult": false,
      "overview": "The story of the Black Panthers is often told in a scatter of repackaged parts, often depicting tragic, mythic accounts of violence and criminal activity; but this is an essential story, vibrant, human; a living and breathing chronicle of a pivotal movement that birthed a new revolutionary culture in America.",
      "poster_path": "/uw0zW1jlC9Yf3rK0KFkKx9iEFYm.jpg",
      "popularity": 5.924
    },
    {
      "id": 121983,
      "video": false,
      "vote_count": 21,
      "vote_average": 7.3,
      "title": "Free Angela and All Political Prisoners",
      "release_date": "2012-09-09",
      "original_language": "en",
      "original_title": "Free Angela and All Political Prisoners",
      "genre_ids": [
        99
      ],
      "backdrop_path": null,
      "adult": false,
      "overview": "FREE ANGELA is a feature-length documentary about Angela Davis and the high stakes crime, political movement, and trial that catapults the 26 year-old newly appointed philosophy professor at the University of California at Los Angeles into a seventies revolutionary political icon.  Nearly forty years later, and for the first time, Angela Davis speaks frankly about the actions that branded her as a terrorist and simultaneously spurred a worldwide political movement for her freedom.",
      "poster_path": "/8U54lsioipjWBVV2HPRsCl1DqkR.jpg",
      "popularity": 4.266
    },
    {
      "adult": false,
      "backdrop_path": "/yLGeoh6HJEdA2qYmIPJ4Q2vPHdy.jpg",
      "genre_ids": [
        99
      ],
      "vote_count": 504,
      "original_language": "en",
      "original_title": "13th",
      "poster_path": "/tcKNWD6IFPPsvkpvyZ548naz0is.jpg",
      "video": false,
      "vote_average": 8.1,
      "overview": "An in-depth look at the prison system in the United States and how it reveals the nation's history of racial inequality.",
      "id": 407806,
      "title": "13th",
      "release_date": "2016-10-07",
      "popularity": 9.981
    },
    {
      "vote_average": 0,
      "id": 309991,
      "overview": "Frequently marginalized within a community that already struggles against marginalization -- that is, the gay, lesbian and bisexual community -- African American transgender males make their voices heard in this film from Kortney Ryan Ziegler. Six articulate black transmen -- who are also artists, students, husbands, fathers, lawyers and teachers -- speak candidly about race, gender, body image and status.",
      "release_date": "2008-11-15",
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        99
      ],
      "vote_count": 0,
      "original_language": "en",
      "original_title": "Still Black: A Portrait of Black Transmen",
      "poster_path": null,
      "title": "Still Black: A Portrait of Black Transmen",
      "video": false,
      "popularity": 0.6
    },
    {
      "adult": false,
      "backdrop_path": "/3NcTGBFQnGpUUvfloymFiTaejZA.jpg",
      "genre_ids": [
        18
      ],
      "id": 95597,
      "original_language": "fr",
      "original_title": "La Noire de...",
      "overview": "Eager to find a better life abroad, a Senegalese woman becomes a mere governess to a family in southern France, suffering from discrimination and marginalization.",
      "poster_path": "/hYYAk9I9KkscSr8DC30KyDjzsVu.jpg",
      "release_date": "1966-01-01",
      "title": "Black Girl",
      "video": false,
      "vote_average": 7.7,
      "vote_count": 49,
      "popularity": 3.083
    },
    {
      "id": 925,
      "video": false,
      "vote_count": 1005,
      "vote_average": 7.8,
      "title": "Do the Right Thing",
      "release_date": "1989-06-14",
      "original_language": "en",
      "original_title": "Do the Right Thing",
      "genre_ids": [
        18
      ],
      "backdrop_path": "/etyhjRp5sHCCvtZ32aHg6CVtr3K.jpg",
      "adult": false,
      "overview": "Salvatore \"Sal\" Fragione is the Italian owner of a pizzeria in Brooklyn. A neighborhood local, Buggin' Out, becomes upset when he sees that the pizzeria's Wall of Fame exhibits only Italian actors. Buggin' Out believes a pizzeria in a black neighborhood should showcase black actors, but Sal disagrees. The wall becomes a symbol of racism and hate to Buggin' Out and to other people in the neighborhood, and tensions rise.",
      "poster_path": "/63rmSDPahrH7C1gEFYzRuIBAN9W.jpg",
      "popularity": 11.033
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        35,
        18,
        10749
      ],
      "id": 48992,
      "original_language": "en",
      "original_title": "I Like It Like That",
      "overview": "Lisette and husband Chino face marital difficulties. She is fed up with the kids, while he has job troubles. His mother Rosaria hates Lisette and the neighborhood tramp has designs on Chino. Things get even worse when Chino goes to jail and Lisette gets a good job uptown. Can this marriage be saved?",
      "poster_path": "/aCxh21UPLHi7Pxm9ykH1GNx39OW.jpg",
      "release_date": "1994-10-14",
      "title": "I Like It Like That",
      "video": false,
      "vote_average": 6.4,
      "vote_count": 8,
      "popularity": 3.23
    },
    {
      "id": 125582,
      "video": false,
      "vote_count": 13,
      "vote_average": 6.6,
      "title": "Down in the Delta",
      "release_date": "1998-12-25",
      "original_language": "en",
      "original_title": "Down in the Delta",
      "genre_ids": [
        18
      ],
      "backdrop_path": null,
      "adult": false,
      "overview": "A single mother plagued by alcohol and drug addictions is sent with her children from Chicago to her ancestral home in the Mississippi Delta, to live with her uncle and aunt for the summer.",
      "poster_path": "/2ygShFSdj1hug8xj2q28OMktAU4.jpg",
      "popularity": 3.373
    },
    {
      "id": 45153,
      "video": false,
      "vote_count": 72,
      "vote_average": 6.5,
      "title": "Eve's Bayou",
      "release_date": "1997-11-07",
      "original_language": "en",
      "original_title": "Eve's Bayou",
      "genre_ids": [
        18
      ],
      "backdrop_path": "/ncNEi4CsA5139XsNUlYZP8zGh7d.jpg",
      "adult": false,
      "overview": "Summer heats up in rural Louisiana beside Eve’s Bayou, 1962, as the Batiste family tries to survive the secrets they’ve kept and the betrayals they’ve endured.",
      "poster_path": "/33yTPcGSv7eo3FVlb7XKACHl1M8.jpg",
      "popularity": 5.966
    }
  ]

  export default movieData;