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
                <div className='Containerdetails'>
                    <div className='Section'>
                        <h1>{this.state.gallery.name}</h1>
                        <div>
                            <img
                                src={this.state.gallery.cover}
                                alt={this.state.gallery.name} />
                        </div>
                    </div>
                    <div className='Section two'>
                        <br></br><br></br>
                        <div>{this.state.gallery.details}</div>
                        <br></br><br></br>
                        <div className='Videobox'>
                            <Play videoId={this.state.gallery.videoId} />
                        </div>
                        <br></br> <br></br>
                        <button><Link to='/'>Back to home page</Link></button>
                    </div>

                </div >
            );
        }
    }
}

