import { Button, Nav, NavItem } from 'reactstrap'
import Logo from '../../logo/Logo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Modal from 'react-modal'
import TransferModal from '../../../components/dashboard/TransferModal'
import { useBalance } from '../../../../components/web3/hooks/useBalance'
import { useAccount } from '../../../../components/web3/hooks/useAccount'
import { useEffect, useState } from 'react'

Modal.setAppElement('#__next')

const navigation = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'bi bi-speedometer2',
  },
  {
    title: 'Assets',
    href: '/assets',
    icon: 'bi bi-bell',
  },
  {
    title: 'Alert',
    href: '/ui/alerts',
    icon: 'bi bi-bell',
  },
  {
    title: 'Badges',
    href: '/ui/badges',
    icon: 'bi bi-patch-check',
  },
  {
    title: 'Buttons',
    href: '/ui/buttons',
    icon: 'bi bi-hdd-stack',
  },
  {
    title: 'Cards',
    href: '/ui/cards',
    icon: 'bi bi-card-text',
  },
  {
    title: 'Grid',
    href: '/ui/grid',
    icon: 'bi bi-columns',
  },
  {
    title: 'Table',
    href: '/ui/tables',
    icon: 'bi bi-layout-split',
  },
  {
    title: 'Forms',
    href: '/ui/forms',
    icon: 'bi bi-textarea-resize',
  },
  {
    title: 'Breadcrumbs',
    href: '/ui/breadcrumbs',
    icon: 'bi bi-link',
  },
  {
    title: 'About',
    href: '/about',
    icon: 'bi bi-people',
  },
]

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#0a0b0d',
    padding: 0,
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(10,11,13,0.75)',
  },
}

const Sidebar = ({ showMobilemenu }) => {
  let curl = useRouter()
  const location = curl.pathname
  const [transferButton, setTransferButton] = useState(false)
  const { account } = useAccount()

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={showMobilemenu}
        ></Button>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link href={navi.href}>
                <a
                  className={
                    location === navi.href
                      ? 'text-primary nav-link py-3'
                      : 'nav-link text-secondary py-3'
                  }
                >
                  <i className={navi.icon}></i>
                  <span className="ms-3 d-inline-block">{navi.title}</span>
                </a>
              </Link>
            </NavItem>
          ))}
          <Button
            color="primary"
            tag="a"
            className="mt-3"
            onClick={() => setTransferButton(true)}
          >
            Send / Recieve
          </Button>
        </Nav>
        <Modal
          isOpen={transferButton}
          onRequestClose={() => curl.push('/dashboard')}
          style={customStyles}
        >
          <TransferModal
            setTransferButton={setTransferButton}
            walletAddress={account}
          />
        </Modal>
      </div>
    </div>
  )
}

export default Sidebar
