import React, { useState } from 'react'
import "./quicksearch.scss"
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
const QuickSearch = () => {
    const { t } = useTranslation();
    
    const { data, loading, error } = useFetch("http://localhost:8800/api/villas/getVillaNames");
    const [searchItem, setSearchItem] = useState("");
    return (
        <div className='quickSearch'>
            <input type="text" placeholder={t('quick_search')} className="navSearchBar" onChange={(e) => setSearchItem(e.target.value)} />
            <button>
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </button>
            <div className='quickSearchResult'>
                {data
                    .filter((item) => {
                        return searchItem.toLowerCase() === "" ?
                            "" : item.name.toLowerCase().includes(searchItem.toLowerCase())
                    })
                    .map((item) => (
                        <div key={item.id}>
                            <Link to={`/villadetail/${item.id}`}>
                                <img src="https://a0.muscache.com/im/pictures/b491bc89-a4b4-42e4-8a8c-190ced1af3e9.jpg?im_w=960" alt="" />
                                <div className="item">
                                    <div className='itemName'>{item.name}</div>
                                    <div className='itemCity'>{item.city},{item.location}</div>
                                </div>
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default QuickSearch