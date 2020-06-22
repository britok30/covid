import React from "react";

function CovidNewsCard(props) {
    const { link, pubDate, source, title } = props;

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title news-title">
                    {title ? title : "N/A"}
                </h5>
                <h6 className="card-subtitle news-subtitle mb-2 text-muted">
                    Source: {source ? source : "N/A"}
                </h6>
                <p className="card-text news-text">
                    Published On: {pubDate ? pubDate : "N/A"}
                </p>
                <a href={link ? link : "N/A"} className="card-link news-link">
                    News Link
                </a>
            </div>
        </div>
    );
}

export default CovidNewsCard;
