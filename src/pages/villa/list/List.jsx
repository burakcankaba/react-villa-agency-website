import { TextField } from '@mui/material';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { useLocation } from 'react-router-dom';
import SearchItem from '../../../components/searchItem/SearchItem';
import "./list.scss"
import useFetch from "../../../hooks/useFetch";
const d = new Date();
const year = d.getFullYear();
const month = d.getMonth();
const day = d.getDate();
const c = new Date(year, month, day +7);

const List = () => {
  const location = useLocation();
  const [destination, setDestionation] = useState(location.state !==null  ? location.state.destionations:[])
  const [dates, setDates] = useState(location.state !==null  ?location.state.dates:[{startDate:new Date(),endDate:c}]);
  const [openDate, setOpenDate] = useState(false);;
  const [options, setOptions] = useState(location.state !==null  ?location.state.options:"");
  const { data, loading, error, reFetch } = useFetch(`/villas?city=${destination}`);
  const destinationChange = (e,skill) => {
    const itemsCopy = [...destination];
    const foundItem = destination?.find((s) => s.name === skill);
    if(!foundItem) { return; }
    foundItem.isChecked = e.currentTarget.checked;
    setDestionation(itemsCopy);
    
};
  return (
    <>


      <div className='villaList'>
        <div className="villaListWrapper">
          <div className="villaSearch">
            <div className="vlItem">
              {destination?.map((item, i) => (
                <div className="checkbox_item" key={i}>
                  <input type="checkbox" value={item.name} defaultChecked={item.isChecked} onClick={(e) => destinationChange(e, item.name)}/>
                  <span>{item.name}</span>
                </div>

              )
              )}
            </div>
            <div className="vlItem">
              <TextField
                label="Check-in Date"
                value={`${format(dates[0]?.startDate, "dd/MM/yyyy")} to ${format(dates[0]?.endDate, "dd/MM/yyyy")}`}
                onClick={() => setOpenDate(!openDate)}
              />

              {openDate && <DateRange
                onChange={(item) => setDates([item.selection])}
                minDate={new Date()}
                ranges={dates}
              />}
            </div>
          </div>
          <div className="villaResult">
            {
              loading ? "loading" : <>
                {
                  data.map(item => (
                    <SearchItem item={item} key={item._id} />
                  ))
                }
              </>
            }

          </div>
        </div>
      </div>

    </>
  )
}

export default List;