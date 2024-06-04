import Explore_users from "../dt/Explore.json"
import React, { useEffect, useState } from "react";
import Time from "../Components/Time/Time";

import "../Style/Explore.scss";
import NavPanel from "../Components/NavPanel/NavPanel";

const users = Explore_users

function Explore() {

  const [searchItem, setSearchItem] = useState('')
  const [filteredUsers, setFilteredUsers] = useState(users)




  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)

    const filteredItems = users.filter((user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase())

    );
    const filteredItemsauth = users.filter((user) =>
      user.author.toLowerCase().includes(searchTerm.toLowerCase())

    );

    setFilteredUsers(filteredItems);
  }

  return (
    <>
      <div className="Explore">
        <div className="container">
          <div className="navigation">
            <div className="navigation__leftitem">
              <Time />
            </div>
            <div className="navigation__rightitem">
              <img src="../../public/Set.svg" alt="#" />
              <img src="../../public/Wifi.svg" alt="#" />
              <img src="../../public/Battery.svg" alt="#" />

            </div>

          </div>
          <div className="logo_explore">
            <img className="Explore" src="../../public/Explore_logo.png" alt="#" />
          </div>
          <input className="search"
            type="text"
            value={searchItem}
            onChange={handleInputChange}
            placeholder='Title, author or keyword'

          />
          <div className="all_books_searche">
            {filteredUsers.map(user => <div className="searche" key={user.id}>
              <div className="img_box_books">
                <img className="filter_img" src={user.img} alt="" />
              </div>
              <p className="searche_text">
                {user.firstName}  </p>
              <p>
                {user.author}
              </p>
            </div>)}
            <div className="block">
              <p>
                Bookhouse-Online book reader: Convenient access, diverse literature, fostering reading habits digitally.
              </p>
            </div>
          </div>
     <NavPanel/>

        </div>

        
      </div>

    </>
  )
}

export default Explore