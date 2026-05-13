'use client'

import { useState, useEffect, type ComponentType } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  LayoutDashboard,
  Users,
  FileText,
  RefreshCw,
  Receipt,
  LogOut,
  Menu,
  X,
} from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import styles from './AdminSidebar.module.css'

type IconComponent = ComponentType<{ size?: number; strokeWidth?: number; className?: string }>

const NAV_ITEMS: Array<{ label: string; href: string; Icon: IconComponent }> = [
  { label: 'Dashboard', href: '/admin', Icon: LayoutDashboard },
  { label: 'Clients', href: '/admin/clients', Icon: Users },
  { label: 'Devis', href: '/admin/devis', Icon: FileText },
  { label: 'Abonnements', href: '/admin/abonnements', Icon: RefreshCw },
  { label: 'Factures', href: '/admin/factures', Icon: Receipt },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  // Fermer la sidebar après un clic sur mobile (doit être AVANT le return)
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Masquer la sidebar sur la page de login (après les hooks !)
  if (pathname === '/admin/login') {
    return null
  }

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <>
      {/* Mobile Header Toggle */}
      <div className={styles.mobileHeader}>
        <div className={styles.mobileLogo}>
          <Logo />
          <div className={styles.logoText}>
            OptiPro <span>Admin</span>
          </div>
        </div>
        <button
          className={styles.hamburgerBtn}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
        </button>
      </div>

      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)} aria-hidden="true" />
      )}

      <aside className={`${styles.sidebar} ${isOpen ? styles.isOpen : ''}`}>
        <div className={styles.header}>
          <Logo />
          <div className={styles.logoText}>
            OptiPro <span>Admin</span>
          </div>
        </div>

        <nav className={styles.nav} aria-label="Navigation principale">
          <ul className={styles.navList}>
            {NAV_ITEMS.map(({ label, href, Icon }) => {
              const isActive = pathname === href || (pathname.startsWith(href) && href !== '/admin')
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                  >
                    <Icon size={18} strokeWidth={2} className={styles.navIcon} />
                    <span>{label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className={styles.footer}>
          <button onClick={handleLogout} className={styles.logoutBtn} type="button">
            <LogOut size={18} strokeWidth={2} className={styles.navIcon} />
            <span>Déconnexion</span>
          </button>
        </div>
      </aside>
    </>
  )
}

/**
 * Logo OptiPro version admin — carré orange avec O blanc.
 * Aligné sur l'identité du site public (orange #f97316).
 */
function Logo() {
  return (
    <div className={styles.logoIcon}>
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#f97316" />
        <path
          d="M16 9.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm0 3.2a3.3 3.3 0 1 1 0 6.6 3.3 3.3 0 0 1 0-6.6Z"
          fill="white"
        />
      </svg>
    </div>
  )
}
