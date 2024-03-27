import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
// ------------------------------------------------------- Menu Button
import { Dropdown } from "@mui/base/Dropdown";
import { MenuButton } from "@mui/base/MenuButton";
import { Menu } from "@mui/base/Menu";
import { MenuItem } from "@mui/base/MenuItem";

// ------------------------------------------------------- Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faScaleUnbalanced } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const TopNavBar = () => {
  const createHandleMenuClick = (menuItem: string) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };

  return (
    <div>
      <div className="flex flex-row">
        <div className="flex-none w-1/4 h-1/4 pb-1 pt-10">
          <img src="./images/TradeMe_Image.png" alt="Trademe Logo" />
        </div>
        <div className="flex basis-1/2 items-end">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="text.primary" href="/">
              Home
            </Link>
            <Link
              underline="hover"
              color="text.primary"
              href="/trademe/furniture"
            >
              Furniture
            </Link>
            <Link
              underline="hover"
              color="text.primary"
              href="/trademe/furniture"
            >
              Chair
            </Link>
            <Typography color="text.primary">Lounge Chair</Typography>
          </Breadcrumbs>
        </div>
        <div className="flex flex-col basis-1/4 items-end justify-end">
          <div className="flex p-4">
            <div className="px-2">Kia Ora!</div>
            <div className="px-2">Username</div>
            <div className="px-2">Login / Register</div>
          </div>
          <div className="flex p-4">
            <div className="text-[#3b82f6] px-2 hover:cursor-pointer">
              <FontAwesomeIcon icon={faScaleUnbalanced} className="pr-2" />
              Compare Listings
            </div>
            <div className="text-[#943900] px-2 hover:cursor-pointer">
              Watchlist
            </div>
            {/* ------------------------------------ Menu Button ------------------------------------------------------- */}
            <div className="pr-2">
              <Dropdown>
                <MenuButton>
                  <FontAwesomeIcon icon={faCaretDown} className="px-1" />
                  My TradeMe
                </MenuButton>
                <Menu
                  slots={{ listbox: "ol" }}
                  className="bg-white p-4 hover:cursor-pointer"
                >
                  <MenuItem
                    onClick={createHandleMenuClick("Profile")}
                    className="hover:bg-[#3b82f6]"
                  >
                    Profile
                  </MenuItem>
                  <MenuItem
                    onClick={createHandleMenuClick("My Watchlist")}
                    className="hover:bg-[#3b82f6]"
                  >
                    My Watchlist
                  </MenuItem>
                  <MenuItem
                    onClick={createHandleMenuClick("Log out")}
                    className="hover:bg-[#3b82f6]"
                  >
                    Log out
                  </MenuItem>
                </Menu>
              </Dropdown>
            </div>

            {/* // ---------------------------- Menu Button -------------------------------------------------------  */}
          </div>
        </div>
      </div>
      {/* -------------------------------------- Search bar ------------------------------------------------------- */}
      <div className="bg-yellow-400 h-19 flex justify-center">
        <div className="flex basis-1/3 h-14 py-2 relative mx-auto text-gray-600">
          <div className="flex items-center w-full mx-10 rounded bg-white">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="pl-2" />
            <input
              className=" w-full border-none bg-transparent px-4 py-1 text-gray-400 outline-none focus:outline-none "
              type="search"
              name="search"
              placeholder="Search Listing with Keywords"
            />
            <button type="submit" className=" m-2 rounded bg-white px-4 py-2">
              Search
            </button>
          </div>
        </div>
        <div className="flex items-start basis-1/3 "></div>
      </div>
    </div>
  );
};
export default TopNavBar;
