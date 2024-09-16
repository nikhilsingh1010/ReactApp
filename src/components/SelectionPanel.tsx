import React from "react";
import { Artwork } from "./components/ArtworkTable"; // Assuming you're importing the Artwork interface
import "../App.css"; // Import styles

interface Artwork {
  id: number;
  title: string;
  date_start: number;
  date_end: number;
}

interface SelectionPanelProps {
  selectedArtworks: Artwork[];
}

const SelectionPanel: React.FC<SelectionPanelProps> = ({
  selectedArtworks,
}) => {
  return (
    <div className="selection-panel">
      <h3>Selected Artworks</h3>
      <ul>
        {selectedArtworks.length > 0 ? (
          selectedArtworks.map((artwork) => (
            <li key={artwork.id}>
              {artwork.title} ({artwork.date_start} - {artwork.date_end})
            </li>
          ))
        ) : (
          <li>No artworks selected</li>
        )}
      </ul>
    </div>
  );
};

export default SelectionPanel;
