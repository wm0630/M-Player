import React from "react";
import LibraryListItem from "../Components/Library/LibraryListItem";

function Library({
    uiState,
    setSongState,
    songState,
    songData,
    audioRef,
}) {
    return (
        <div
            className={`library ${
                uiState.libraryShown ? "" : "library--hidden"
            }`}
        >
            <h1 className="menu__title">Library</h1>
            <div className="library__wrapper">
                {songData.map((song) => (
                    <LibraryListItem
                        song={song}
                        songState={songState}
                        setSongState={setSongState}
                        audioRef={audioRef}
                    />
                ))}
            </div>
        </div>
    );
}

export default Library;
