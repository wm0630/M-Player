import React from "react";
import colors from "../../Utils/Colors";
import shadow from "../../Utils/Shadows";

function Artwork({ uiState, songState }) {
    const currentPalette = songState.currentSong[0].palette;

    return (
        <div
            className="artwork"
            style={{
                boxShadow: `${shadow(
                    0,
                    0,
                    25,
                    0,
                    colors[`${currentPalette}`]
                )}`,
            }}
        >
            <img
                src={`${songState.currentSong[0].coverUrl}`}
                alt="Album Art"
                className={`artwork__img`}
            />
        </div>
    );
}

export default Artwork;
