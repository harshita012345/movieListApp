import React from 'react';

const Search = () => {
    return (
        <div>
            <div class="row">
                <div class="col">
                    <div class="input-group rounded">
                        <input class="form-control border" type="search" placeholder="Search for movies.." id="example-search-input" />
                        <span class="input-group-append">
                            <button class="btn btn-primary border-left-0 border" type="button">
                                Search
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Search;