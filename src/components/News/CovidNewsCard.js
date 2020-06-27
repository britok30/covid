import React, { Component } from "react";
import pic1 from "../../img/pic1.jpg";
import pic2 from "../../img/pic2.jpg";
import pic3 from "../../img/pic3.jpg";
import pic4 from "../../img/pic4.jpg";
import pic5 from "../../img/pic5.jpg";
import pic6 from "../../img/pic6.jpg";
import pic7 from "../../img/pic7.jpg";

class CovidNewsCard extends Component {
    state = {
        imgIndex: null,
    };

    images = [
        {
            link: pic1,
        },
        {
            link: pic2,
        },
        {
            link: pic3,
        },
        {
            link: pic4,
        },
        {
            link: pic5,
        },
        {
            link: pic6,
        },
        {
            link: pic7,
        },
    ];

    componentWillMount() {
        this.displayRandomImage();
    }

    displayRandomImage = () => {
        this.setState({
            imgIndex: Math.floor(Math.random() * 7),
        });
    };

    render() {
        const { newsLink, pubDate, source, title } = this.props;
        const { imgIndex } = this.state;
        return (
            <div className="card news-card">
                <img
                    src={this.images[imgIndex].link}
                    className="card-img-top covid-img"
                    alt=""
                />
                <div className="card-body">
                    <h5 className="card-title news-title">
                        {title ? title : "N/A"}
                    </h5>
                    <h6 className="card-subtitle news-subtitle mb-2 text-muted">
                        Source: {source ? source : "N/A"}
                    </h6>
                    <a
                        href={newsLink ? newsLink : "index.html"}
                        className="card-link news-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        News Link
                    </a>
                    <p className="card-text news-text">
                        Published On: {pubDate ? pubDate : "N/A"}
                    </p>
                </div>
            </div>
        );
    }
}

export default CovidNewsCard;
