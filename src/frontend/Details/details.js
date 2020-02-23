import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import getGallery from '../gallery-get';
import './Details.css';
import Play from '../Play';

export default class details extends React.Component {

    constructor() {
        super();
        this.state = {
            gallery: {}
        };
    }

    componentDidMount() {
        let galleryId = this.props.match.params.galleryId;
        let gallery = getGallery()
            .find((gallery) => gallery.id === galleryId);
        this.setState({ gallery });
    }

    render() {
        if (this.state.gallery === undefined) {
            return <Redirect to='/not-found' />
        } else {
            return (
                <div className='wrapper'>
                    <div className='header'><h1>{this.state.gallery.name}</h1></div>
                    <div className='content-one'>
                        <img
                            src={this.state.gallery.cover}
                            alt={this.state.gallery.name} />
                    </div>
                    <div className='content-two'>
                        <div>{this.state.gallery.details}</div>
                        <br></br><br></br>
                        <Play videoId={this.state.gallery.videoId} />
                        <div className='footer'>
                            <button><Link to='/'>Back to home page</Link></button>
                        </div>
                    </div>
                </div>

            );
        }
    }
}

