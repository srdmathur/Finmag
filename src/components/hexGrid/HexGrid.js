import React, { Component, Fragment } from 'react'
import _times from 'lodash/times';
import './HexGrid.scss';

export default class HexGrid extends Component {

    getRandomColorClass(){
        let colors = ['light','dark'];
        return colors[Math.floor(Math.random()*colors.length)];
    }
    render(){
        return (
            <div>
                <div class="Hex-container">
                    <ol class="even">
                    <Fragment><li className={`hex ${this.getRandomColorClass()}`}><span className="hex-span left top-left top-right right bottom-right bottom-left white"></span></li></Fragment>
                    {/* <Fragment><li className={`hex ${this.getRandomColorClass()}`}><span className="hex-span top-left white"></span></li></Fragment> */}
                        {/* { _times(10, i => <Fragment><li className={`hex ${this.getRandomColorClass()}`}><span className="hex-span"></span></li></Fragment>) }
                        <Fragment><li className={`hex ${this.getRandomColorClass()}`}><span className="hex-span right bottom-right white"></span></li></Fragment> */}
                    </ol>  
                    {/* <ol class="odd">
                        { _times(11, i => <li className={`hex ${this.getRandomColorClass()}`}></li>) }
                    </ol>
                    <ol class="even">
                        { _times(10, i => <li className={`hex ${this.getRandomColorClass()}`}></li>) }
                    </ol>
                    <ol class="odd">
                        { _times(2, i => <li className={`hex ${this.getRandomColorClass()}`}></li>) }
                    </ol>
                    <ol class="even" style={{left:'72px'}}>
                        { _times(1, i => <li className={`hex ${this.getRandomColorClass()}`}></li>) }
                    </ol> */}
                </div>
                {/* <div class="Hex-container-2">
                    <ol class="even">
                        { _times(12, i => <li className={`hex ${this.getRandomColorClass()}`}></li>) }
                    </ol>  
                    <ol class="odd">
                        { _times(11, i => <li className={`hex ${this.getRandomColorClass()}`}></li>) }
                    </ol>
                    <ol class="even">
                        { _times(10, i => <li className={`hex ${this.getRandomColorClass()}`}></li>) }
                    </ol>
                    <ol class="odd">
                        { _times(2, i => <li className={`hex ${this.getRandomColorClass()}`}></li>) }
                    </ol>
                    <ol class="even" style={{left:'72px'}}>
                        { _times(1, i => <li className={`hex ${this.getRandomColorClass()}`}></li>) }
                    </ol>
                </div> */}
            </div>
        );
    }
}