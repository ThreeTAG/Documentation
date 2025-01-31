import React from 'react';

export default function PalladiumObjectViewer({id}) {
    return (
        <span
            style={{
                backgroundColor: "red",
                borderRadius: '2px',
                color: '#fff',
                padding: '0.2rem',
            }}>
      {id}
    </span>
    );
}