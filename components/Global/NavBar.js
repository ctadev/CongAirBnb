import React, { useState } from "react";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import s from "./navbar.module.scss";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleIcon from "@mui/icons-material/People";
import MenuIcon from "@mui/icons-material/Menu";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

function NavBar() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guess, setGuess] = useState(1);
  const router = useRouter();

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guess,
      }
    });
    setSearchInput("");
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <nav className={s.navbar}>
      <main className={s.main}>
        <section className={s.left} onClick={() => router.push('/')}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
            layout="fill"
            alt="logo"
            objectFit="contain"
          />
        </section>

        <section className={s.middle}>
          <input
            type="text"
            placeholder="Start your search"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
          />
          <div className={s.searchContainer}>
            <SearchIcon />
          </div>
        </section>

        <section className={s.right}>
          <p>Become a host</p>
          <LanguageIcon />
          <div className={s.menuContainer}>
            <MenuIcon />
            <AccountCircleIcon />
          </div>
        </section>
      </main>

      {searchInput && (
        <main className={s.main2}>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            onChange={handleSelect}
            className={s.calendar}
            rangeColors={["#FD5B61"]}
          />
          <div className={s.guess}>
            <h1>Number of Guests</h1>
            <div className={s.icons}>
              <PeopleIcon />
              <input
                type="number"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                min={1}
                max={20}
              />
            </div>
          </div>
          <div className={s.buttons}>
            <p>Cancel</p>
            <p onClick={search}>Search</p>
          </div>
        </main>
      )}
    </nav>
  );
}

export default NavBar;
