import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const Header = ({setVisible, cartEnable}) => {
    const [cartCount, setCartCount] = useState(JSON.parse(localStorage.getItem("storage")).length);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        let buff = 0;
        JSON.parse(localStorage.getItem("storage")).forEach(elem => buff += elem.value)
        setCartCount(buff)
    }, [JSON.parse(localStorage.getItem("storage")).length])

    return (
        <div>
            {/* Top Header */}
            <div className="Announcement ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center display-none justify-content-between">
                            <p>+420 728 445 671</p>
                            <p>zbonted@gmail.com</p>
                        </div>
                        <div
                            className="icons col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
                            <Link to="">
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link to="">
                                <i className="fab fa-instagram"></i>
                            </Link>
                            <Link to="">
                                <i className="fab fa-linkedin-in"></i>
                            </Link>
                            <Link to="">
                                <i className="fab fa-youtube"></i>
                            </Link>
                            <Link to="">
                                <i className="fab fa-pinterest-p"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header */}
            <div className="header">
                <div className="container">
                    {/* MOBILE HEADER */}
                    <div className="mobile-header">
                        <div className="container ">
                            <div className="row ">
                                <div className="col-6 d-flex align-items-center">
                                    <Link
                                        className="navbar-brand"
                                        to="/">
                                        <img
                                            alt="logo"
                                            src="/images/logo.png"
                                        />
                                    </Link>
                                </div>
                                <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                                    <div className="btn-group">
                                        <button
                                            type="button"
                                            className="name-button dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">
                                            <i class="fas fa-user"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <Link
                                                className="dropdown-item"
                                                to="/profile">
                                                Profile
                                            </Link>

                                            <Link
                                                className="dropdown-item"
                                                to="#">
                                                Logout
                                            </Link>
                                        </div>
                                    </div>
                                    {cartEnable
                                        ?
                                        <div className={"cart_icon__wrapper"} onClick={() => setVisible(true)}>
                                            <i className="fas fa-shopping-bag"></i>
                                            {console.log(cartCount)}
                                            {cartCount !== 0
                                                ? <span className="badge">{cartCount}</span>
                                                : null}

                                        </div>
                                        : null}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PC HEADER */}
                    <div className="pc-header">
                        <div className="row justify-content-between">
                            <div className="col-md-3 col-4 d-flex align-items-center">
                                <Link
                                    className="navbar-brand"
                                    to="/">
                                    <img
                                        alt="logo"
                                        src="/images/logo.png"
                                    />
                                </Link>
                                <div className='col-md-3 category-button'>
                                    <div className='overlay'
                                         style={isOpen ? {display: 'block'} : {display: 'none'}}
                                         onClick={toggleDropdown}
                                    ></div>
                                    <button className="toggle-button btn btn-dark" onClick={toggleDropdown}>
                                        Categories
                                    </button>
                                    {isOpen &&
                                        <div className="dropdown-content">
                                            <ul className='list-group border-0 rounded-0 nav-list scroll w-30'>
                                                <li className='list-group-item border-0'><Link to='/'>Красота и
                                                    здоровье</Link></li>
                                                <li className='list-group-item border-0'><Link to='/'>Дом и сад</Link>
                                                </li>
                                                <li className='list-group-item border-0'><Link to='/'>Одежда и
                                                    обувь</Link></li>
                                                <li className='list-group-item border-0'><Link to='/'>Техника и
                                                    электроника</Link>
                                                </li>
                                                <li className='list-group-item border-0'><Link to='/'>Товары для
                                                    детей</Link></li>
                                                <li className='list-group-item border-0'><Link to='/'>Авто-, мото</Link>
                                                </li>
                                                <li className='list-group-item border-0'><Link to='/'>Подарки, хобби,
                                                    книги</Link>
                                                </li>
                                                <li className='list-group-item border-0'><Link to='/'>Аксессуары и
                                                    украшения</Link>
                                                </li>
                                                <li className='list-group-item border-0'><Link to='/'>Аксессуары и
                                                    украшения</Link>
                                                </li>
                                                <li className='list-group-item border-0'><Link to='/'>Аксессуары и
                                                    украшения</Link>
                                                </li>
                                            </ul>
                                            <div className='display-flex flex-wrap gap-5 subMenu_Wrapper scroll'>
                                                <ul className='subMenu'>
                                                    <li>Косметика по догляду</li>
                                                    <li>Догляд за обличчям</li>
                                                    <li>Догляд за волоссям</li>
                                                    <li>Догляд за тілом</li>
                                                </ul>
                                                <ul className='subMenu'>
                                                    <li>Косметика по догляду</li>
                                                    <li>Догляд за обличчям</li>
                                                    <li>Догляд за волоссям</li>
                                                    <li>Догляд за тілом</li>
                                                </ul>
                                                <ul className='subMenu'>
                                                    <li>Косметика по догляду</li>
                                                    <li>Догляд за обличчям</li>
                                                    <li>Догляд за волоссям</li>
                                                    <li>Догляд за тілом</li>
                                                </ul>
                                                <ul className='subMenu'>
                                                    <li>Косметика по догляду</li>
                                                    <li>Догляд за обличчям</li>
                                                    <li>Догляд за волоссям</li>
                                                    <li>Догляд за тілом</li>
                                                </ul>
                                                <ul className='subMenu'>
                                                    <li>Косметика по догляду</li>
                                                    <li>Догляд за обличчям</li>
                                                    <li>Догляд за волоссям</li>
                                                    <li>Догляд за тілом</li>
                                                </ul>
                                                <ul className='subMenu'>
                                                    <li>Косметика по догляду</li>
                                                    <li>Догляд за обличчям</li>
                                                    <li>Догляд за волоссям</li>
                                                    <li>Догляд за тілом</li>
                                                </ul>
                                                <ul className='subMenu'>
                                                    <li>Косметика по догляду</li>
                                                    <li>Догляд за обличчям</li>
                                                    <li>Догляд за волоссям</li>
                                                    <li>Догляд за тілом</li>
                                                </ul>
                                                <ul className='subMenu'>
                                                    <li>Косметика по догляду</li>
                                                    <li>Догляд за обличчям</li>
                                                    <li>Догляд за волоссям</li>
                                                    <li>Догляд за тілом</li>
                                                </ul>
                                            </div>
                                        </div>}
                                </div>
                            </div>
                            <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                                <div className="btn-group">
                                    <button
                                        type="button"
                                        className="name-button dropdown-toggle"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">
                                        Hi, Zbon
                                    </button>
                                    <div className="dropdown-menu">
                                        <Link
                                            className="dropdown-item"
                                            to="/profile">
                                            Profile
                                        </Link>

                                        <Link
                                            className="dropdown-item"
                                            to="#">
                                            Logout
                                        </Link>
                                    </div>
                                </div>

                                {cartEnable
                                    ?
                                    <div className={"cart_icon__wrapper"} onClick={() => setVisible(true)}>
                                        <i className="fas fa-shopping-bag"></i>
                                        {console.log(cartCount)}
                                        {cartCount !== 0
                                            ? <span className="badge">{cartCount}</span>
                                            : null}

                                    </div>
                                    : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
