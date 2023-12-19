import React, { Component } from "react";
import Newsitems from "./Newsitems";

export default class News extends Component {
  // Pasted the json data from NewsAPI org
  // articles = [
  //   {
  //     source: {
  //       id: "the-wall-street-journal",
  //       name: "The Wall Street Journal",
  //     },
  //     author: "Tom Fairless",
  //     title: "The Era of Big Taxes Is Upon Us...",
  //     description:
  //       "With debt more expensive, rich countries are turning to voters and businesses to pay for growing spending needs",
  //     url: "https://www.wsj.com/economy/global/taxes-governments-worldwide-9e07c2c0",
  //     urlToImage: "https://images.wsj.net/im-898779/social",
  //     publishedAt: "2023-12-18T12:58:39Z",
  //     content:
  //       "Rich countries are raising more money from taxpayers than they have in decades to finance a burst of state spending as \r\nsurging interest rates make borrowing less attractive. Tax revenues have risen… [+346 chars]",
  //   },
  //   {
  //     source: {
  //       id: "the-wall-street-journal",
  //       name: "The Wall Street Journal",
  //     },
  //     author: "The Editorial Board",
  //     title: "Biden’s Drug-Price Boomerang",
  //     description: "Prices are rising faster since the IRA passed. Here’s why.",
  //     url: "https://www.wsj.com/articles/bidens-drug-price-boomerang-630d284d",
  //     urlToImage: "https://images.wsj.net/im-901847/social",
  //     publishedAt: "2023-12-18T05:55:34Z",
  //     content:
  //       "President Biden keeps trying to persuade Americans his policies are helping them, but voters arent buying it. The latest example is the Inflation Reduction Acts (IRA) Medicare drug rebates, which are… [+318 chars]",
  //   },
  //   {
  //     source: {
  //       id: "the-wall-street-journal",
  //       name: "The Wall Street Journal",
  //     },
  //     author: "Elaine Yu, Rebecca Feng",
  //     title:
  //       "China’s Millionaires Are Worried. That’s a Problem for Wall Street.",
  //     description:
  //       "Big banks joined the race to serve China’s wealthy. That business has come under pressure.",
  //     url: "https://www.wsj.com/finance/banking/chinas-millionaires-are-worried-thats-a-problem-for-wall-street-2fb0992b",
  //     urlToImage: "https://images.wsj.net/im-901282/social",
  //     publishedAt: "2023-12-18T05:15:00Z",
  //     content:
  //       "Chinas economic slowdown has become a big problem for banks that serve the rich. \r\nFor years, banks including Citigroup, JPMorgan and UBS competed hard to win business from Chinas giant pool of wealt… [+371 chars]",
  //   },
  //   {
  //     source: {
  //       id: "the-wall-street-journal",
  //       name: "The Wall Street Journal",
  //     },
  //     author: "Julie Jargon",
  //     title:
  //       "Boys Think Schools Favor Girls. Schools Are Trying New Tricks to Change That.",
  //     description:
  //       "All-male middle schools show what boys need to develop skills—and these lessons would work in coed schools, too",
  //     url: "https://www.wsj.com/tech/personal-tech/boys-think-schools-favor-girls-schools-are-trying-new-tricks-to-change-that-2b9e4934",
  //     urlToImage: "https://images.wsj.net/im-901107/social",
  //     publishedAt: "2023-12-16T14:07:29Z",
  //     content:
  //       "Boys are struggling in middle school, stuck in an academic setting that they say rewards them for sitting still and taking notesin other words, behaving more like girls. \r\nIts really hard sitting sti… [+459 chars]",
  //   },
  //   {
  //     source: {
  //       id: "the-wall-street-journal",
  //       name: "The Wall Street Journal",
  //     },
  //     author: "Saeed Shah",
  //     title:
  //       "U.N. Calls for Investigation of Deaths at Hospital Israel Says Was Hamas Command Center",
  //     description:
  //       "Israeli military says it detained militants, found weapons at Kamal Adwan Hospital, where staff say patients died from lack of water, other supplies",
  //     url: "https://www.wsj.com/world/middle-east/u-n-calls-for-investigation-of-deaths-at-hospital-israel-says-was-hamas-command-center-7c02ac1d",
  //     urlToImage: "https://images.wsj.net/im-902020/social",
  //     publishedAt: "2023-12-17T20:56:20Z",
  //     content:
  //       "United Nations officials called for an investigation into an Israeli military raid on a Gaza hospital during which patients died and the armed forces said they detained scores of Hamas militants and … [+597 chars]",
  //   },
  //   {
  //     source: {
  //       id: "the-wall-street-journal",
  //       name: "The Wall Street Journal",
  //     },
  //     author: "Alexandra Bruell",
  //     title:
  //       "New York Times Staffers Form Journalistic ‘Independence Caucus’ Amid Concerns Over Union’s Actions",
  //     description:
  //       "Times journalists have been at odds with NewsGuild over its involvement in issues ranging from the Israel-Hamas conflict to the outlet’s transgender coverage",
  //     url: "https://www.wsj.com/business/media/new-york-times-staffers-form-journalistic-independence-caucus-amid-concerns-over-unions-actions-f9be2a58",
  //     urlToImage: "https://images.wsj.net/im-900577/social",
  //     publishedAt: "2023-12-17T18:38:05Z",
  //     content:
  //       "Dozens of New York Times employees have formed a group to take a stand on journalistic independence as concerns grow that the labor union that represents the Times and other outlets has veered toward… [+394 chars]",
  //   },
  //   {
  //     source: {
  //       id: "the-wall-street-journal",
  //       name: "The Wall Street Journal",
  //     },
  //     author: "Khadeeja Safdar",
  //     title:
  //       "Jeffrey Epstein Never Stopped Abusing Women. His VIP Circle Helped...",
  //     description:
  //       "A WSJ investigation shows Epstein continued ensnaring young women for abuse after his 2008 conviction. This is their story of what happened.",
  //     url: "https://www.wsj.com/us-news/jeffrey-epstein-sexual-abuse-women-vip-connections-f5451078",
  //     urlToImage: "https://images.wsj.net/im-901016/social",
  //     publishedAt: "2023-12-17T12:55:38Z",
  //     content:
  //       "In March 2014, Jeffrey Epstein took his private jet to Seattle to visit Bill Gates at his office. Epstein brought along a Polish model he had met a few months earlier. Dressed in a long gray coat, sh… [+440 chars]",
  //   },
  //   {
  //     source: {
  //       id: "the-wall-street-journal",
  //       name: "The Wall Street Journal",
  //     },
  //     author: "Angel Au-Yeung",
  //     title:
  //       "Buy Now, Pay Later Keeps People Spending—Without Credit Agencies Knowing",
  //     description:
  //       "Consumers are flocking to installment loans for everything from groceries to laser eye surgery",
  //     url: "https://www.wsj.com/personal-finance/credit/buy-now-pay-later-industry-watchdog-groups-beed96c8",
  //     urlToImage: "https://images.wsj.net/im-901352/social",
  //     publishedAt: "2023-12-17T12:00:00Z",
  //     content:
  //       "Priscilla Rodriguez, an overnight stocker at a Walmart, has a strategy to protect her credit score as she and her husband look to buy a house.\r\nThe Sunland Park, N.M., resident uses installment loans… [+293 chars]",
  //   },
  //   {
  //     source: {
  //       id: "the-wall-street-journal",
  //       name: "The Wall Street Journal",
  //     },
  //     author: "Natasha Khan",
  //     title:
  //       "Chinese Tourists Are Back. They Just Aren’t Shopping Like Before.",
  //     description:
  //       "Rise of ‘China’s Instagram’ and swing in preferences are driving selfie travel and hurting retailers",
  //     url: "https://www.wsj.com/business/retail/chinese-tourists-are-back-they-just-arent-shopping-like-before-9f0bb5a6",
  //     urlToImage: "https://images.wsj.net/im-901489/social",
  //     publishedAt: "2023-12-17T05:24:59Z",
  //     content:
  //       "HONG KONGThe retail world used to cater to Chinese tourists. Luxury shops opened wherever they went, and Parisian department stores hired Mandarin speakers. Mom-and-pop stores in Hong Kong were repla… [+351 chars]",
  //   },
  //   {
  //     source: {
  //       id: "the-wall-street-journal",
  //       name: "The Wall Street Journal",
  //     },
  //     author: "Natasha Khan",
  //     title:
  //       "Chinese Tourists Are Back. They Just Aren’t Shopping Like Before.",
  //     description:
  //       "Rise of ‘China’s Instagram’ and swing in preferences are driving selfie travel and hurting retailers",
  //     url: "https://www.wsj.com/business/retail/chinese-tourists-are-back-they-just-arent-shopping-like-before-9f0bb5a6",
  //     urlToImage: "https://images.wsj.net/im-901489/social",
  //     publishedAt: "2023-12-17T05:24:59Z",
  //     content:
  //       "HONG KONGThe retail world used to cater to Chinese tourists. Luxury shops opened wherever they went, and Parisian department stores hired Mandarin speakers. Mom-and-pop stores in Hong Kong were repla… [+351 chars]",
  //   },
  // ];

  articles = [];

  // this constructor will run the exact current state
  constructor(prop) {
    super(); // calls the constructor of the parent class
    console.log("i am constructor");
    this.state = {
      articles: this.articles, // am assigning the value of the articles for future use
    };
  }

  async componentDidMount() {
    // console.log("i am mounted")
    let url = `
    https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2e87b29b92964760bce0ab3cad8e73bd`;
    // want to get specific data
    let data = await fetch(url);
    //lets see the response
    // console.log(data)
    // covert the data in to json
    let parseData = await data.json();
    // console.log(parseData)
    //I want to set specific state
    this.setState({
      articles: parseData.articles,
    });
  }

  handleNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2e87b29b92964760bce0ab3cad8e73bd`;
  };
  // Need map the this data
  render() {
    return (
      <>
        <h1 className="text-center text-secondary">Live News</h1>
        <div className="container mt-3">
          <div className="row">
            {/* this can take actually take this current state 
          here we using map function for this arcticles*, am using that articles here */}
            {this.state.articles.map((Element) => {
              return (
                // every element expecting keys sp we need provide unique key
                <div className="col-md-4" key={Element.url}>
                  {/*  we need to iterate everythng from the articles using props*/}
                  {/* this much data of to the newsitems */}
                  <Newsitems
                    title={Element.title}
                    description={Element.description}
                    url={Element.urlToImage}
                    linkurl={Element.url}
                    author={Element.author}
                    publishedAt={Element.publishedAt}
                    source={Element.source.name}
                  />
                </div>
              );
            })}
          </div>
          <div className="container d-flex  justify-content-between">
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.handlePrev}
            >
              {" "}
              &laquo; Prev
            </button>
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.handleNext}
            >
              {" "}
              Next &raquo;
            </button>
          </div>
        </div>
      </>
    );
  }
}
