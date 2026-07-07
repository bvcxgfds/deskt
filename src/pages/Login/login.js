import { createElement as h, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Eye,
  EyeOff,
  Layers,
  LockKeyhole,
  Mail,
  Printer,
  ShieldCheck,
} from 'lucide-react'
import './login.css'

const APP_VERSION = 'v0.0.0'

function Icon(IconComponent, props = {}) {
  return h(IconComponent, { ...props, 'aria-hidden': props['aria-hidden'] ?? true })
}

function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return h(
    'main',
    { className: 'login-page', 'aria-label': 'PrintEzy partner login' },
    h(
      'section',
      { className: 'login-shell', 'aria-label': 'Partner Dashboard sign in' },
      h(
        'aside',
        { className: 'login-brand-panel', 'aria-label': 'PrintEzy branding' },
        h(
          'div',
          { className: 'login-brand-content' },
          h(
            'div',
            { className: 'login-logo-row' },
            h('div', { className: 'login-logo-mark', 'aria-hidden': true }, Icon(Printer, { size: 28, strokeWidth: 2.2 })),
            h('div', null, h('p', { className: 'login-logo-name' }, 'PrintEzy'), h('p', { className: 'login-logo-kicker' }, 'Partner Suite')),
          ),
          h(
            'div',
            { className: 'login-brand-copy' },
            h('span', { className: 'login-badge' }, Icon(ShieldCheck, { size: 15 }), 'Secure desktop access'),
            h('h1', null, 'Partner Dashboard'),
            h(
              'p',
              null,
              'Manage partner operations, customer verification, and print workflows from one focused workspace.',
            ),
          ),
          h(
            'div',
            { className: 'login-illustration', 'aria-hidden': true },
            h(
              'div',
              { className: 'login-illustration-card login-illustration-card-main' },
              h('div', { className: 'login-illustration-card-header' }, h('span'), h('span'), h('span')),
              h('div', { className: 'login-illustration-bars' }, h('span'), h('span'), h('span')),
            ),
            h('div', { className: 'login-illustration-card login-illustration-card-side' }, Icon(Layers, { size: 30 })),
          ),
        ),
        h('p', { className: 'login-version' }, `PrintEzy Partner Desktop ${APP_VERSION}`),
      ),
      h(
        'section',
        { className: 'login-form-panel', 'aria-label': 'Sign in form' },
        h(
          motion.div,
          {
            className: 'login-card',
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.35, ease: 'easeOut' },
          },
          h(
            'div',
            { className: 'login-card-header' },
            h('p', { className: 'login-card-eyebrow' }, 'Account access'),
            h('h2', null, 'Welcome Back'),
            h('p', null, 'Sign in to continue to your partner workspace.'),
          ),
          h(
            'form',
            { className: 'login-form', onSubmit: handleSubmit },
            h(
              'div',
              { className: 'login-field' },
              h('label', { htmlFor: 'login-identifier' }, 'Email or Phone'),
              h(
                'div',
                { className: 'login-input-wrap' },
                Icon(Mail, { size: 18 }),
                h('input', {
                  id: 'login-identifier',
                  name: 'identifier',
                  type: 'text',
                  inputMode: 'email',
                  autoComplete: 'username',
                  placeholder: 'partner@printezy.com',
                  autoFocus: true,
                }),
              ),
            ),
            h(
              'div',
              { className: 'login-field' },
              h('label', { htmlFor: 'login-password' }, 'Password'),
              h(
                'div',
                { className: 'login-input-wrap' },
                Icon(LockKeyhole, { size: 18 }),
                h('input', {
                  id: 'login-password',
                  name: 'password',
                  type: showPassword ? 'text' : 'password',
                  autoComplete: 'current-password',
                  placeholder: 'Enter password',
                }),
                h(
                  'button',
                  {
                    className: 'login-password-toggle',
                    type: 'button',
                    'aria-label': showPassword ? 'Hide password' : 'Show password',
                    onClick: () => setShowPassword((current) => !current),
                  },
                  showPassword ? Icon(EyeOff, { size: 18 }) : Icon(Eye, { size: 18 }),
                ),
              ),
            ),
            h(
              'div',
              { className: 'login-form-options' },
              h('label', { className: 'login-checkbox' }, h('input', { type: 'checkbox', name: 'remember' }), h('span', null, 'Remember Me')),
              h('button', { className: 'login-forgot', type: 'button', disabled: true }, 'Forgot Password'),
            ),
            h('div', { className: 'login-error-slot', role: 'status', 'aria-live': 'polite' }),
            h(
              motion.button,
              {
                className: 'login-submit',
                type: 'submit',
                disabled: isLoading,
                whileHover: { y: -1 },
                whileTap: { scale: 0.99 },
              },
              h('span', null, isLoading ? 'Signing In...' : 'Sign In'),
              Icon(ArrowRight, { size: 18 }),
            ),
          ),
          h('p', { className: 'login-card-version' }, `App version ${APP_VERSION}`),
        ),
      ),
    ),
  )
}

export default Login
