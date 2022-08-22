import React from 'react';

const AddFavorite = () => {
    return (
        <>
            <span className="mr-2">Add to Favorites</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="pink"
                class="bi bi-search-heart-fill"
                viewBox="0 0 16 16"
            >
                <path
                    fill-rule='evenodd'
                    d='M6.5 13a6.474 6.474 0 0 0 3.845-1.258h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.008 1.008 0 0 0-.115-.1A6.471 6.471 0 0 0 13 6.5 6.502 6.502 0 0 0 6.5 0a6.5 6.5 0 1 0 0 13Zm0-8.518c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z'
                />
            </svg>
        </>
    );
};

export default AddFavorite;