import React from "react";
import ContentLoader from "react-content-loader"

function LoadingBlock() {
    return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#ffffff"
            foregroundColor="#ecebeb"
        >
            <circle cx="150" cy="120" r="108" />
            <rect x="0" y="243" rx="3" ry="3" width="280" height="36" />
            <rect x="0" y="288" rx="6" ry="6" width="280" height="84" />
            <rect x="9" y="389" rx="3" ry="3" width="84" height="32" />
            <rect x="158" y="382" rx="20" ry="20" width="118" height="38" />
        </ContentLoader>
    )
}

export default LoadingBlock