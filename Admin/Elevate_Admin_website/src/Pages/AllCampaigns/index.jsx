import React, { useEffect, useState } from "react";
import Menu from "./AllMenu";
import AllCampaignsModal from "./AllCampaignsModal";
import Categories from "../../Components/CampaignRequest/Categories";
import axios from "axios";


const allCategories = ["all", "equity", "reward", "profit", "donation"];

const AllCampaigns = () => {
  const [items, setItems] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [dataForModal, setDataForModal] = useState({})
  const [loading, setLoading] = useState(false);
  const categories = allCategories;

  useEffect(()=>{
    setLoading(true);
    axios.get(
      // body: JSON.stringify({
      `${process.env.REACT_APP_API_URL}/api/campaigner/showcampaigns`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        withCredentials: true,
      }
    )
      .then(function (response) {
        console.log(response.data);
        setMenuItems(response.data)
        setItems(response.data)
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error.response.data.msg);
        alert(error.response.data.msg);
        setLoading(false);
      });
  }, [])

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.campaign_type === category);
    setMenuItems(newItems);
  };
  return (
    <>
      {modalOpen && <AllCampaignsModal setOpenModal={setModalOpen} dataForModal={dataForModal} setDataForModal={setDataForModal}/>}
      <div className="myProduct-body">
        <main>
          <section className="section">
            <div className="title">
              {/* <img src={logo} alt="logo" className="logo" /> */}
              <h2 style={{ fontSize: "3rem" }}>All Campaigns</h2>
              <div className="underline"></div>
            </div>
            <Categories
              categories={categories}
              activeCategory={activeCategory}
              filterItems={filterItems}
            />
            <Menu items={menuItems} setModalOpen={setModalOpen} setDataForModal={setDataForModal} loading={loading}/>
          </section>
        </main>
      </div>
    </>
  );
};

export default AllCampaigns;