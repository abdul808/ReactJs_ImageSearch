import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import ImageList from './ImageList';

class App extends React.Component {
    
    state = {images:[]}

    Submitted = async (term) =>{
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
              Authorization:
                'Client-ID a1JFMI7Pi0pZuFQ_Ug7nDgbeFn6ZLzIkRwIrXS-6Ymk',
            }
          })
          
         this.setState({images:response.data.results})
    };
    render(){
        return(
            <div className='ui container' style={{marginTop:'10px'}}>
            <SearchBar onSubmit={this.Submitted}/>
            <ImageList images={this.state.images}/>
            </div>
        )
    }
};
export default App;