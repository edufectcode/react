var express = require("express");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const port = 2410;
var list = [
  {
    country: "India",
    name: "Virat Kohli",
    id: "1",
    sport: "Cricket",
    details: {
      dob: "5 November 1988",
      info:
        "Virat Kohli is an Indian cricketer who currently captains the India national team. A right-handed top-order batsman, Kohli is regarded as one of the best batsmen in the world.He plays for Royal Challengers Bangalore in the Indian Premier League (IPL), and has been the team captain since 2013. Since October 2017, he has been the top-ranked ODI batsman in the world and is currently 2nd in Test rankings with 926 points.[4] Among Indian batsmen, Kohli has the best ever Test rating (937 points), ODI rating (911 points) and T20I rating (897 points)."
    }
  },
  {
    country: "India",
    name: "MS Dhoni",
    id: "2",
    sport: "Cricket",
    details: {
      dob: "7 July 1981",
      info:
        "Mahendra Singh Dhoni commonly known as MS Dhoni, is an Indian international cricketer who captained the Indian national team in limited-overs formats from 2007 to 2016 and in Test cricket from 2008 to 2014. Under his captaincy, India won the 2007 ICC World Twenty20, the 2010 and 2016 Asia Cups, the 2011 ICC Cricket World Cup and the 2013 ICC Champions Trophy. A right-handed middle-order batsman and wicket-keeper, Dhoni is one of the highest run scorers in One Day Internationals (ODIs) with more than 10,000 runs scored and is considered an effective 'finisher' in limited-overs formats.He is also regarded by some as one of the best wicket-keepers and captain in modern limited-overs international cricket."
    }
  },
  {
    country: "India",
    name: "Rohit Sharma",
    id: "3",
    sport: "Cricket",
    details: {
      dob: "30 April 1987",
      info:
        "Rohit Gurunath Sharma  is an Indian international cricketer who plays for Mumbai in domestic cricket and captains Mumbai Indians in the Indian Premier League as a right-handed batsman and an occasional right-arm off break bowler. He is the vice-captain of the Indian national team in limited-overs formats."
    }
  },
  {
    country: "Australia",
    name: "David Warner",
    id: "4",
    sport: "Cricket",
    details: {
      dob: "27 October 1986",
      info:
        "David Andrew Warner is an Australian international cricketer and a former captain of the Australian national team in limited overs cricket.A left-handed opening batsman, Warner is the first Australian cricketer in 132 years to be selected for a national team in any format without experience in first-class cricket. He plays for New South Wales and the Sydney Thunder in domestic cricket. He served as the Australian vice-captain across Test and ODI formats of the game between 2015 and 2018."
    }
  },
  {
    country: "Portugal",
    name: "Cristiano Ronaldo",
    id: "5",
    sport: "Football",
    details: {
      dob: "5 February 1985",
      info:
        "Cristiano Ronaldo dos Santos Aveiro GOIH ComM  is a Portuguese professional footballer who plays as a forward for Serie A club Juventus and captains the Portugal national team. Often considered the best player in the world and widely regarded as one of the greatest players of all time,Ronaldo has won five FIFA Ballon d'or/Best FIFA Men's Player awards,the most for a European player, and four European Golden Shoes"
    }
  },
  {
    country: "Argentina",
    name: "Lionel Messi",
    id: "6",
    sport: "Football",
    details: {
      dob: "24 June 1987",
      info:
        "Lionel Andrés Messi Cuccittini is an Argentine professional footballer who plays as a forward and captains both Spanish club Barcelona and the Argentina national team. Often considered the best player in the world and widely regarded as one of the greatest players of all time, Messi has won a record six FIFA Ballon d'or/Best FIFA Men's Player awards, and a record six European Golden Shoes."
    }
  },
  {
    country: "Brazil",
    name: "Neymar Jr.",
    id: "7",
    sport: "Football",
    details: {
      dob: "5 February 1992",
      info:
        "Neymar da Silva Santos Júnior , commonly known as Neymar Jr. or simply Neymar, is a Brazilian professional footballer who plays as a forward for French club Paris Saint-Germain and the Brazil national team."
    }
  },
  {
    country: "France",
    name: "Kylian Mbappe",
    id: "8",
    sport: "Football",
    details: {
      dob: "20 December 1998",
      info:
        "Kylian Mbappé Lottin is a French professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and the France national team. Considered one of the best players in the world, he is known for his finishing, dribbling, and speed. He is considered the world's most expensive player from a transfer value perspective by the CIES."
    },
  },
  {
    country: "Argentina",
    name: "Lautaro Martínez",
    id: "9",
    sport: "Football",
    details: {
      dob: "22 August 1997",
      info:
        "Lautaro Javier Martínez is an Argentine professional footballer who plays as a striker for Italian club Inter Milan and the Argentina national team."
    }
  },
  {
    country: "Argentina",
    name: "Emiliano Martínez",
    id: "10",
    sport: "Football",
    details: {
      dob: "2 September 1992",
      info:
        "Damián Emiliano Martínez Romero is an Argentine professional footballer who plays as a goalkeeper for Premier League club Aston Villa"
    }
  },
  {
    country: "Brazil",
    name: "Douglas Luiz",
    id: "11",
    sport: "Football",
    details: {
      dob: "9 May 1998",
      info:
        "Douglas Luiz Soares de Paulo, known as Douglas Luiz, is a Brazilian professional footballer who plays as a central midfielder for Premier League club Aston Villa and the Brazil national team."
    }
  },
  {
    country: "Australia",
    name: "Steve Smith",
    id: "12",
    sport: "Cricket",
    details: {
      dob: "2 June 1989",
      info:
        "Steven Peter Devereux Smith is an Australian international cricketer and former captain of the Australian national team. Smith is consistently rated as one of the top-ranked Test batsmen in the world, according to the ICC Player Rankings."
    }
  },
  {
    country: "Australia",
    name: "David Warner",
    id: "13",
    sport: "Cricket",
    details: {
      dob: "27 October 1986",
      info:
        "David Andrew Warner is an Australian international cricketer and a former captain of the Australian national team. A left-handed opening batsman, Warner is the first Australian cricketer in 132 years to be selected for a national team in any format without experience in first-class cricket."
    }
  },
  {
    "id": 14,
    "name": "Ajinkya Rahane",
    "country": "India",
    "sport": "Cricket",
    "details": {
      "info": "Ajinkya Madhukar Rahane is an Indian cricketer. He is currently the vice-captain of the Indian cricket team in Test cricket. He plays primarily as a middle-order batsman in the Test format and as a top-order batsman in white-ball forms of the game.",
      "dob": "6 June 1988"
    }
  },
  {
    "id": 15,
    "name": "Cheteshwar Pujara",
    "country": "India",
    "sport": "Cricket",
    "details": {
      "info": "Cheteshwar Pujara is an Indian international cricketer who plays Test cricket for India and represents Saurashtra in domestic cricket. He is a right-handed batsman who made his first-class debut for Saurashtra in December 2005 and made his Test debut at Bangalore in October 2010.",
      "dob": "25 January 1988"
    }
  },
  {
    "id": 16,
    "name": "Ravindra Jadeja",
    "country": "India",
    "sport": "Cricket",
    "details": {
      "info": "Ravindrasinh Anirudhsinh Jadeja, commonly known as Ravindra Jadeja, is an Indian international cricketer. He is an all-rounder, who plays as a left-handed middle-order batsman and slow left-arm orthodox bowler.",
      "dob": "6 December 1988"
    }
  }
];
app.get("/sporticons/stars/:sportName?", function (req, res) {
  let name = req.params.sportName;
  let page = req.query.page;
  page = page ? page : 1;
  let countries = req.query.countries;
  let countryList = countries ? countries.split(",") : []
  let arr = list.filter(obj => obj.sport === name);
  let dispList = name === undefined ? list : arr;
  console.log(countryList)

  dispList = countryList.length > 0 ? (dispList.filter(obj => countryList.find(obj2 => obj2 === obj.country))) : dispList
  //res.send(dispList);
  let respArr = pagination(dispList, page);
  let len = dispList.length;
  let quo = Math.floor(len / 5);
  let rem = len % 5;
  //console.log(quo,rem);
  let extra = rem === 0 ? 0 : 1
  let numofpages = quo + extra;
  let pageInfo = { pageNumber: page, numberOfPages: numofpages, numOfItems: respArr.length, totalItemCount: dispList.length };
  res.json({
    pageInfo: pageInfo,
    stars: respArr,

  });
});
app.get("/sporticons/details/:id", function (req, res) {
  let id = req.params.id;
  let obj = list.find(obj1 => {
    if (+obj1.id === +id) return true;
  });
  if (obj) res.send(obj);
  res.send("not found");
});
app.post("/sporticons/star", function (req, res) {
  let body = { ...req.body };
  let sport = list.find(obj1 => {
    if (obj1.name === body.name) return true;
  });
  if (sport)
    res.status(401).send('Sport Star already present')
  else {
    let obj = { id: list.length + 1, name: body.name, country: body.country, sport: body.sport, details: { info: body.info, dob: body.dob } };
    list.push(obj)
    res.send(obj);
  }
});

function pagination(obj, page) {

  var resArr = obj;
  resArr = resArr.slice(page * 5 - 5, page * 5);
  return resArr;
}

app.listen(port, () => console.log(`Node app listening on port ${port}!`));
