import React, {useState} from 'react';
import Header from './../components/Header';
import ShopSection from './../components/homeComponents/ShopSection';
import ContactInfo from './../components/homeComponents/ContactInfo';
import CalltoActionSection from './../components/homeComponents/CalltoActionSection';
import Footer from './../components/Footer';
import ModalCart from "../components/utils/Cart/ModalCart";
import Navigation from "./Navigation";
import PartnersComponent from "../components/utils/Partners/PartnersComponent";
import PreFooter from "./PreFooter";

const HomeScreen = () => {
    window.scrollTo(0, 0);
    const [modal, setModal] = useState(false)


    return (
        <div>
            <Header setVisible={setModal} cartEnable={true}/>
            <Navigation/>
            <ShopSection visible={modal} setVisible={setModal}/>
            <CalltoActionSection/>
            <ContactInfo/>
            <PreFooter/>
            <Footer/>
        </div>
    );
};

export default HomeScreen;
