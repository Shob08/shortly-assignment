import React from 'react';
import LandingPage from './LandingPage.js';
import Shortener from '../../components/js/Shortener.js';
import FeaturesPage from './FeaturesPage.js';
import AuthDiv from './AuthDiv.js';
import Footer from '../../components/js/Footer.js';

class App extends React.Component {

  constructor() {
    super();                                                                                                                                                                                  
    this.state = {
      inputUrl: '',
      loading: '',
      urlCards: [],
      errorIds: ['input-url']                                                                                                                                                                                      
    }
  }

  onInputChange = (e) => {
    this.setState({ 
      inputUrl: e.target.value, 
      errorIds: ['input-url']
    })
  }

  validateUrl(url) {
    const urlRegexp = new RegExp(/^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(\/?|(\/[\w.?#$%&=-]+\/?)*)$/);
    return urlRegexp.test(url);
  }

  checkUrlProtocol(url) {
    const protocolRegexp = new RegExp(/^https?:\/\//);
    return protocolRegexp.test(url);
  }

  shortenUrl = (input) => {
    console.log(input)
    return fetch(`https://api.shrtco.de/v2/shorten?url=${input}`)
              .then(res => res.json())
              .catch(err => console.log(err))
  }
  
  saveToStorage = (mainUrl, shortUrl) => {
    if (localStorage['links'] === undefined) {
      const linksArray = [
        {
          mainUrl: mainUrl,
          shortUrl: shortUrl
        }
      ];

      localStorage['links'] = JSON.stringify(linksArray);
    } else {
        const linksArray = JSON.parse(localStorage['links']);
        linksArray.push({
          mainUrl,
          shortUrl
        })
        localStorage['links'] = JSON.stringify(linksArray);
    }
  }

  componentDidMount() {
    if (localStorage['links'] !== undefined) {
      this.setState({ urlCards: JSON.parse(localStorage['links']) });
    }
  }

  addUrlCard = (urlCard) => {
    this.setState({ urlCards: [...this.state.urlCards, urlCard] });
  }

  updateErrorId = (errors) => {
    this.setState({
      errorIds: errors
    });
  }

  clearInput = () => {
    //clear current input
    document.querySelector('.input-url').value = '';
    this.setState({ inputUrl: '' })
  }

  updateLoader = (loading) => {
    this.setState({ loading })
  }

  render(){

    let { inputUrl, urlCards, errorIds, loading } = this.state;
    inputUrl = inputUrl.toLowerCase();

    const { shortenUrl, saveToStorage, addUrlCard, validateUrl, checkUrlProtocol, updateErrorId, clearInput, updateLoader} = this;
    
    async function renderShortUrl(e) {
      e.preventDefault();

      if (validateUrl(inputUrl)) {
        updateLoader(true);
        if (!checkUrlProtocol(inputUrl)) inputUrl = `https://${inputUrl}`;
        
        const data = await shortenUrl(inputUrl);
        updateLoader(false);

        const shortUrl = data.result.full_short_link;
        
        saveToStorage(inputUrl, shortUrl);
        
        addUrlCard({
          mainUrl: inputUrl,
          shortUrl
        })

        //clear any previous error class
        updateErrorId(['input-url', '', '']);
        clearInput();
      } 
      else if (inputUrl === '') {
        updateErrorId(['input-url error', 'no-link', '']);
      } 
      else {
        updateErrorId(['input-url error', '', 'invalid-url']);
      }
    }

    return (
      <div className="App">
        <LandingPage />                                         
        <Shortener loading={loading} getInput={this.onInputChange} renderUrl={renderShortUrl} urlCards={urlCards} errorIds={errorIds} />
        <FeaturesPage />
        <AuthDiv />
        <Footer />
      </div>
    );
  }
}

export default App;
