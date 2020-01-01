import React from 'react';
import './Header.css';
import image from '../img/star.svg';
import Home from '@material-ui/icons/Home';
import Computer from '@material-ui/icons/Computer';
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline';
import CalenderToday from '@material-ui/icons/CalendarToday';
import Menu from '@material-ui/icons/Menu';
import Search from '@material-ui/icons/SearchOutlined';
import Searchicon from '../img/Searchicon.svg';
import ArrowDropDownOutlined from '@material-ui/icons/ArrowDropDownOutlined';
const NavItemMobile={
        display: 'inline-block',
        verticalAlign: 'middle',
}

const Header = () => {
        return(
            <div className='Header__header__3hboD Header__scrolled__IFMiQ'>
                <div className='Header__container-fluid__22LpT'>
                    <div className='.Header__content__1CQUT'>
                        <div className='Logo__LogoAction__3AVyJ'>
                            <img src={image} alt='Logo' />
                        </div>
                        <div>
                           <div className='Header__desktop__8Boon'>
                               <nav className='Nav__nav__3Uf6z'>
                                   <ul className='Nav__nav__list__t90Rk'>
                                       <li className='NavItem__nav__item__1sd-E'>
                                           <div className='NavItem__link__1AaAh' id='Navigation-item-1'>Live TV</div>
                                       </li>
                                       <li className='NavItem__nav__item__1sd-E'>
                                           <div className='NavItem__link__1AaAh' id='Navigation-item-2'>Catch Up</div>
                                       </li>
                                       <li className='NavItem__nav__item__1sd-E'>
                                           <div className='NavItem__link__1AaAh' id='Navigation-item-3'>TV Guide</div>
                                       </li>
                                       <li className='NavItem__nav__item__1sd-E'>
                                           <div className='NavItem__link__1AaAh' id='Navigation-item-4'>MyList</div>
                                       </li>
                                   </ul>
                               </nav>
                            </div> 
                            <nav className='NavMobile__nav__mobile__2MG7M'>
                                <div className='NavMobile__container-fluid__1I_sk'>
                                    <ul className='NavMobile__nav__list__39wYA'>
                                        <li className='NavItemMobile__nav__item__1iVT9 NavItemMobile__active__1GEQJ'>
                                            <a><Home></Home>
                                            <span className='NavItemMobile__label__1HsnN'>Home</span>
                                            </a>
                                        </li>
                                        <li className='NavItemMobile__nav__item__1iVT9'>
                                            <Computer></Computer>
                                            <span className='NavItemMobile__label__1HsnN'>Live TV</span>
                                        </li>
                                        <li className='NavItemMobile__nav__item__1iVT9'>
                                            <PlayCircleOutline></PlayCircleOutline>
                                            <span className='NavItemMobile__label__1HsnN'>Catch Up</span>
                                        </li>
                                        <li className='NavItemMobile__nav__item__1iVT9'>
                                            <CalenderToday></CalenderToday>
                                            <span className='NavItemMobile__label__1HsnN'>TV Guide</span>
                                        </li>
                                        <li className='NavItemMobile__nav__item__1iVT9'>
                                            <Menu></Menu>
                                            <span className='NavItemMobile__label__1HsnN'>More</span>
                                        </li>
                                    </ul>
                                </div>
                            </nav> 
                            <div className="MobileMenu__mobile__menu__3XkvA ">
                                <img className="MobileMenu__now__logo__22QSI" alt="DStv Now" src="./DStv Now_files/logo_dstvnow.f156e515.svg"/>
                                    <div className="MobileMenu__closeicon__Mutdj">
                                        <div className="IconSimple__icon__2x47N">
                                            <img src={Searchicon}/>
                                            <Search></Search>
                                        </div>
                                    </div>
                                    <div className="MobileMenu__profile__menu__2V03L">
                                        <ul className="MobileMenu__profile__list__10a0d">
                                            <li className="MobileMenu__profile__wrap__2vplD">
                                                <div className="MobileMenu__profile__2kBW3 MobileMenu__active__QBn9S">
                                                    <div className="MobileMenu__avatar__wrap__hPPu3">
                                                        <img className="Avatar__avatar__2EAqq" alt="avatar image" src="./DStv Now_files/1.png"/>
                                                    </div>
                                                    <span>Charles</span>
                                                 </div>
                                            </li>
                                            <li className="MobileMenu__profile__wrap__2vplD">
                                                <div className="MobileMenu__profile__2kBW3">
                                                    <div className="MobileMenu__avatar__wrap__hPPu3">
                                                        <div className="Avatar__add__avatar__2tB_r">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style={NavItemMobile} viewBox="0 0 1024 1024" width="16px" height="16px">
                                                                <g className="Icon__icon__35h2J"></g>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <span>Add Profile</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="MobileMenu__edit__link__14t96">
                                        <a className="MobileMenu__link__3RsJU" href="javascript:void(0);">
                                            <svg xmlns="http://www.w3.org/2000/svg" style={NavItemMobile} viewBox="0 0 1024 1024" width="16px" height="16px">
                                                <g className="Icon__icon__35h2J"></g>
                                            </svg>Edit Profiles
                                        </a>
                                    </div>
                                    <ul className="MobileMenu__dropdown__list__2QnAZ">
                                        <li className="MobileMenu__item__3bO91 ">
                                            <a className="Buttons__blue__3aKYI Buttons__btn__2AZwd" href="#signup" target="_blank">
                                                <div className="Buttons__loader__ppsiB"></div>
                                                <span>Link My DStv Account</span>
                                            </a>
                                        </li>
                                        <li className="MobileMenu__item__3bO91">
                                            <a className="MobileMenu__link__3RsJU">My List</a>
                                        </li>
                                        <li className="MobileMenu__item__3bO91">
                                            <a className="MobileMenu__link__3RsJU" href="#profile">Update Sign In Details</a>
                                        </li>
                                        <li className="MobileMenu__item__3bO91">
                                            <a className="MobileMenu__link__3RsJU" href="#manageAccounts">Manage Account Links</a>
                                            </li>
                                        <li className="MobileMenu__item__3bO91">
                                            <div className="MobileMenu__link__3RsJU">Live Chat</div>
                                            </li>
                                        <li className="MobileMenu__item__3bO91">
                                            <div className="MobileMenu__link__3RsJU" data-tracking-id="sign-out-link-mobile">Sign Out</div>
                                        </li>
                                    </ul>
                                </div> 
                        </div>
                        <div class="Header__content__right__DLCaI">
                            <div class="Header__linkbtn__1AHxb">
                                <a class="Buttons__blue__3aKYI Buttons__btn__2AZwd" href="#LinkMyDSTV" target="_blank">
                                    <div class="Buttons__loader__ppsiB"></div>
                                    <span>Link My DStv Account</span>
                                </a>
                            </div>
                            <div class="UserDropdown__user__dropdown__1iIDd" data-tracking-id="user-dropdown">
                                <div class="UserDropdown__dropdown__inner__2qCpB">
                                    <div class="UserDropdown__dropdown__avatar__12oU9">
                                        <img class="Avatar__avatar__2EAqq" alt="avatar image" src="./DStv Now_files/1.png"/>
                                    </div>
                                    <ArrowDropDownOutlined className='UserDropdown__caret__RqjqY'></ArrowDropDownOutlined>
                                    <div class="UserDropdown__caret__RqjqY"></div>
                                </div>
                                <div class="UserDropdown__user__menu__nQICt">
                                    <div class="UserDropdown__menu__wrap__3_gJU">
                                        <div class="UserDropdown__profile__menu__KuYB0">
                                            <ul class="UserDropdown__profile__list__2NX94">
                                                <li class="UserDropdown__profile__wrap__2rPIi">
                                                    <div class="UserDropdown__profile__18lgs UserDropdown__active__hYQjS">
                                                        <div class="UserDropdown__avatar__wrap__o1zEq">
                                                            <img class="Avatar__avatar__2EAqq" alt="avatar image" src="./DStv Now_files/1.png"/>
                                                        </div>
                                                        <span>Charles</span>
                                                        <div class="UserDropdown__edit__btn__2xVcN">
                                                            <div>
                                                                <a class="Buttons__icon__btn__1ELPz Buttons__icon__btn__base__13a4P" href="https://now.dstv.com/profiles/edit/4513d3f3-b676-46cc-b8ef-652b8d9a86b0">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" style={NavItemMobile} viewBox="0 0 1024 1024" width="16px" height="16px">
                                                                        <g class="Icon__icon__35h2J"></g>
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="UserDropdown__profile__wrap__2rPIi">
                                                    <div class="UserDropdown__profile__18lgs">
                                                        <div class="UserDropdown__avatar__wrap__o1zEq">
                                                            <div class="Avatar__add__avatar__2tB_r">
                                                                <svg xmlns="http://www.w3.org/2000/svg" style={NavItemMobile} viewBox="0 0 1024 1024" width="16px" height="16px">
                                                                    <g class="Icon__icon__35h2J">
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <span>Add profile</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <ul class="UserDropdown__dropdown__list__33LHT">
                                            <li class="UserDropdown__item__1NZnq">
                                                <a class="UserDropdown__link__1HB06" href="UpdateSigninDetails">Update sign in details</a>
                                            </li>
                                            <li class="UserDropdown__item__1NZnq">
                                                <a class="UserDropdown__link__1HB06" href="#ManageMyAccounts">Manage account links</a>
                                            </li>
                                            <li class="UserDropdown__item__1NZnq">
                                                <div class="UserDropdown__link__1HB06">Live chat</div>
                                            </li>
                                            <li class="UserDropdown__item__1NZnq">
                                                <div class="UserDropdown__link__1HB06" data-tracking-id="sign-out-link-web">Sign out</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="Header__searchicon__366Ut" data-tracking-id="search-button"><div class="IconSimple__icon__2x47N">
                                <Search></Search>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        );
  }

  export default Header;