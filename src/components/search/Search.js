import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import ImageResults from '../imageResults/ImageResults';

class Search extends Component {
    
    state = {
        searchText: '',
        amount: 15,
        apiUrl: process.env.REACT_APP_API_URL,
        apiKey: process.env.REACT_APP_API_KEY,
        proxy: process.env.REACT_APP_PROXY,
        images: []
    }

    onTextChange = (e)=>{
        const val = e.target.value;
        this.setState({[e.target.name]:e.target.value},
            ()=>{
                if(val === ''){
                    this.setState({images: []});
                }else{
                    //Add Proxy if CORS err encountered
                    axios.get(`https://cors-anywhere.herokuapp.com/${this.state.apiUrl}/?key=${this.state.apiKey}
                    &q=${this.state.searchText}&image_type=photo
                    &per_page=${this.state.amount}&safesearch=true`)
                    .then(res => this.setState({images: res.data.hits}))
                    .catch(err => console.log(err));
                }                
            });
    }
    onAmountChange = (e, index, value)=> this.setState({amount:value});

    render() {
        console.log(this.state.images);
        return (
            <div>
                <TextField 
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    floatingLabelText="Search For Images"
                    fullWidth={true}
                />
                <br />
                <SelectField
                    name='amount'
                    onChange={this.onAmountChange}
                    value={this.state.amount}
                    floatingLabelText="Amount"                    
                >
                    <MenuItem value={10} primaryText="10"/>
                    <MenuItem value={15} primaryText="15"/>
                    <MenuItem value={20} primaryText="20"/>
                    <MenuItem value={30} primaryText="30"/>
                    <MenuItem value={40} primaryText="40"/>
                    <MenuItem value={50} primaryText="50"/>
                </SelectField>
                <br/>
                {this.state.images.length > 0 ? (<ImageResults images={this.state.images}/>) : null}
            </div>
        )
    }
}

export default Search;