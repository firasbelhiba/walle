import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from 'reactstrap'
import LogoWhite from '../../assets/images/logos/amplelogowhite.svg'
import user1 from '../../assets/images/users/user1.jpg'
import { useWeb3Hook } from '../../../components/providers'
import { useAccount } from '../../../components/web3/hooks/useAccount'

const Header = ({ showMobmenu }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [dropdownOpen, setDropdownOpen] = React.useState(false)
  const {
    connect,
    isWeb3Loaded,
    isLoaded,
    requireInstallMetamask,
  } = useWeb3Hook()
  const { account } = useAccount()

  const toggle = () => setDropdownOpen((prevState) => !prevState)
  const Handletoggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Navbar color="secondary" dark expand="md">
      <div className="d-flex align-items-center">
        <NavbarBrand href="/" className="d-lg-none">
          <Image src={LogoWhite} alt="logo" />
        </NavbarBrand>
        <Button color="secondary" className="d-lg-none" onClick={showMobmenu}>
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2">
        <Button
          color="secondary"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>

      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto" navbar>
          <NavItem>
            {isLoaded ? (
              <a className="nav-link" onClick={connect}>
                Loading ...
              </a>
            ) : account.data ? (
              <a className="nav-link">
                Hi there ! welcome to WallE ! Here is your wallet address :
                {account.data}
              </a>
            ) : requireInstallMetamask ? (
              <Link
                href="https://metamask.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <a className="nav-link" onClick={connect}>
                  Install Metamask
                </a>
              </Link>
            ) : (
              <a className="nav-link" onClick={connect}>
                Connect Wallet
              </a>
            )}
          </NavItem>
        </Nav>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="secondary">
            <div style={{ lineHeight: '0px' }}>
              <Image
                src={user1}
                alt="profile"
                className="rounded-circle"
                width="30"
                height="30"
              />
            </div>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Info</DropdownItem>
            <DropdownItem>My Account</DropdownItem>
            <DropdownItem>Edit Profile</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>My Balance</DropdownItem>
            <DropdownItem>Inbox</DropdownItem>
            <DropdownItem>Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Collapse>
    </Navbar>
  )
}

export default Header
