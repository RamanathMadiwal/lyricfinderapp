import React, {Component} from 'react';


class BackgroundImage extends Component {

    componentWillMount() {
        var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            x = w.innerWidth || e.clientWidth || g.clientWidth,
            y = w.innerHeight || e.clientHeight || g.clientHeight;

        this.setState({x: x, y: y});

    }

    render() {
        return (
            <div>
                <img className='bg' alt="bck g"
                     src={'https://source.unsplash.com/' + this.state.x + 'x' + this.state.y + '/?photos/HU-uL54pfQI'}/>

            </div>
        );
    }
}

//BackgroundImage.propTypes = {};

export default BackgroundImage;
