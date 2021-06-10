import React from 'react'

import {
    FaHome,
    FaSearchLocation,
    FaBlog,
    FaPhoneAlt,
    FaUsers,
    FaFacebookF,
    FaInstagram,
    FaGoogle,
    FaTwitter,
} from 'react-icons/fa'

import { ButtonIcon } from '../ButtonIcon'
import { Wrapper, GroupSocialBtn, SidebarList, SidebarItem } from './Sidebar.elements'

export const SidebarMobile = (props) => {
    return (
        <Wrapper {...props}>
            <GroupSocialBtn>
                <ButtonIcon icon={<FaFacebookF />} />
                <ButtonIcon icon={<FaTwitter />} />
                <ButtonIcon icon={<FaGoogle />} />
                <ButtonIcon icon={<FaInstagram />} />
            </GroupSocialBtn>
            <SidebarList {...props}>
                <SidebarItem className="sidebar__item--active" {...props}>
                    <FaHome />
                    <span>Home</span>
                </SidebarItem>
                <SidebarItem {...props}>
                    <FaSearchLocation />
                    <span>Discover</span>
                </SidebarItem>
                <SidebarItem {...props}>
                    <FaBlog />
                    <span>Blogs</span>
                </SidebarItem>
                <SidebarItem {...props}>
                    <FaPhoneAlt />
                    <span>Contact</span>
                </SidebarItem>
                <SidebarItem {...props}>
                    <FaUsers />
                    <span>About Us</span>
                </SidebarItem>
            </SidebarList>
        </Wrapper>
    )
}
SidebarMobile.propTypes = {}

export default SidebarMobile
