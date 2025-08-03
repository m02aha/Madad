


import { useState } from "react";


// Main page for browsing services

// this component is responisble for rendering other tags and services , based on filtered query
function Browse({mergedData}) {
  // State to store the search text from user input
  const [searchval, setsearch] = useState('');
  // State to track the selected tag (category); default is 'All'
  const [selectedTag, setSelectedTag] = useState('All');

  //filtered data is a derived state that is recalculated every tima a tag or search input changes
  // Filter the mergedData based on selected tag and search input
  const filteredData = mergedData.filter((item) => {
    // Matches all items if 'All' is selected, or filters by exact match of serviceName
    const matchedTag = selectedTag == 'All' || item.serviceName === selectedTag;

    // Checks if the search input appears in the description (case-insensitive)
    const matchedQuery = item.serdescription.toLowerCase().includes(searchval);

    // Include this item only if both tag and search text match
    return matchedTag && matchedQuery;
  });

  return (
    <div>
      <div className="px-4 sm:px-6 md:px-8 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <p  style={{ color: '#0d0f1c' }} className="text-[#0d0f1c] tracking-light text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold leading-tight min-w-72">
              Find the right handyman service for your needs
            </p>
          </div>

          {/* Search input */}
          <SearchBar searchval={searchval} setsearch={setsearch} />

          {/* Tag selection filter */}
          <Tags fetchedData={mergedData} selectedTag={selectedTag} setSelectedTag={setSelectedTag} />

          {/* Render filtered services */}
          <ServiceList fetchedData={filteredData} />
        </div>
      </div>
    </div>
  );
}


export default Browse;

//searhc bar component for query input
//searchval,setsearch are props for controlled elements

function SearchBar({searchval,setsearch}){
    return(<div>
<div class="px-4 py-3">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <div
                    className="text-[#47569e] flex border-none bg-[#e6e9f4] items-center justify-center pl-4 rounded-l-xl border-r-0"
                    data-icon="MagnifyingGlass"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    placeholder="Search for services"
                    class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d0f1c] focus:outline-0 focus:ring-0 border-none bg-[#e6e9f4] focus:border-none h-full placeholder:text-[#47569e] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    value={searchval}
                    onChange={(e)=>setsearch(e.target.value.toLowerCase())}

                  />
                </div>
              </label>
            </div>

    </div>);
}

//component that renders all tags based on recieved data 
function Tags({fetchedData ,selectedTag,setSelectedTag}){
    return(
      <div>
 <h2 className="text-[#0d0f1c] text-lg sm:text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Popular services</h2>

{/* //tag to render all data   */}
<Tag serviceTag={'All'} selectedTag={selectedTag} setSelectedTag={setSelectedTag}/>

{/* // populate tags upon service names appears  in data */}
 {fetchedData.map((item,index) =>( <Tag key={index} serviceTag={item.serviceName} selectedTag={selectedTag} setSelectedTag={setSelectedTag}/>))}
      </div> );

}

// / a tag component that reresent servies names in fetched data
function Tag({serviceTag,selectedTag,setSelectedTag}){
  return (
    <div className="flex gap-2 sm:gap-3 p-3 flex-wrap pr-4 inline-block cursor-pointer ">
  <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e6e9f4] pl-3 pr-3 sm:pl-4 sm:pr-4"
  style={selectedTag===serviceTag?{backgroundColor:'#47569e',}:{}}
  >
    <p   className="text-[#0d0f1c] text-xs sm:text-sm font-medium leading-normal" 
    style={selectedTag===serviceTag?{color:'white'}:{ color: '#0d0f1c'}}
    onClick={()=>{setSelectedTag(serviceTag)
      console.log(serviceTag);
    }
      
    }
    >{serviceTag}</p>
  </div>
</div>

  );
}

// a component that populate services based on previously filtered data upon selected tag and search query
function ServiceList({fetchedData}){
    return( 
     <div>
            <h2 className="text-[#0d0f1c] text-lg sm:text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Services</h2>

     {
      fetchedData.map((item,index)=>(
        <ServiceCard key={index} service={item}/>
      ))
     }
     </div>
    );
}

//   service card component that represent service information 
function ServiceCard({ service }) {
  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row items-stretch justify-between gap-6 rounded-lg bg-white shadow-sm border border-[1px] border-[#e6e9f4] p-4">
        <div className="flex flex-[2_2_0px] flex-col gap-5">
          <div className="flex flex-col gap-2">
            <p style={{ color: '#0d0f1c' }}  className="text-[#0d0f1c] text-lg sm:text-xl font-bold leading-tight">
              {service.Title}
            </p>
            <p className="text-[#47569e] text-xs sm:text-sm font-normal leading-normal mb-3">
              {service.serdescription}
            </p>
            <div className="flex flex-wrap gap-3 text-sm mt-2">
              <span className="inline-flex items-center gap-1 bg-[#e6e9f4] text-[#47569e] rounded px-3 py-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4Z"/>
                </svg>
                {service.providerName}
              </span>
              <span className="inline-flex items-center gap-1 bg-[#e6e9f4] text-[#47569e] rounded px-3 py-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/>
                </svg>
                {service.location}
              </span>
              <span className="inline-flex items-center gap-1 bg-[#e6e9f4] text-[#0d0f1c] rounded px-3 py-2 font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3Zm0 13c-4.418 0-8-3.582-8-8 0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.418-3.582 8-8 8Z"/>
                </svg>
                {service.pricePerHour} SDG/hr
              </span>
            </div>
          </div>
        </div>

        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-md flex-1 min-w-[160px] max-w-[240px]"
          style={{ backgroundImage: `url(${service.imageUrl})` }}
        ></div>
      </div>
    </div>
  );
}
