// // Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
    constructor () {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }

    handleBitrate = () => {
        this.setState({
            ...this.state,
            settings:{
                ...this.state.settings,
                bitrate:12    //need to use ... again otherwise will replace all of settings with only bitrate and no video 
            }
        })
    }

    handleResolution = () => {
        this.setState({
            ...this.state,   // clone first level of the object   (errors users and settings)
            settings:{          
              ...this.state.settings,    // clone settings object (bitrate and video)
                video:{resolution: "720p"}      //replacing with new object with new value 
            }
        })
    }

    render () {
        return (
            <div>
                <button className='bitrate' onClick={this.handleBitrate}>Bit Button</button>
                <button className='resolution' onClick={this.handleResolution}>Resolution Button</button>
            </div>
        )
    }


}