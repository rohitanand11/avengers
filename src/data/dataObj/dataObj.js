import SpiderMan from '../../assets/images/corousel_images/spider_man.jpg';
import BlackPanther from '../../assets/images/corousel_images/black_panther.jpg';
import AntMan from '../../assets/images/corousel_images/ant_man.jpg';
import Captain from '../../assets/images/corousel_images/captain.jpg';
import DoctorStrange from '../../assets/images/corousel_images/doctor_strange.jpg';
import BlackWidow from '../../assets/images/corousel_images/black_widow.jpg';
import CaptainMarvel from '../../assets/images/corousel_images/captain_marvel.jpg';
import Hulk from '../../assets/images/corousel_images/hulk.jpg';
import Thor from '../../assets/images/corousel_images/thor.jpg';
import IronMan from '../../assets/images/corousel_images/iron_man.jpg';

import IronMan_pf from '../../assets/images/profile_images/iron_man.jpg';
import Captain_pf from '../../assets/images/profile_images/captain_america.jpg';
import hulk_pf from '../../assets/images/profile_images/hulk.jpg';
import BlackPanther_pf from '../../assets/images/profile_images/black_panther.jpg';

const Data = {

    corousal: [
        {
            id: "spider_man_1",
            index: 0,
            name: "spider man",
            path: SpiderMan,
            dialouge: "So, We are using made up names here",
        },
        {
            id: "black_panther_1",
            index: 1,
            name: "black panther",
            path: BlackPanther,
            dialouge: " Wakanda Forever !!",
        },
        {
            id: "ant_man_1",
            index: 2,
            name: "ant man",
            path: AntMan,
            dialouge: "Everything Is Unpredictable. Is That Anybody’s Sandwich? I’m Starving.",
        },
        {
            id: "captain_1",
            index: 3,
            name: "captain",
            path: Captain,
            dialouge: "I can do this all day",
        },
        {
            id: "doctor_strange_1",
            index: 4,
            name: "doctor strange",
            path: DoctorStrange,
            dialouge: "We are in the endgame now",
        },
        {
            id: "black_widow_1",
            index: 5,
            name: "black widow",
            path: BlackWidow,
            dialouge: "I blew all my covers. I gotta go figure out a new one",
        },
        {
            id: "captain_marvel_1",
            index: 6,
            name: "captain marvel",
            path: CaptainMarvel,
            dialouge: "If there are lives at stake, I’ll fly the plane",
        },
        {
            id: "hulk_1",
            index: 7,
            name: "hulk",
            path: Hulk,
            dialouge: "I hate stairs!!!",
        },
        {
            id: "thor_1",
            index: 7,
            name: "Thor",
            path: Thor,
            dialouge: "Bring me Thanos !!",
        },
        {
            id: "iron_man_1",
            index: 7,
            name: "Iron Man",
            path: IronMan,
            dialouge: "If you are nothing without the suit, then you shouldn't have it",
        },

    ],

    movie_list: {
        component_title:"Movies in chronological order till endgame",
        coloumn_names: ["movies", "year", "Character"],
        movies: [
            {
                movie_name: "Captain America: The First Avenger",
                year: "2011",
                main_character: "Steve Rogers",
            },
            {
                movie_name: "Captain Marvel",
                year: "2019",
                main_character: "Carol Danvers",
            },
            {
                movie_name: "Iron Man",
                year: "2008",
                main_character: "Tony Stark",
            },
            {
                movie_name: "Iron Man 2",
                year: "2010",
                main_character: "Tony Stark",
            },
            {
                movie_name: "The Incredible Hulk",
                year: "2008",
                main_character: "Bruce Banner",
            },
            {
                movie_name: "Thor",
                year: "2011",
                main_character: "Thor",
            },
            {
                movie_name: "The Avengers ",
                year: "2012",
                main_character: "All",
            },
            {
                movie_name: "Iron Man 3",
                year: "2013",
                main_character: "Tony Stark",
            },
            {
                movie_name: "Thor: The Dark World",
                year: "2013",
                main_character: "Thor",
            },
            {
                movie_name: "Captain America: Winter Soldier",
                year: "2014",
                main_character: "Steve Rogers",
            },
            {
                movie_name: "Guardians of the Galaxy",
                year: "2014",
                main_character: "Rocket, Groot",
            },
            {
                movie_name: "Guardians of the Galaxy Vol. 2",
                year: "2017",
                main_character: "Gamora ,Rocket",
            },
            {
                movie_name: "Avengers: Age of Ultron",
                year: "2015",
                main_character: "All",
            },
            {
                movie_name: "Ant-Man",
                year: "2015",
                main_character: "Scott Lonag",
            },
            {
                movie_name: "Captain America: Civil War",
                year: "2016",
                main_character: "Steve Rogers",
            },
            {
                movie_name: "Spider-Man: Homecoming",
                year: "2017",
                main_character: "Peter Parker",
            },
            {
                movie_name: "Doctor Strange",
                year: "2016",
                main_character: "Stephen Strange",
            },
            {
                movie_name: "Black Panther",
                year: "2018",
                main_character: "T'Challa",
            },
            {
                movie_name: "Thor: Ragnarok",
                year: "2017",
                main_character: "Thor",
            },
            {
                movie_name: "Ant-Man and The Wasp",
                year: "2018",
                main_character: "Scott Lang",
            },
            {
                movie_name: "Black Widow",
                year: "2020",
                main_character: "Natasha",
            },
            {
                movie_name: "Avengers: Infinity War",
                year: "2018",
                main_character: "All",
            },
            {
                movie_name: "Avengers: Endgame",
                year: "2019",
                main_character: "All",
            },
            {
                movie_name: "Spiderman: Far From Home",
                year: "2019",
                main_character: "Peter Parker",
            },
        ]

    },
    
    //stats
    stats:{
        data:[
            {
                character_name : "Iron Man",
                profile_img : IronMan_pf,
                statistics : {
                    Strength : 8,
                    cleverness : 9,
                    speed: 8,
                    flexiblity:6,
                    money : 10,
                    popularity : 8,
                    Vs_Thanos : 10,
                }
            },
            {
                character_name : "Captain America",
                
                profile_img : Captain_pf,
                statistics : {
                    Strength : 8,
                    cleverness : 7,
                    speed: 8,
                    flexiblity:6,
                    money : 8,
                    popularity : 10,
                    Vs_Thanos : 9,
                }
            },
            {
                character_name : "Hulk",
                profile_img : hulk_pf,
                statistics : {
                    Strength : 10,
                    cleverness : 1,
                    speed: 8,
                    flexiblity:6,
                    money : 6,
                    popularity : 7,
                    Vs_Thanos : 7,
                }
            },
            {
                character_name : "Black Panther",
                profile_img : BlackPanther_pf,
                statistics : {
                    Strength : 7,
                    cleverness : 1,
                    speed: 8,
                    flexiblity:6,
                    money : 6,
                    popularity : 7,
                    Vs_Thanos : 7,
                }
            }
            

        ]
    },

};

export default Data;