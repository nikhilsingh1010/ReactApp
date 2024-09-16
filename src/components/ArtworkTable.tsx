import React, { useState, useEffect } from "react";
import { DataTable, DataTableStateEvent } from "primereact/datatable"; // Correct import
import { Column } from "primereact/column";
import axios from "axios";
import SelectionPanel from "./SelectionPanel";
import "../App.css"; 

export interface Artwork {
  id: number;
  title: string;
  place_of_origin: string;
  artist_display: string;
  inscriptions: string;
  date_start: number;
  date_end: number;
}

interface ApiResponse {
  data: any[]; 
  pagination: {
    total: number;
  };
}

const ArtworkTable: React.FC = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [selectedArtworks, setSelectedArtworks] = useState<Artwork[]>([]);
  const [page, setPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);

  // Fetch data for the table
  const fetchData = async (pageNumber: number) => {
    try {
      const response = await axios.get<ApiResponse>(
        `https://api.artic.edu/api/v1/artworks?page=${pageNumber}`
      );
      const { data, pagination } = response.data;
      setArtworks(
        data.map((artwork: any) => ({
          id: artwork.id,
          title: artwork.title,
          place_of_origin: artwork.place_of_origin,
          artist_display: artwork.artist_display,
          inscriptions: artwork.inscriptions,
          date_start: artwork.date_start,
          date_end: artwork.date_end,
        }))
      );
      setTotalRecords(pagination.total);
    } catch (error) {
      console.error("Error fetching artworks:", error);
    }
  };

  // Call fetchData when page changes
  useEffect(() => {
    fetchData(page);
  }, [page]);

  // Handle row selection
  const onRowSelectChange = (e: { value: Artwork[] }) => {
    setSelectedArtworks(e.value);
  };

  // Handle pagination change
  const onPageChange = (e: DataTableStateEvent) => {
    setPage((e.page || 0) + 1); // Adjusting to handle optional `page`
  };

  return (
    <div className="artwork-table">
      <h1>Artworks Table</h1>
      <DataTable
        value={artworks}
        paginator
        rows={10}
        totalRecords={totalRecords}
        lazy
        selection={selectedArtworks}
        onSelectionChange={onRowSelectChange}
        onPage={onPageChange}
        dataKey="id"
        className="p-datatable-sm"
        selectionMode="multiple" 
      >
        <Column selectionMode="multiple" headerStyle={{ width: "3em" }} />
        <Column field="title" header="Title" sortable />
        <Column field="place_of_origin" header="Place Of Origin" sortable />
        <Column field="artist_display" header="Artist Display" sortable />
        <Column field="inscriptions" header="Inscriptions" sortable />
        <Column field="date_start" header="Date Start" sortable />
        <Column field="date_end" header="Date End" sortable />
      </DataTable>

      {/* Selection Panel */}
      <SelectionPanel selectedArtworks={selectedArtworks} />
    </div>
  );
};

export default ArtworkTable;
