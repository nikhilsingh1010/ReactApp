import React from "react";
import { Artwork } from "./ArtworkTable";
import "../App.css";

interface SelectionPanelProps {
  selectedArtworks: Artwork[];
}

const SelectionPanel: React.FC<SelectionPanelProps> = ({
  selectedArtworks,
}) => {
  return (
    <div className="selection-panel">
      <h3>Selected Artworks</h3>
      {selectedArtworks.length > 0 ? (
        <ul>
          {selectedArtworks.map((artwork) => (
            <li key={artwork.id}>
              {artwork.title} ({artwork.date_start} - {artwork.date_end})
            </li>
          ))}
        </ul>
      ) : (
        <p>No artworks selected</p>
      )}
    </div>
  );
};

export default SelectionPanel;
