import React from "react";
import "./style.css";
import { RiHome4Line } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { IoIosChatboxes } from "react-icons/io";
import { FiChevronsLeft, FiMenu } from "react-icons/fi";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

function Sidebars() {
  const handleClick = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [isSidebarVisible, setSidebarVisible] = React.useState(false); // Start hidden on small devices

  const toggleSidebar = () => {
    // Toggle sidebar visibility based on screen width
    if (window.innerWidth <= 768) {
      // Adjust this value based on your responsive design breakpoints
      setSidebarVisible(!isSidebarVisible);
    }
  };

  return (
    <div>
      <button className="toggle-button" onClick={toggleSidebar}>
        <FiMenu />
      </button>
      <div className={`sideBar ${isSidebarVisible ? "" : "hidden"}`}>
        <Sidebar className={`app `} style={{ height: "100%" }}>
          <main>
            <Menu className="logo">
              <MenuItem suffix={<FiChevronsLeft />}>
                <div
                  className="text-3xl"
                  style={{
                    padding: "9px",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                  }}
                >
                  Ankit<span className="logoPart">.</span>
                </div>
              </MenuItem>
            </Menu>
            <Menu className="nav-links w-full justify-center items-center">
              <MenuItem
                icon={<RiHome4Line />}
                onClick={() => handleClick("home")}
              >
                Home
              </MenuItem>
              <MenuItem
                icon={<IoPerson />}
                onClick={() => handleClick("about")}
              >
                About
              </MenuItem>
              <MenuItem
                icon={<MdOutlineWorkspacePremium />}
                onClick={() => handleClick("projects")}
              >
                Projects
              </MenuItem>
              <MenuItem
                icon={<IoIosChatboxes />}
                onClick={() => handleClick("contact")}
              >
                Contact
              </MenuItem>
            </Menu>
          </main>
        </Sidebar>
      </div>
    </div>
  );
}

export default Sidebars;
